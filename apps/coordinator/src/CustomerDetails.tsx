import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "@config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { format } from "date-fns";
import {
  FaArrowLeft,
  FaBox,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaUser,
} from "react-icons/fa6";

interface CustomerProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  createdAt?: Date;
}

interface DeliveryRow {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  paymentAmount: number;
  createdAt?: Date;
}

export default function CustomerDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<CustomerProfile | null>(null);
  const [deliveries, setDeliveries] = useState<DeliveryRow[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!id) {
        navigate("/customers");
        return;
      }

      try {
        const userSnap = await getDoc(doc(db, "users", id));
        if (!userSnap.exists()) {
          setCustomer(null);
          setLoading(false);
          return;
        }

        const userData = userSnap.data() as any;
        setCustomer({
          id: userSnap.id,
          fullName: userData.fullName || userData.name || "Unknown Customer",
          email: userData.email || "",
          phone: userData.phone || "",
          address: userData.address || "",
          city: userData.city || "",
          createdAt: userData.createdAt?.toDate?.() || undefined,
        });

        const deliveriesQuery = query(
          collection(db, "deliveries"),
          where("customerId", "==", userSnap.id),
        );
        const deliveriesSnap = await getDocs(deliveriesQuery);

        const rows: DeliveryRow[] = deliveriesSnap.docs
          .map((deliveryDoc) => {
            const d = deliveryDoc.data() as any;
            return {
              id: deliveryDoc.id,
              trackingCode:
                d.trackingCode || `PTR-${deliveryDoc.id.slice(0, 6)}`,
              status: d.status || "pending",
              pickupAddress: d.pickupAddress || "",
              deliveryAddress: d.deliveryAddress || "",
              paymentAmount: Number(d.paymentAmount || 0),
              createdAt: d.createdAt?.toDate?.() || undefined,
            };
          })
          .sort(
            (a, b) =>
              (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0),
          );

        setDeliveries(rows);
      } catch (error) {
        console.error("Error loading customer details:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Customer not found</h2>
        <button
          onClick={() => navigate("/customers")}
          className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Back to customers
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <button
          onClick={() => navigate("/customers")}
          className="mb-3 text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Customers
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Customer Details</h1>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
            <FaUser className="text-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">
              {customer.fullName}
            </h2>
            <p className="text-sm text-gray-500">Customer ID: {customer.id}</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="inline-flex items-center gap-2 text-gray-700">
                <FaEnvelope /> {customer.email || "No email"}
              </div>
              <div className="inline-flex items-center gap-2 text-gray-700">
                <FaPhone /> {customer.phone || "No phone"}
              </div>
              <div className="inline-flex items-center gap-2 text-gray-700 md:col-span-2">
                <FaLocationDot />{" "}
                {[customer.address, customer.city].filter(Boolean).join(", ") ||
                  "No address"}
              </div>
              {customer.createdAt && (
                <div className="text-gray-500 md:col-span-2">
                  Joined {format(customer.createdAt, "MMMM d, yyyy")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold text-gray-800 inline-flex items-center gap-2">
            <FaBox /> Recent Deliveries ({deliveries.length})
          </h3>
        </div>

        {deliveries.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">
            No deliveries found for this customer yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tracking
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {deliveries.slice(0, 10).map((delivery) => (
                  <tr
                    key={delivery.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/deliveries/${delivery.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/deliveries/${delivery.id}`);
                      }
                    }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {delivery.trackingCode}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {delivery.status.replace(/_/g, " ")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-sm truncate">
                      {delivery.pickupAddress} → {delivery.deliveryAddress}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      M{delivery.paymentAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {delivery.createdAt
                        ? format(delivery.createdAt, "MMM d, h:mm a")
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
