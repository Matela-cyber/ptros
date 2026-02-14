// apps/coordinator/src/PendingCarriers.tsx
import { useState, useEffect } from "react";
import { db } from "@config";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import {
  writeTimestamp,
  getTimeServiceStatus,
} from "./services/timeService";

interface PendingCarrier {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  address: string;
  vehicleType?: string;
  licensePlate?: string;
  createdAt: Date;
}

export default function PendingCarriers() {
  const [carriers, setCarriers] = useState<PendingCarrier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingCarriers();
  }, []);

  const fetchPendingCarriers = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", false)
      );

      const snapshot = await getDocs(q);
      const carrierList: PendingCarrier[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        carrierList.push({
          id: doc.id,
          email: data.email,
          fullName: data.fullName,
          phone: data.phone,
          address: data.address,
          vehicleType: data.vehicleType,
          licensePlate: data.licensePlate,
          createdAt: data.createdAt?.toDate() || new Date(),
        });
      });

      setCarriers(carrierList);
    } catch (error) {
      console.error("Error fetching carriers:", error);
      toast.error("Failed to load pending carriers");
    } finally {
      setLoading(false);
    }
  };

  const approveCarrier = async (carrierId: string) => {
    try {
      const timestamp = await writeTimestamp(
        `carriers/${carrierId}/approved`
      );
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "users", carrierId), {
        isApproved: true,
        status: "active",
        approvedAt: timestamp,
        approvedBy: "coordinator", // TODO: Replace with actual coordinator ID
        timeSource: timeServiceStatus.primarySource,
      });

      toast.success("Carrier approved successfully!");
      fetchPendingCarriers(); // Refresh list

      // TODO: Send SMS notification to carrier via Twilio
    } catch (error) {
      console.error("Error approving carrier:", error);
      toast.error("Failed to approve carrier");
    }
  };

  const rejectCarrier = async (carrierId: string) => {
    try {
      const timestamp = await writeTimestamp(
        `carriers/${carrierId}/rejected`
      );
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "users", carrierId), {
        status: "rejected",
        rejectedAt: timestamp,
        timeSource: timeServiceStatus.primarySource,
      });

      toast.success("Carrier rejected");
      fetchPendingCarriers();
    } catch (error) {
      console.error("Error rejecting carrier:", error);
      toast.error("Failed to reject carrier");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-right" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Pending Carrier Approvals
        </h1>
        <p className="text-gray-600 mt-2">
          Review and approve carrier applications
        </p>
      </div>

      {carriers.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No pending approvals
          </h3>
          <p className="text-gray-500">
            All carrier applications have been processed.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Carrier Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {carriers.map((carrier) => (
                  <tr key={carrier.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          {carrier.fullName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {carrier.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-900">{carrier.phone}</div>
                        <div className="text-gray-500">{carrier.address}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-900">
                          {carrier.vehicleType || "Not specified"}
                        </div>
                        <div className="text-gray-500">
                          {carrier.licensePlate || "No plate"}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {carrier.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => approveCarrier(carrier.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => rejectCarrier(carrier.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          Reject
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
