import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { logger, setGlobalOptions } from "firebase-functions/v2";
import { Resend } from "resend";

initializeApp();
setGlobalOptions({ maxInstances: 10 });

const db = getFirestore();

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isPlaceholderValue(value: string): boolean {
  const normalized = value.toLowerCase();
  return (
    normalized.includes("replace_with") ||
    normalized.includes("replace-with") ||
    normalized.includes("yourdomain.com")
  );
}

function formatOptionalRecipient(
  name: string | null | undefined,
  email: string,
) {
  const safeName = (name || "").trim();
  return safeName ? `${safeName} <${email}>` : email;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildSenderHtml(params: {
  trackingCode: string;
  recipientName: string;
  pickupCode: string;
  pickupAddress?: string | null;
  deliveryAddress?: string | null;
}) {
  const recipientName = escapeHtml(params.recipientName || "Customer");
  const trackingCode = escapeHtml(params.trackingCode);
  const pickupCode = escapeHtml(params.pickupCode);
  const pickupAddress = escapeHtml(
    params.pickupAddress || "your pickup location",
  );
  const deliveryAddress = escapeHtml(
    params.deliveryAddress || "the delivery destination",
  );

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin-bottom: 12px; color: #111827;">Your pickup OTP is ready</h2>
      <p>Hello ${recipientName},</p>
      <p>Your PTROS delivery <strong>${trackingCode}</strong> has been created.</p>
      <p>Use this OTP when the carrier picks up the package at <strong>${pickupAddress}</strong>:</p>
      <div style="font-size: 32px; font-weight: 700; letter-spacing: 8px; padding: 12px 16px; background: #eff6ff; border: 1px solid #bfdbfe; display: inline-block; border-radius: 10px; color: #1d4ed8;">
        ${pickupCode}
      </div>
      <p style="margin-top: 16px;">After pickup, the package will head to <strong>${deliveryAddress}</strong>.</p>
      <p>If you did not expect this delivery, contact support immediately.</p>
    </div>
  `;
}

function buildReceiverHtml(params: {
  trackingCode: string;
  recipientName: string;
  deliveryCode: string;
  pickupAddress?: string | null;
  deliveryAddress?: string | null;
}) {
  const recipientName = escapeHtml(params.recipientName || "Recipient");
  const trackingCode = escapeHtml(params.trackingCode);
  const deliveryCode = escapeHtml(params.deliveryCode);
  const pickupAddress = escapeHtml(
    params.pickupAddress || "the pickup location",
  );
  const deliveryAddress = escapeHtml(
    params.deliveryAddress || "your delivery location",
  );

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin-bottom: 12px; color: #111827;">Your delivery OTP is ready</h2>
      <p>Hello ${recipientName},</p>
      <p>A PTROS delivery <strong>${trackingCode}</strong> is scheduled from <strong>${pickupAddress}</strong> to <strong>${deliveryAddress}</strong>.</p>
      <p>Use this OTP when the carrier arrives to complete delivery:</p>
      <div style="font-size: 32px; font-weight: 700; letter-spacing: 8px; padding: 12px 16px; background: #ecfdf5; border: 1px solid #a7f3d0; display: inline-block; border-radius: 10px; color: #047857;">
        ${deliveryCode}
      </div>
      <p style="margin-top: 16px;">Keep this code private and only share it with the carrier when you have received the package.</p>
      <p>If this delivery looks unfamiliar, please contact support.</p>
    </div>
  `;
}

async function ensureAuthorized(
  uid: string,
  deliveryData: FirebaseFirestore.DocumentData,
) {
  if (deliveryData.customerId === uid || deliveryData.createdBy === uid) {
    return;
  }

  const auth = getAuth();
  const user = await auth.getUser(uid);
  const role = user.customClaims?.role;

  if (role === "coordinator" || role === "admin") {
    return;
  }

  const userDoc = await db.collection("users").doc(uid).get();
  const userRole = userDoc.exists ? userDoc.data()?.role : null;
  if (userRole === "coordinator" || userRole === "admin") {
    return;
  }

  throw new HttpsError(
    "permission-denied",
    "You are not allowed to send OTP emails for this delivery.",
  );
}

export const sendDeliveryOtpEmails = onCall(async (request) => {
  if (!request.auth?.uid) {
    throw new HttpsError("unauthenticated", "You must be signed in.");
  }

  const deliveryId = String(request.data?.deliveryId || "").trim();
  if (!deliveryId) {
    throw new HttpsError("invalid-argument", "deliveryId is required.");
  }

  let resendApiKey: string;
  let from: string;
  try {
    resendApiKey = getRequiredEnv("RESEND_API_KEY");
    from = getRequiredEnv("OTP_FROM_EMAIL");
  } catch (error) {
    logger.error("Missing OTP email environment configuration", {
      error,
    });
    throw new HttpsError(
      "failed-precondition",
      "OTP email service is not configured yet. Set RESEND_API_KEY and OTP_FROM_EMAIL in Firebase Functions environment.",
    );
  }

  if (isPlaceholderValue(resendApiKey) || isPlaceholderValue(from)) {
    throw new HttpsError(
      "failed-precondition",
      "OTP email service is using placeholder values. Replace RESEND_API_KEY and OTP_FROM_EMAIL with real values.",
    );
  }

  const replyTo = process.env.OTP_REPLY_TO?.trim() || undefined;
  const resend = new Resend(resendApiKey);

  const deliveryRef = db.collection("deliveries").doc(deliveryId);
  const deliverySnap = await deliveryRef.get();
  if (!deliverySnap.exists) {
    throw new HttpsError("not-found", "Delivery not found.");
  }

  const deliveryData = deliverySnap.data() || {};
  await ensureAuthorized(request.auth.uid, deliveryData);

  const senderEmail = String(deliveryData.senderEmail || "").trim();
  const receiverEmail = String(deliveryData.receiverEmail || "").trim();
  const pickupCode = String(deliveryData.otp?.pickup?.code || "").trim();
  const deliveryCode = String(
    deliveryData.otp?.delivery?.code || deliveryData.otpCode || "",
  ).trim();
  const trackingCode = String(deliveryData.trackingCode || deliveryId).trim();
  const senderName = String(
    deliveryData.pickupContactName || deliveryData.customerName || "Customer",
  ).trim();
  const receiverName = String(
    deliveryData.deliveryContactName || "Recipient",
  ).trim();
  const pickupAddress = String(deliveryData.pickupAddress || "").trim();
  const deliveryAddress = String(deliveryData.deliveryAddress || "").trim();

  if (!pickupCode || !deliveryCode) {
    throw new HttpsError(
      "failed-precondition",
      "OTP codes are missing for this delivery.",
    );
  }

  if (!senderEmail && !receiverEmail) {
    throw new HttpsError(
      "failed-precondition",
      "No sender or receiver email address is stored for this delivery.",
    );
  }

  let senderEmailSent = false;
  let receiverEmailSent = false;
  const sendErrors: string[] = [];

  if (senderEmail) {
    try {
      await resend.emails.send({
        from,
        to: [formatOptionalRecipient(senderName, senderEmail)],
        replyTo: replyTo ? [replyTo] : undefined,
        subject: `PTROS Pickup OTP • ${trackingCode}`,
        html: buildSenderHtml({
          trackingCode,
          recipientName: senderName,
          pickupCode,
          pickupAddress,
          deliveryAddress,
        }),
        text: `Hello ${senderName}, your PTROS pickup OTP for ${trackingCode} is ${pickupCode}. Pickup: ${pickupAddress}. Delivery: ${deliveryAddress}.`,
      });
      senderEmailSent = true;
    } catch (error) {
      logger.error("Failed to send pickup OTP email", { deliveryId, error });
      sendErrors.push("sender_email_failed");
    }
  }

  if (receiverEmail) {
    try {
      await resend.emails.send({
        from,
        to: [formatOptionalRecipient(receiverName, receiverEmail)],
        replyTo: replyTo ? [replyTo] : undefined,
        subject: `PTROS Delivery OTP • ${trackingCode}`,
        html: buildReceiverHtml({
          trackingCode,
          recipientName: receiverName,
          deliveryCode,
          pickupAddress,
          deliveryAddress,
        }),
        text: `Hello ${receiverName}, your PTROS delivery OTP for ${trackingCode} is ${deliveryCode}. Pickup: ${pickupAddress}. Delivery: ${deliveryAddress}.`,
      });
      receiverEmailSent = true;
    } catch (error) {
      logger.error("Failed to send delivery OTP email", { deliveryId, error });
      sendErrors.push("receiver_email_failed");
    }
  }

  await deliveryRef.set(
    {
      otpNotifications: {
        senderEmail: senderEmail || null,
        receiverEmail: receiverEmail || null,
        senderSent: senderEmailSent,
        receiverSent: receiverEmailSent,
        lastAttemptAt: Timestamp.now(),
        lastAttemptBy: request.auth.uid,
        lastErrorCodes: sendErrors,
      },
      otpAudit: FieldValue.arrayUnion({
        type: "otp_email_dispatch",
        timestamp: Timestamp.now(),
        by: request.auth.uid,
        senderEmailSent,
        receiverEmailSent,
        errors: sendErrors,
      }),
    },
    { merge: true },
  );

  if (!senderEmailSent && !receiverEmailSent) {
    throw new HttpsError(
      "internal",
      "Failed to send OTP emails. Check Functions logs and Resend configuration.",
    );
  }

  return {
    success: true,
    senderEmailSent,
    receiverEmailSent,
    message:
      senderEmailSent && receiverEmailSent
        ? "Pickup and delivery OTP emails sent successfully."
        : "OTP email sent partially; check delivery notification status for details.",
  };
});
