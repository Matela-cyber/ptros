// apps/customer/src/useDeliveries.tsx
import { useState, useEffect } from "react";
import { db, auth } from "@config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

interface Delivery {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDetails: string;
  createdAt: Date;
  estimatedDelivery?: Date;
  actualDelivery?: Date;
}

export function useDeliveries() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "deliveries"),
      where("customerId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const deliveryList: Delivery[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          deliveryList.push({
            id: doc.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            packageDetails: data.packageDetails,
            createdAt: data.createdAt?.toDate() || new Date(),
            estimatedDelivery: data.estimatedDelivery?.toDate(),
            actualDelivery: data.actualDelivery?.toDate(),
          });
        });

        setDeliveries(
          deliveryList.sort(
            (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
          )
        );
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching deliveries:", err);
        setError("Failed to load deliveries");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { deliveries, loading, error };
}
