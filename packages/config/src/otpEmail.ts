import emailjs from "@emailjs/browser";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export interface SendDeliveryOtpEmailsInput {
  deliveryId: string;
}

export interface SendDeliveryOtpEmailsResult {
  success: boolean;
  senderEmailSent: boolean;
  receiverEmailSent: boolean;
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
  deliveryAddress: string;
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
      delivery_address: params.deliveryAddress,
      message: `${params.otpPhaseLabel} OTP for ${params.trackingCode}: ${params.otpCode}`,
      // Extra fields to satisfy any default EmailJS template variables
      subject,
      title: subject,
      name: params.toName,
      from_name: "PTROS_Ls",
      reply_to: "",
      time: new Date().toLocaleString(),
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
    const senderTemplateId =
      getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID_SENDER") || defaultTemplateId;
    const receiverTemplateId =
      getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID_RECEIVER") || defaultTemplateId;

    // Only require the default template ID to exist
    if (!serviceId || !publicKey || !defaultTemplateId) {
      return {
        success: false,
        senderEmailSent: false,
        receiverEmailSent: false,
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
        senderEmailSent: false,
        receiverEmailSent: false,
        message: "Delivery not found for OTP email sending.",
      };
    }

    const deliveryData = deliverySnap.data() as Record<string, unknown>;
    const otp = (deliveryData.otp || {}) as {
      pickup?: { code?: string };
      delivery?: { code?: string };
    };

    const senderEmail = safeString(deliveryData.senderEmail);
    const receiverEmail = safeString(deliveryData.receiverEmail);
    const senderName = safeString(
      deliveryData.pickupContactName,
      safeString(deliveryData.customerName, "Customer"),
    );
    const receiverName = safeString(
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
    const deliveryAddress = safeString(
      deliveryData.deliveryAddress,
      "Delivery destination",
    );

    if (!pickupCode || !deliveryCode) {
      return {
        success: false,
        senderEmailSent: false,
        receiverEmailSent: false,
        message: "OTP codes are missing on this delivery.",
      };
    }

    let senderEmailSent = false;
    let receiverEmailSent = false;
    const errors: string[] = [];

    // Send to sender (pickup OTP)
    if (senderEmail && senderTemplateId) {
      try {
        await sendTemplate({
          serviceId,
          templateId: senderTemplateId,
          publicKey,
          toEmail: senderEmail,
          toName: senderName,
          trackingCode,
          otpCode: pickupCode,
          otpPhaseLabel: "Pickup",
          pickupAddress,
          deliveryAddress,
        });
        senderEmailSent = true;
      } catch (error: any) {
        errors.push(
          `sender: ${safeString(error?.text || error?.message, "send_failed")}`,
        );
      }
    }

    // Send to receiver (delivery OTP)
    if (receiverEmail && receiverTemplateId) {
      try {
        await sendTemplate({
          serviceId,
          templateId: receiverTemplateId,
          publicKey,
          toEmail: receiverEmail,
          toName: receiverName,
          trackingCode,
          otpCode: deliveryCode,
          otpPhaseLabel: "Delivery",
          pickupAddress,
          deliveryAddress,
        });
        receiverEmailSent = true;
      } catch (error: any) {
        errors.push(
          `receiver: ${safeString(error?.text || error?.message, "send_failed")}`,
        );
      }
    }

    if (!senderEmailSent && !receiverEmailSent) {
      return {
        success: false,
        senderEmailSent,
        receiverEmailSent,
        message: errors.length
          ? `EmailJS send failed (${errors.join(" | ")})`
          : "EmailJS send failed for both recipients.",
      };
    }

    return {
      success: true,
      senderEmailSent,
      receiverEmailSent,
      message:
        senderEmailSent && receiverEmailSent
          ? "Pickup and delivery OTP emails sent via EmailJS."
          : "OTP email sent partially via EmailJS.",
    };
  } catch (error: any) {
    return {
      success: false,
      senderEmailSent: false,
      receiverEmailSent: false,
      message: `EmailJS setup error: ${safeString(error?.message, "unknown_error")}`,
    };
  }
}
