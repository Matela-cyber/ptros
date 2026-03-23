// apps/customer/src/hooks/useNotifications.ts
import { useEffect, useMemo, useState } from "react";
import { db } from "@config";
import { auth } from "@config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

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
  source?: "db" | "delivery";
}

const LOCAL_NOTIFICATION_KEY_PREFIX = "ptros.customer.notifications";

const DELIVERY_STATUS_NOTIFICATIONS: Record<
  string,
  { title: string; type: Notification["type"]; message: (trackingCode: string) => string }
> = {
  assigned: {
    title: "Carrier Assigned",
    type: "order",
    message: (trackingCode) =>
      `Your order ${trackingCode} has been assigned to a carrier.`,
  },
  picked_up: {
    title: "Package Picked Up",
    type: "delivery",
    message: (trackingCode) =>
      `Your package ${trackingCode} has been picked up and is now on its way.`,
  },
  in_transit: {
    title: "In Transit",
    type: "delivery",
    message: (trackingCode) =>
      `Your package ${trackingCode} is currently in transit.`,
  },
  out_for_delivery: {
    title: "Out for Delivery",
    type: "delivery",
    message: (trackingCode) =>
      `Your package ${trackingCode} is out for delivery.`,
  },
  delivered: {
    title: "Delivered",
    type: "order",
    message: (trackingCode) =>
      `Your package ${trackingCode} has been delivered successfully.`,
  },
};

const toDateValue = (value: any): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value?.toDate === "function") return value.toDate();
  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
};

