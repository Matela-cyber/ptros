import { db, auth } from "@config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  Timestamp,
  orderBy,
  limit as fbLimit,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { Delivery } from "../types";
import { LocationService } from "./locationService";

export class DeliveryService {
  // Update delivery status with optional OTP (used by carrier UI)
  static async updateDeliveryStatus(
    deliveryId: string,
    status: string,
    otpCode?: string,
  ): Promise<boolean> {
    try {
      const updates: any = {
        status,
        updatedAt: Timestamp.now(),
      };

      if (status === "picked_up") {
        const generatedOtp =
          otpCode || Math.floor(1000 + Math.random() * 9000).toString();
        updates.pickupTime = Timestamp.now();
        updates.otpCode = generatedOtp;
        updates["proofOfDelivery.otp"] = generatedOtp;
        updates["proofOfDelivery.verified"] = false;
        updates["proofOfDelivery.verifiedAt"] = null;
      }

      if (status === "in_transit") {
        updates.inTransitTime = Timestamp.now();
      }

      if (status === "out_for_delivery") {
        updates.outForDeliveryTime = Timestamp.now();
      }

      if (status === "delivered") {
        updates.deliveryTime = Timestamp.now();
      }

      await updateDoc(doc(db, "deliveries", deliveryId), updates);
      return true;
    } catch (error) {
      console.error("Error updating delivery status:", error);
      return false;
    }
  }

  // Fetch a single delivery by id
  static async getDeliveryDetails(
    deliveryId: string,
  ): Promise<Delivery | null> {
    try {
      const q = query(
        collection(db, "deliveries"),
        where("__name__", "==", deliveryId),
        fbLimit(1),
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        return {
          id: snapshot.docs[0].id,
          ...(snapshot.docs[0].data() as any),
        } as Delivery;
      }
      return null;
    } catch (error) {
      console.error("Error fetching delivery details:", error);
      return null;
    }
  }

  // Get recent completed deliveries for a carrier (uses fbLimit)
  static async getCompletedDeliveries(
    carrierId: string,
    max: number = 10,
  ): Promise<Delivery[]> {
    try {
      const q = query(
        collection(db, "deliveries"),
        where("carrierId", "==", carrierId),
        where("status", "==", "delivered"),
        orderBy("deliveryTime", "desc"),
        fbLimit(max),
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(
        (d) => ({ id: d.id, ...(d.data() as any) }) as Delivery,
      );
    } catch (error) {
      console.error("Error fetching completed deliveries:", error);
      return [];
    }
  }

  // Accept delivery
  static async acceptDelivery(deliveryId: string): Promise<boolean> {
    try {
      const user = auth.currentUser;
      if (!user) return false;

      const updates: any = {
        status: "accepted",
        acceptedAt: Timestamp.now(),
        assignedAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        carrierId: user.uid,
        carrierEmail: user.email || null,
        carrierName: user.displayName || null,
        carrierPhone: user.phoneNumber || null,
      };

      await updateDoc(doc(db, "deliveries", deliveryId), updates);

      // Update carrier user status to busy (best-effort)
      try {
        await updateDoc(doc(db, "users", user.uid), {
          status: "busy",
          updatedAt: Timestamp.now(),
        });
      } catch (e) {
        // ignore user-update failures here
      }

      return true;
    } catch (error) {
      console.error("acceptDelivery error:", error);
      return false;
    }
  }

  // Complete delivery with OTP verification
  static async completeDelivery(
    deliveryId: string,
    otpCode?: string,
  ): Promise<boolean> {
    try {
      const updates: any = {
        status: "delivered",
        deliveryTime: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      if (otpCode) {
        updates["proofOfDelivery"] = {
          otp: otpCode,
          verified: true,
          verifiedAt: Timestamp.now(),
        };
      } else {
        updates["proofOfDelivery.verified"] = true;
        updates["proofOfDelivery.verifiedAt"] = Timestamp.now();
      }

      await updateDoc(doc(db, "deliveries", deliveryId), updates);

      // Clear location from RTDB on delivery completion
      await LocationService.clearCarrierLocation(deliveryId);

      return true;
    } catch (error) {
      console.error("completeDelivery error:", error);
      return false;
    }
  }
}

// Export standalone functions for use in components
export const acceptDelivery = DeliveryService.acceptDelivery;
export const completeDelivery = DeliveryService.completeDelivery;

// Export standalone function for status updates with location tracking
export const updateDeliveryStatus = async (
  deliveryId: string,
  status: "picked_up" | "in_transit" | "stuck" | "delivered",
  location?: { latitude: number; longitude: number },
  routeContext?: {
    reason?: string;
    note?: string;
    shortcut?: {
      start: { lat: number; lng: number };
      end: { lat: number; lng: number };
      vehicleTypeSpecific?: boolean;
      note?: string;
    };
  },
) => {
  try {
    const deliveryRef = doc(db, "deliveries", deliveryId);
    const updateData: any = {
      status,
      updatedAt: serverTimestamp(),
      statusHistory: arrayUnion({
        status,
        timestamp: new Date().toISOString(),
        location,
      }),
    };

    // Add timestamp for specific statuses
    if (status === "picked_up") {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
      updateData.pickupTime = serverTimestamp();
      updateData.otpCode = generatedOtp;
      updateData["proofOfDelivery.otp"] = generatedOtp;
      updateData["proofOfDelivery.verified"] = false;
      updateData["proofOfDelivery.verifiedAt"] = null;
    } else if (status === "delivered") {
      updateData.deliveryTime = serverTimestamp();
    }

    if (location) {
      updateData.location = location;
    }

    if (routeContext?.reason || routeContext?.note || routeContext?.shortcut) {
      updateData.routeContext = {
        reason: routeContext.reason || null,
        note: routeContext.note || null,
        shortcut: routeContext.shortcut || null,
        timestamp: new Date().toISOString(),
      };

      updateData.routeFeedback = arrayUnion({
        type: routeContext.shortcut ? "shortcut" : "deviation",
        reason: routeContext.reason || null,
        note: routeContext.note || null,
        shortcut: routeContext.shortcut || null,
        reportedAt: new Date().toISOString(),
      });
    }

    await updateDoc(deliveryRef, updateData);
    return { success: true, message: `Delivery marked as ${status}` };
  } catch (error: any) {
    console.error("Error updating delivery status:", error);
    throw new Error(error.message || "Failed to update delivery status");
  }
};

export const submitRouteFeedback = async (
  deliveryId: string,
  feedback: {
    type: "shortcut" | "blocked_route" | "traffic" | "other";
    reason: string;
    note?: string;
    shortcut?: {
      start: { lat: number; lng: number };
      end: { lat: number; lng: number };
      vehicleTypeSpecific?: boolean;
      note?: string;
    };
  },
) => {
  const deliveryRef = doc(db, "deliveries", deliveryId);
  await updateDoc(deliveryRef, {
    routeFeedback: arrayUnion({
      ...feedback,
      reportedAt: new Date().toISOString(),
      source: "carrier",
    }),
    updatedAt: serverTimestamp(),
  });
};
