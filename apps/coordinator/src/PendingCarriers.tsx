// apps/coordinator/src/PendingCarriers.tsx
import { useState, useEffect } from "react";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { FaCircleCheck, FaLocationDot, FaMobileScreen } from "react-icons/fa6";
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

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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

      carrierList.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      setCarriers(carrierList);
    } catch (error) {
      console.error("Error fetching carriers:", error);
      toast.error("Failed to load pending carriers");
    } finally {
      setLoading(false);
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {carriers.map((carrier) => (
                  <tr
                    key={carrier.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/carriers/${carrier.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/carriers/${carrier.id}`);
                      }
                    }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-yellow-700 font-bold">
                            {carrier.fullName?.[0] || "C"}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {carrier.fullName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {carrier.email}
                          </div>
                          <div className="text-xs text-yellow-700 font-medium">
                            Pending approval
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-900 inline-flex items-center gap-2">
                          <FaMobileScreen /> {carrier.phone || "-"}
                        </div>
                        <div className="text-gray-500 inline-flex items-center gap-2">
                          <FaLocationDot /> {carrier.address || "-"}
                        </div>
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
                      {formatDate(carrier.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{carriers.length}</span>{" "}
                pending carriers
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
