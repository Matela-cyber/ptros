// apps/customer/src/hooks/useNotifications.ts
import { useEffect, useState } from "react";
import { db } from "@config";
import { auth } from "@config";
import { collection, query, where, onSnapshot, updateDoc, doc, Timestamp } from "firebase/firestore";

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "order" | "delivery" | "system" | "alert";
  relatedOrderId?: string;
  relatedDeliveryId?: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // Subscribe to user's notifications
    const q = query(
      collection(db, "notifications"),
      where("userId", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const notificationsList: Notification[] = [];
        let unreadCnt = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const notification: Notification = {
            id: doc.id,
            userId: data.userId,
            title: data.title,
            message: data.message,
            type: data.type || "system",
            relatedOrderId: data.relatedOrderId,
            relatedDeliveryId: data.relatedDeliveryId,
            isRead: data.isRead || false,
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || new Date(),
          };
          notificationsList.push(notification);
          if (!notification.isRead) unreadCnt++;
        });

        // Sort by date descending (newest first)
        notificationsList.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        setNotifications(notificationsList);
        setUnreadCount(unreadCnt);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading notifications:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const markAsRead = async (notificationId: string) => {
    try {
      const notifRef = doc(db, "notifications", notificationId);
      await updateDoc(notifRef, {
        isRead: true,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      for (const notification of notifications) {
        if (!notification.isRead) {
          await markAsRead(notification.id);
        }
      }
    } catch (error) {
      console.error("Error marking all as read:", error);
    }
  };

  const clearNotification = async (notificationId: string) => {
    try {
      const notifRef = doc(db, "notifications", notificationId);
      await updateDoc(notifRef, { isRead: true });
      setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
    } catch (error) {
      console.error("Error clearing notification:", error);
    }
  };

  return {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead,
    clearNotification,
  };
};
