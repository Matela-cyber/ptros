import { getFunctions, httpsCallable } from "firebase/functions";

export interface SendDeliveryOtpEmailsInput {
  deliveryId: string;
}

export interface SendDeliveryOtpEmailsResult {
  success: boolean;
  senderEmailSent: boolean;
  receiverEmailSent: boolean;
  message: string;
}

export async function sendDeliveryOtpEmails(
  deliveryId: string,
): Promise<SendDeliveryOtpEmailsResult> {
  const callable = httpsCallable<
    SendDeliveryOtpEmailsInput,
    SendDeliveryOtpEmailsResult
  >(getFunctions(), "sendDeliveryOtpEmails");

  const result = await callable({ deliveryId });
  return result.data;
}