export const useNotifications = () => {
  const [currentUserId, setCurrentUserId] = useState<string | null>(
    auth.currentUser?.uid || null,
  );
  const [dbNotifications, setDbNotifications] = useState<Notification[]>([]);
  const [deliveryNotifications, setDeliveryNotifications] = useState<
    Notification[]
  >([]);
  const [localReadIds, setLocalReadIds] = useState<string[]>([]);
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUserId(user?.uid || null);
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!currentUserId) {
      setLocalReadIds([]);
      setDismissedIds([]);
      setDbNotifications([]);
      setDeliveryNotifications([]);
      setLoading(false);
      return;
    }

    try {
      const raw = localStorage.getItem(
        `${LOCAL_NOTIFICATION_KEY_PREFIX}.${currentUserId}`,
      );
      if (!raw) {
        setLocalReadIds([]);
        setDismissedIds([]);
        return;
      }

      const parsed = JSON.parse(raw) as {
        readIds?: string[];
        dismissedIds?: string[];
      };

      setLocalReadIds(Array.isArray(parsed.readIds) ? parsed.readIds : []);
      setDismissedIds(
        Array.isArray(parsed.dismissedIds) ? parsed.dismissedIds : [],
      );
    } catch {
      setLocalReadIds([]);
      setDismissedIds([]);
    }
  }, [currentUserId]);

  useEffect(() => {
    if (!currentUserId) return;

    try {
      localStorage.setItem(
        `${LOCAL_NOTIFICATION_KEY_PREFIX}.${currentUserId}`,
        JSON.stringify({
          readIds: localReadIds,
          dismissedIds,
        }),
      );
    } catch {
      // Ignore storage write failures
    }
  }, [currentUserId, localReadIds, dismissedIds]);

  useEffect(() => {
    if (!currentUserId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    let dbReady = false;
    let deliveryReady = false;

    const markReady = () => {
      if (dbReady && deliveryReady) {
        setLoading(false);
      }
    };

    // Subscribe to user's notifications
    const q = query(
      collection(db, "notifications"),
      where("userId", "==", currentUserId),
    );

    const unsubscribeNotifications = onSnapshot(
      q,
      (snapshot) => {
        const notificationsList: Notification[] = [];

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
            source: "db",
          };
          notificationsList.push(notification);
        });

        // Sort by date descending (newest first)
        notificationsList.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        );

        setDbNotifications(notificationsList);
        dbReady = true;
        markReady();
      },
      (error) => {
        console.error("Error loading notifications:", error);
        setDbNotifications([]);
        dbReady = true;
        markReady();
      },
    );

    // Delivery-derived notifications fallback/augmentation
    const deliveriesQuery = query(
      collection(db, "deliveries"),
      where("customerId", "==", currentUserId),
    );

    const unsubscribeDeliveries = onSnapshot(
      deliveriesQuery,
      (snapshot) => {
        const generated: Notification[] = [];

        snapshot.forEach((deliveryDoc) => {
          const data = deliveryDoc.data();
          const status = String(data.status || "");
          const statusMeta = DELIVERY_STATUS_NOTIFICATIONS[status];
          if (!statusMeta) return;

          const trackingCode = String(data.trackingCode || deliveryDoc.id);
          const baseTime =
            toDateValue(data.updatedAt) ||
            toDateValue(data.deliveredAt) ||
            toDateValue(data.createdAt) ||
            new Date();

          generated.push({
            id: `delivery-${deliveryDoc.id}-${status}`,
            userId: currentUserId,
            title: statusMeta.title,
            message: statusMeta.message(trackingCode),
            type: statusMeta.type,
            relatedOrderId: deliveryDoc.id,
            relatedDeliveryId: deliveryDoc.id,
            isRead: false,
            createdAt: baseTime,
            updatedAt: baseTime,
            source: "delivery",
          });
        });

        generated.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        setDeliveryNotifications(generated);
        deliveryReady = true;
        markReady();
      },
      (error) => {
        console.error("Error loading delivery-derived notifications:", error);
        setDeliveryNotifications([]);
        deliveryReady = true;
        markReady();
      },
    );

    return () => {
      unsubscribeNotifications();
      unsubscribeDeliveries();
    };
  }, [currentUserId]);

  const notifications = useMemo(() => {
    const dismissedSet = new Set(dismissedIds);
    const locallyReadSet = new Set(localReadIds);

    const merged = [...dbNotifications, ...deliveryNotifications]
      .filter((notification) => !dismissedSet.has(notification.id))
      .map((notification) => ({
        ...notification,
        isRead:
          notification.isRead || locallyReadSet.has(notification.id),
      }));

    merged.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    return merged;
  }, [dbNotifications, deliveryNotifications, dismissedIds, localReadIds]);

  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.isRead).length,
    [notifications],
  );

  const markAsRead = async (notificationId: string) => {
    const targetNotification = notifications.find(
      (notification) => notification.id === notificationId,
    );

    try {
      if (targetNotification?.source === "db") {
        const notifRef = doc(db, "notifications", notificationId);
        await updateDoc(notifRef, {
          isRead: true,
          updatedAt: Timestamp.now(),
        });
      }

      setLocalReadIds((prev) =>
        prev.includes(notificationId) ? prev : [...prev, notificationId],
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const unreadNotifications = notifications.filter(
        (notification) => !notification.isRead,
      );

      await Promise.all(
        unreadNotifications
          .filter((notification) => notification.source === "db")
          .map((notification) =>
            updateDoc(doc(db, "notifications", notification.id), {
              isRead: true,
              updatedAt: Timestamp.now(),
            }),
          ),
      );

      setLocalReadIds((prev) => {
        const merged = new Set(prev);
        unreadNotifications.forEach((notification) => merged.add(notification.id));
        return Array.from(merged);
      });
    } catch (error) {
      console.error("Error marking all as read:", error);
    }
  };

  const clearNotification = async (notificationId: string) => {
    try {
      const targetNotification = notifications.find(
        (notification) => notification.id === notificationId,
      );

      if (targetNotification?.source === "db") {
        const notifRef = doc(db, "notifications", notificationId);
        await updateDoc(notifRef, {
          isRead: true,
          updatedAt: Timestamp.now(),
        });
      }

      setLocalReadIds((prev) =>
        prev.includes(notificationId) ? prev : [...prev, notificationId],
      );
      setDismissedIds((prev) =>
        prev.includes(notificationId) ? prev : [...prev, notificationId],
      );
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
