// apps/customer/src/services/notificationService.ts
import { db } from "@config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export interface CreateNotificationParams {
  userId: string;
  title: string;
  message: string;
  type: "order" | "delivery" | "system" | "alert";
  relatedOrderId?: string;
  relatedDeliveryId?: string;
}

/**
 * Create a new notification for a user
 * Note: This should primarily be called from the backend/coordinator/carrier apps
 * Customers can only read their own notifications
 */
export const createNotification = async (params: CreateNotificationParams) => {
  try {
    const notificationsRef = collection(db, "notifications");
    const docRef = await addDoc(notificationsRef, {
      userId: params.userId,
      title: params.title,
      message: params.message,
      type: params.type,
      relatedOrderId: params.relatedOrderId || null,
      relatedDeliveryId: params.relatedDeliveryId || null,
      isRead: false,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating notification:", error);
    throw error;
  }
};

/**
 * Create sample notifications for testing (Development only)
 */
export const createSampleNotifications = async (userId: string) => {
  const samples = [
    {
      title: "Order Confirmed",
      message: "Your order #ORD-001 has been confirmed and will be picked up soon.",
      type: "order" as const,
    },
    {
      title: "In Transit",
      message: "Your package is on the way! Expected delivery in 2 hours.",
      type: "delivery" as const,
    },
    {
      title: "Out for Delivery",
      message: "Your delivery is out for delivery and will arrive within the hour.",
      type: "delivery" as const,
    },
    {
      title: "Delivery Update",
      message: "Slight delay due to traffic. Your package will arrive in about 30 minutes.",
      type: "alert" as const,
    },
  ];

  try {
    for (const sample of samples) {
      await createNotification({
        userId,
        title: sample.title,
        message: sample.message,
        type: sample.type,
      });
    }
    console.log("Sample notifications created successfully");
  } catch (error) {
    console.error("Error creating sample notifications:", error);
  }
};
