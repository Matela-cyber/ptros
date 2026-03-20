// apps/coordinator/src/PendingCarriers.tsx
import { useState, useEffect } from "react";
import { auth, db } from "@config";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { writeTimestamp, getTimeServiceStatus } from "./services/timeService";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        where("isApproved", "==", false),
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
      const timestamp = await writeTimestamp(`carriers/${carrierId}/approved`);
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "users", carrierId), {
        isApproved: true,
        status: "active",
        approvedAt: timestamp,
        approvedBy: auth.currentUser?.uid || "system",
        timeSource: timeServiceStatus.primarySource,
      });

      toast.success("Carrier approved successfully!");
      fetchPendingCarriers(); // Refresh list
    } catch (error) {
      console.error("Error approving carrier:", error);
      toast.error("Failed to approve carrier");
    }
  };

  const rejectCarrier = async (carrierId: string) => {
    try {
      const reason = window.prompt("Reason for rejection (required):")?.trim();

      if (!reason) {
        toast.error("Rejection reason is required");
        return;
      }

      const timestamp = await writeTimestamp(`carriers/${carrierId}/rejected`);
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "users", carrierId), {
        status: "rejected",
        rejectedAt: timestamp,
        rejectedReason: reason,
        rejectedBy: auth.currentUser?.uid || "system",
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
      <div className="flex flex-col justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading carriers...</p>
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
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <FaCircleCheck className="text-7xl mb-4 mx-auto text-green-500" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            No pending approvals
          </h3>
          <p className="text-gray-500 text-lg">
            All carrier applications have been processed.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-primary to-primary-light">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Carrier Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Applied
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
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
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => navigate(`/carriers/${carrier.id}`)}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 text-center"
                        >
                          View
                        </button>

                        <div className="flex space-x-1">
                          <button
                            onClick={() => approveCarrier(carrier.id)}
                            className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => rejectCarrier(carrier.id)}
                            className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200"
                          >
                            Reject
                          </button>
                        </div>
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
