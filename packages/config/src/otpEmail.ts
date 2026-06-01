import emailjs from "@emailjs/browser";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export interface SendDeliveryOtpEmailsInput {
  deliveryId: string;
}

export interface SendDeliveryOtpEmailsResult {
  success: boolean;
  pickupEmailSent: boolean;
  dropoffEmailSent: boolean;
  message: string;
}

function getRequiredEnv(name: string): string | null {
  const value = import.meta.env[name]?.trim();
  if (!value) return null;
  if (
    value.includes("replace_with") ||
    value.includes("replace-with") ||
    value.includes("your_emailjs")
  ) {
    return null;
  }
  return value;
}

function safeString(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

async function sendTemplate(params: {
  serviceId: string;
  templateId: string;
  publicKey: string;
  toEmail: string;
  toName: string;
  trackingCode: string;
  otpCode: string;
  otpPhaseLabel: string;
  pickupAddress: string;
}) {
  const subject = `Your PTROS OTP Code - ${params.trackingCode}`;
  await emailjs.send(
    params.serviceId,
    params.templateId,
    {
      // Primary variables used by the template body
      to_email: params.toEmail,
      to_name: params.toName,
      tracking_code: params.trackingCode,
      otp_code: params.otpCode,
      otp_phase: params.otpPhaseLabel,
      pickup_address: params.pickupAddress,
      message: `${params.otpPhaseLabel} OTP for ${params.trackingCode}: ${params.otpCode}`,
      // Common EmailJS fallback fields for template headers
      subject,
      name: params.toName,
      from_name: "PTROS_Ls",
      reply_to: "noreply@ptros.co.ls",
      email: params.toEmail,
    },
    {
      publicKey: params.publicKey,
    },
  );
}

export async function sendDeliveryOtpEmails(
  deliveryId: string,
): Promise<SendDeliveryOtpEmailsResult> {
  try {
    const serviceId = getRequiredEnv("VITE_EMAILJS_SERVICE_ID");
    const publicKey = getRequiredEnv("VITE_EMAILJS_PUBLIC_KEY");
    const defaultTemplateId = getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID");

    // Use default template if specific ones aren't set
    const pickupTemplateId =
      getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID_SENDER") || defaultTemplateId;
    const dropoffTemplateId =
      getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID_RECEIVER") || defaultTemplateId;

    // Only require the default template ID to exist
    if (!serviceId || !publicKey || !defaultTemplateId) {
      return {
        success: false,
        pickupEmailSent: false,
        dropoffEmailSent: false,
        message:
          "EmailJS is not fully configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY, and VITE_EMAILJS_TEMPLATE_ID.",
      };
    }

    const firestore = getFirestore();
    const deliveryRef = doc(firestore, "deliveries", deliveryId);
    const deliverySnap = await getDoc(deliveryRef);

    if (!deliverySnap.exists()) {
      return {
        success: false,
        pickupEmailSent: false,
        dropoffEmailSent: false,
        message: "Delivery not found for OTP email sending.",
      };
    }

    const deliveryData = deliverySnap.data() as Record<string, unknown>;
    const otp = (deliveryData.otp || {}) as {
      pickup?: { code?: string };
      delivery?: { code?: string };
    };

    // pickup user = person at pickup address (gets pickup OTP)
    // Try senderEmail first, then customerEmail, then createdByEmail as fallbacks
    const pickupUserEmail = safeString(
      deliveryData.senderEmail,
      safeString(
        deliveryData.customerEmail,
        safeString(deliveryData.createdByEmail),
      ),
    );
    const pickupUserName = safeString(
      deliveryData.pickupContactName,
      safeString(deliveryData.customerName, "Customer"),
    );
    // dropoff user = person at delivery address (gets delivery OTP)
    // Try receiverEmail first, then deliveryContactEmail as fallback
    const dropoffUserEmail = safeString(
      deliveryData.receiverEmail,
      safeString(deliveryData.deliveryContactEmail),
    );
    const dropoffUserName = safeString(
      deliveryData.deliveryContactName,
      "Receiver",
    );
    const pickupCode = safeString(otp.pickup?.code);
    const deliveryCode = safeString(
      otp.delivery?.code,
      safeString(deliveryData.otpCode),
    );
    const trackingCode = safeString(deliveryData.trackingCode, deliveryId);
    const pickupAddress = safeString(
      deliveryData.pickupAddress,
      "Pickup point",
    );

    if (!pickupCode || !deliveryCode) {
      return {
        success: false,
        pickupEmailSent: false,
        dropoffEmailSent: false,
        message: "OTP codes are missing on this delivery.",
      };
    }

    let pickupEmailSent = false;
    let dropoffEmailSent = false;
    const errors: string[] = [];

    console.log(
      "[OTP Email] Pickup user email:",
      pickupUserEmail || "(empty — will skip)",
    );
    console.log(
      "[OTP Email] Dropoff user email:",
      dropoffUserEmail || "(empty — will skip)",
    );

    // System sends pickup OTP to the pickup user
    if (pickupUserEmail && pickupTemplateId) {
      try {
        console.log("[OTP Email] Sending pickup OTP to:", pickupUserEmail);
        await sendTemplate({
          serviceId,
          templateId: pickupTemplateId,
          publicKey,
          toEmail: pickupUserEmail,
          toName: pickupUserName,
          trackingCode,
          otpCode: pickupCode,
          otpPhaseLabel: "Pickup",
          pickupAddress,
        });
        pickupEmailSent = true;
        console.log("[OTP Email] Pickup OTP sent ✓");
      } catch (error: any) {
        const msg = safeString(error?.text || error?.message, "send_failed");
        console.error("[OTP Email] Pickup send failed:", msg, error);
        errors.push(`pickup: ${msg}`);
      }
    } else {
      console.warn(
        "[OTP Email] Skipping pickup email — email empty or template missing",
      );
    }

    // System sends delivery OTP to the dropoff user
    if (dropoffUserEmail && dropoffTemplateId) {
      try {
        console.log("[OTP Email] Sending dropoff OTP to:", dropoffUserEmail);
        await sendTemplate({
          serviceId,
          templateId: dropoffTemplateId,
          publicKey,
          toEmail: dropoffUserEmail,
          toName: dropoffUserName,
          trackingCode,
          otpCode: deliveryCode,
          otpPhaseLabel: "Delivery",
          pickupAddress,
        });
        dropoffEmailSent = true;
        console.log("[OTP Email] Dropoff OTP sent ✓");
      } catch (error: any) {
        const msg = safeString(error?.text || error?.message, "send_failed");
        console.error("[OTP Email] Dropoff send failed:", msg, error);
        errors.push(`dropoff: ${msg}`);
      }
    } else {
      console.warn(
        "[OTP Email] Skipping dropoff email — email empty or template missing",
      );
    }

    if (!pickupEmailSent && !dropoffEmailSent) {
      return {
        success: false,
        pickupEmailSent,
        dropoffEmailSent,
        message: errors.length
          ? `EmailJS send failed (${errors.join(" | ")})`
          : "EmailJS send failed for both users.",
      };
    }

    return {
      success: true,
      pickupEmailSent,
      dropoffEmailSent,
      message:
        pickupEmailSent && dropoffEmailSent
          ? "Pickup and dropoff OTP emails sent via EmailJS."
          : "OTP email sent partially via EmailJS.",
    };
  } catch (error: any) {
    return {
      success: false,
      pickupEmailSent: false,
      dropoffEmailSent: false,
      message: `EmailJS setup error: ${safeString(error?.message, "unknown_error")}`,
    };
  }
}
