// apps/coordinator/src/ActiveCarriers.tsx
import { useState, useEffect, useMemo } from "react";
import { db } from "@config";
import {
  collection,
  query,
  where,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { writeTimestamp, getTimeServiceStatus } from "./services/timeService";
import {
  FaCircleCheck,
  FaCirclePause,
  FaHourglassHalf,
  FaLocationDot,
  FaMobileScreen,
  FaMotorcycle,
  FaStar,
  FaTriangleExclamation,
  FaXmark,
} from "react-icons/fa6";

interface Carrier {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  vehicleType: string;
  licensePlate: string;
  status: string;
  isApproved: boolean;
  earnings: number;
  completedDeliveries: number;
  rating: number;
  createdAt: Date;
  lastActive: Date;
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp: Date;
  };
}

export default function ActiveCarriers() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [carriers, setCarriers] = useState<Carrier[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, active, inactive, pending
  const [selectedCarrier, setSelectedCarrier] = useState<Carrier | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    busy: 0,
    inactive: 0,
    pending: 0,
    totalEarnings: 0,
    totalDeliveries: 0,
  });

  const preferredStatusOrder = ["active", "busy", "inactive", "suspended"];

  // Load carriers with real-time updates
  useEffect(() => {
    // Simple query without orderBy to avoid index requirement
    const q = query(collection(db, "users"), where("role", "==", "carrier"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const carrierList: Carrier[] = [];
        let statsTemp = {
          total: 0,
          active: 0,
          busy: 0,
          inactive: 0,
          pending: 0,
          totalEarnings: 0,
          totalDeliveries: 0,
        };

        snapshot.forEach((doc) => {
          const data = doc.data();
          const carrier: Carrier = {
            id: doc.id,
            email: data.email || "",
            fullName: data.fullName || "Unknown Carrier",
            phone: data.phone || "",
            whatsapp: data.whatsapp || data.phone || "",
            address: data.address || "",
            city: data.city || "",
            vehicleType: data.vehicleType || "Not specified",
            licensePlate: data.licensePlate || "Not specified",
            status: data.status || "pending",
            isApproved: data.isApproved || false,
            earnings: data.earnings || 0,
            completedDeliveries: data.completedDeliveries || 0,
            rating: data.rating || 0,
            createdAt: data.createdAt?.toDate() || new Date(),
            lastActive: data.lastActive?.toDate() || new Date(),
            currentLocation: data.currentLocation
              ? {
                  lat: data.currentLocation.lat,
                  lng: data.currentLocation.lng,
                  timestamp:
                    data.currentLocation.timestamp?.toDate() || new Date(),
                }
              : undefined,
          };
          carrierList.push(carrier);

          // Update stats
          statsTemp.total++;
          if (carrier.status === "active" && carrier.isApproved)
            statsTemp.active++;
          if (carrier.status === "busy" && carrier.isApproved) statsTemp.busy++;
          if (carrier.status === "inactive") statsTemp.inactive++;
          if (!carrier.isApproved) statsTemp.pending++;
          statsTemp.totalEarnings += carrier.earnings;
          statsTemp.totalDeliveries += carrier.completedDeliveries;
        });

        // Sort locally by creation date (newest first)
        carrierList.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        );

        setCarriers(carrierList);
        setStats(statsTemp);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading carriers:", error);
        toast.error("Failed to load carriers");
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const availableStatusFilters = useMemo(() => {
    const statuses = Array.from(
      new Set(
        carriers
          .filter((carrier) => carrier.isApproved)
          .map((carrier) => carrier.status)
          .filter(Boolean),
      ),
    );

    const orderedStatuses = [
      ...preferredStatusOrder.filter((status) => statuses.includes(status)),
      ...statuses
        .filter((status) => !preferredStatusOrder.includes(status))
        .sort((a, b) => a.localeCompare(b)),
    ];

    return ["all", "pending", ...orderedStatuses];
  }, [carriers]);

  useEffect(() => {
    const requestedFilter = searchParams.get("filter");
    const allowedFilters = new Set(availableStatusFilters);

    if (requestedFilter && allowedFilters.has(requestedFilter)) {
      setFilter(requestedFilter);
      return;
    }

    if (!requestedFilter) {
      setFilter("all");
    }
  }, [availableStatusFilters, searchParams]);

  // Filter carriers
  const filteredCarriers = carriers.filter((carrier) => {
    if (filter === "all") return true;
    if (filter === "pending") return !carrier.isApproved;
    return carrier.isApproved && carrier.status === filter;
  });

  const getFilterButtonClass = (buttonFilter: string) => {
    const activeClasses =
      buttonFilter === "pending"
        ? "bg-yellow-600 text-white"
        : buttonFilter === "active"
          ? "bg-green-600 text-white"
          : buttonFilter === "inactive"
            ? "bg-gray-600 text-white"
            : buttonFilter === "busy"
              ? "bg-orange-600 text-white"
              : buttonFilter === "suspended"
                ? "bg-red-600 text-white"
                : "bg-blue-600 text-white";

    return `px-4 py-2 rounded-lg ${
      filter === buttonFilter ? activeClasses : "bg-gray-100 text-gray-700"
    }`;
  };

  const formatFilterLabel = (buttonFilter: string) => {
    if (buttonFilter === "all") return "All";
    if (buttonFilter === "pending") return "Pending Approval";
    return buttonFilter.charAt(0).toUpperCase() + buttonFilter.slice(1);
  };

  // Update carrier status
  const updateCarrierStatus = async (carrierId: string, newStatus: string) => {
    try {
      const timestamp = await writeTimestamp(`carriers/${carrierId}/status`);
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "users", carrierId), {
        status: newStatus,
        updatedAt: timestamp,
        ...(newStatus === "active" && { lastActive: timestamp }),
        timeSource: timeServiceStatus.primarySource,
      });
      toast.success(`Carrier status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating carrier:", error);
      toast.error("Failed to update carrier status");
    }
  };

  // Calculate rating stars
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            <FaStar />
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {parseFloat(rating.toFixed(2))}
        </span>
      </div>
    );
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get status badge
  const getStatusBadge = (status: string, isApproved: boolean) => {
    if (!isApproved) {
      return (
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
          <span className="inline-flex items-center gap-1">
            <FaHourglassHalf /> Pending
          </span>
        </span>
      );
    }

    switch (status) {
      case "active":
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            <span className="inline-flex items-center gap-1">
              <FaCircleCheck /> Active
            </span>
          </span>
        );
      case "inactive":
        return (
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
            <span className="inline-flex items-center gap-1">
              <FaCirclePause /> Inactive
            </span>
          </span>
        );
      case "suspended":
        return (
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
            <span className="inline-flex items-center gap-1">
              <FaTriangleExclamation /> Suspended
            </span>
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
            {status}
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const getStatCardClass = (active: boolean) =>
    `bg-white p-3 rounded-lg shadow-sm border transition-all text-left min-w-0 ${
      active ? "ring-2 ring-blue-500 border-blue-200" : "border-transparent"
    } hover:shadow-md hover:-translate-y-0.5`;

  return (
    <div>
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Carrier Management</h1>
        <p className="text-gray-600 mt-2">
          Monitor and manage all delivery carriers
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-3 mb-6">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={getStatCardClass(filter === "all")}
        >
          <div className="text-xs text-gray-500">Total Carriers</div>
          <div className="text-xl font-bold">{stats.total}</div>
        </button>
        <button
          type="button"
          onClick={() => setFilter("active")}
          className={getStatCardClass(filter === "active")}
        >
          <div className="text-xs text-gray-500">Active</div>
          <div className="text-xl font-bold text-green-600">{stats.active}</div>
        </button>
        <button
          type="button"
          onClick={() => setFilter("pending")}
          className={getStatCardClass(filter === "pending")}
        >
          <div className="text-xs text-gray-500">Pending</div>
          <div className="text-xl font-bold text-yellow-600">
            {stats.pending}
          </div>
        </button>
        <button
          type="button"
          onClick={() => setFilter("busy")}
          className={getStatCardClass(filter === "busy")}
        >
          <div className="text-xs text-gray-500">Busy</div>
          <div className="text-xl font-bold text-orange-600">{stats.busy}</div>
        </button>
        <button
          type="button"
          onClick={() => setFilter("inactive")}
          className={getStatCardClass(filter === "inactive")}
        >
          <div className="text-xs text-gray-500">Inactive</div>
          <div className="text-xl font-bold text-gray-600">
            {stats.inactive}
          </div>
        </button>
        <div className="bg-blue-50/60 p-3 rounded-lg shadow-sm border border-blue-100 ring-1 ring-blue-100 text-left min-w-0">
          <div className="text-xs text-blue-700 font-medium">
            Total Earnings
          </div>
          <div className="text-xl font-bold text-blue-700 truncate">
            M{stats.totalEarnings.toFixed(2)}
          </div>
        </div>
        <div className="bg-blue-50/60 p-3 rounded-lg shadow-sm border border-blue-100 ring-1 ring-blue-100 text-left min-w-0">
          <div className="text-xs text-blue-700 font-medium">
            Total Deliveries
          </div>
          <div className="text-xl font-bold text-blue-700">
            {stats.totalDeliveries}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex flex-wrap gap-1.5">
          {availableStatusFilters.map((statusFilter) => (
            <button
              key={statusFilter}
              onClick={() => setFilter(statusFilter)}
              className={`${getFilterButtonClass(statusFilter)} text-sm px-3 py-1.5`}
            >
              {formatFilterLabel(statusFilter)}
            </button>
          ))}
        </div>
      </div>

      {/* Carriers Table */}
      {filteredCarriers.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <FaMotorcycle className="text-6xl mb-4 mx-auto text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No carriers found
          </h3>
          <p className="text-gray-500 mb-6">
            {filter !== "all"
              ? `No carriers match the "${filter}" filter`
              : "No carriers have registered yet"}
          </p>
          <button
            type="button"
            onClick={() => setFilter("pending")}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Check Pending Registrations
          </button>
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
                    Vehicle & Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCarriers.map((carrier) => (
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
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">
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
                          <div className="text-xs text-gray-400">
                            Joined {formatDate(carrier.createdAt)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">
                          {carrier.vehicleType}
                        </div>
                        <div className="text-gray-500">
                          {carrier.licensePlate}
                        </div>
                        <div className="text-gray-500 inline-flex items-center gap-2">
                          <FaMobileScreen /> {carrier.phone}
                        </div>
                        <div className="text-gray-500 inline-flex items-center gap-2">
                          <FaLocationDot /> {carrier.city}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600">Deliveries:</span>
                          <span className="font-medium">
                            {carrier.completedDeliveries}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600">Earnings:</span>
                          <span className="font-medium text-green-600">
                            M{carrier.earnings.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Rating:</span>
                          {renderRating(carrier.rating)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {getStatusBadge(carrier.status, carrier.isApproved)}
                        {carrier.currentLocation && (
                          <div className="text-xs text-gray-500">
                            <span className="inline-flex items-center gap-1">
                              <FaLocationDot /> Live location
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-medium">{filteredCarriers.length}</span>{" "}
                of <span className="font-medium">{carriers.length}</span>{" "}
                carriers
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carrier Details Modal */}
      {selectedCarrier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedCarrier.fullName}
                  </h2>
                  <p className="text-gray-600">{selectedCarrier.email}</p>
                </div>
                <button
                  onClick={() => setSelectedCarrier(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  <FaXmark />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Phone:</span>
                        <span className="font-medium">
                          {selectedCarrier.phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">WhatsApp:</span>
                        <span className="font-medium">
                          {selectedCarrier.whatsapp}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Address:</span>
                        <span className="font-medium">
                          {selectedCarrier.address}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">City:</span>
                        <span className="font-medium">
                          {selectedCarrier.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Vehicle Information
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Type:</span>
                        <span className="font-medium">
                          {selectedCarrier.vehicleType}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Plate:</span>
                        <span className="font-medium">
                          {selectedCarrier.licensePlate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Performance
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Completed Deliveries:
                        </span>
                        <span className="font-medium">
                          {selectedCarrier.completedDeliveries}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Total Earnings:</span>
                        <span className="font-medium text-green-600">
                          M{selectedCarrier.earnings.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Rating:</span>
                        {renderRating(selectedCarrier.rating)}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Member Since:</span>
                        <span className="font-medium">
                          {formatDate(selectedCarrier.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Status & Actions
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Status:</span>
                        {getStatusBadge(
                          selectedCarrier.status,
                          selectedCarrier.isApproved,
                        )}
                      </div>

                      <div className="flex space-x-2">
                        {selectedCarrier.isApproved ? (
                          <>
                            {selectedCarrier.status === "active" ? (
                              <button
                                onClick={() => {
                                  updateCarrierStatus(
                                    selectedCarrier.id,
                                    "inactive",
                                  );
                                  setSelectedCarrier(null);
                                }}
                                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                              >
                                Deactivate
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  updateCarrierStatus(
                                    selectedCarrier.id,
                                    "active",
                                  );
                                  setSelectedCarrier(null);
                                }}
                                className="flex-1 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
                              >
                                Activate
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            type="button"
                            className="flex-1 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-center"
                            onClick={() => {
                              setFilter("pending");
                              setSelectedCarrier(null);
                            }}
                          >
                            Review Approval
                          </button>
                        )}

                        <Link
                          to={`/carriers/${selectedCarrier.id}`}
                          className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-center"
                          onClick={() => setSelectedCarrier(null)}
                        >
                          Full Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Location */}
              {selectedCarrier.currentLocation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <FaLocationDot className="text-blue-600 mr-2" />
                    <div>
                      <h4 className="font-medium text-blue-800">
                        Live Location Available
                      </h4>
                      <p className="text-sm text-blue-700">
                        Last updated:{" "}
                        {selectedCarrier.currentLocation.timestamp.toLocaleTimeString()}
                      </p>
                      <p className="text-xs text-blue-600">
                        Coordinates:{" "}
                        {selectedCarrier.currentLocation.lat.toFixed(4)},{" "}
                        {selectedCarrier.currentLocation.lng.toFixed(4)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
