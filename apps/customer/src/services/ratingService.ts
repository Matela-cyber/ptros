// apps/customer/src/services/ratingService.ts
import { db, auth } from "@config";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";

export interface DeliveryRating {
  id?: string;
  deliveryId: string;
  customerId: string;
  customerEmail: string;
  carrierId: string;
  carrierName: string;
  rating: number; // 1-5
  comment?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

/**
 * Submit a delivery rating from customer
 * Automatically calculates and updates carrier's average rating
 */
export const submitDeliveryRating = async (
  deliveryId: string,
  carrierId: string,
  carrierName: string,
  rating: number,
  comment?: string,
) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not authenticated");
    }

    // Validate rating
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      throw new Error("Rating must be an integer between 1 and 5");
    }

    // Create rating document
    const ratingsRef = collection(db, "deliveryRatings");
    const ratingData: DeliveryRating = {
      deliveryId,
      customerId: user.uid,
      customerEmail: user.email || "",
      carrierId,
      carrierName,
      rating,
      comment: comment || "",
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
    };

    const docRef = await addDoc(ratingsRef, ratingData);

    // Calculate carrier's new average rating
    const carrierRatingsQuery = query(
      ratingsRef,
      where("carrierId", "==", carrierId),
    );
    const ratingsSnapshot = await getDocs(carrierRatingsQuery);

    if (ratingsSnapshot.docs.length > 0) {
      const ratings = ratingsSnapshot.docs.map((d) => d.data().rating);
      const averageRating =
        ratings.reduce((a, b) => a + b, 0) / ratings.length;

      // Update carrier profile with new average rating
      const carrierRef = doc(db, "users", carrierId);
      await updateDoc(carrierRef, {
        rating: parseFloat(averageRating.toFixed(2)),
        updatedAt: serverTimestamp(),
      });
    }

    console.log(`[RatingService] Submitted rating ${rating}/5 for carrier ${carrierId}`);
    return docRef.id;
  } catch (error) {
    console.error("[RatingService] Error submitting rating:", error);
    throw error;
  }
};

/**
 * Check if delivery has been rated by current user
 */
export const hasUserRatedDelivery = async (deliveryId: string): Promise<boolean> => {
  try {
    const user = auth.currentUser;
    if (!user) return false;

    const ratingsRef = collection(db, "deliveryRatings");
    const q = query(
      ratingsRef,
      where("deliveryId", "==", deliveryId),
      where("customerId", "==", user.uid),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.length > 0;
  } catch (error) {
    console.error("[RatingService] Error checking rating status:", error);
    return false;
  }
};

/**
 * Get rating for a specific delivery
 */
export const getDeliveryRating = async (
  deliveryId: string,
): Promise<DeliveryRating | null> => {
  try {
    const user = auth.currentUser;
    if (!user) return null;

    const ratingsRef = collection(db, "deliveryRatings");
    const q = query(
      ratingsRef,
      where("deliveryId", "==", deliveryId),
      where("customerId", "==", user.uid),
    );

    const snapshot = await getDocs(q);
    if (snapshot.docs.length > 0) {
      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
      } as DeliveryRating;
    }

    return null;
  } catch (error) {
    console.error("[RatingService] Error retrieving rating:", error);
    return null;
  }
};

/**
 * Get all ratings for a specific carrier (read-only view)
 */
export const getCarrierRatings = async (carrierId: string) => {
  try {
    const ratingsRef = collection(db, "deliveryRatings");
    const q = query(ratingsRef, where("carrierId", "==", carrierId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as DeliveryRating[];
  } catch (error) {
    console.error("[RatingService] Error retrieving carrier ratings:", error);
    return [];
  }
};
