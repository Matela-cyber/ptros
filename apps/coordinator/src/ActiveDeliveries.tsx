// apps/coordinator/src/ActiveDeliveries.tsx
import { useState, useEffect, useMemo } from "react";
import { db } from "@config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { assignDeliveryIntelligently } from "./services/routeIntelligenceService";
import {
  FaBox,
  FaChartLine,
  FaTriangleExclamation,
  FaChartColumn,
} from "react-icons/fa6";

interface Delivery {
  id: string;
  trackingCode: string;
  status: string;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  carrierName?: string;
  priority: string;
  paymentAmount: number;
  packageWeight?: number;
  packageValue?: number;
  createdAt: Date;
  pickupDateTime?: Date;
  deliveryDate?: Date;
  pickupLocation?: { lat: number; lng: number };
  deliveryLocation?: { lat: number; lng: number };
}

export default function ActiveDeliveries() {
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, pending, assigned, in_transit, delivered
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "optimal" | "createdAt" | "status" | "urgency"
  >("optimal");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchParams] = useSearchParams();
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    assigned: 0,
    inTransit: 0,
    delivered: 0,
    cancelled: 0,
    revenue: 0,
  });

  // Load deliveries with real-time updates
  useEffect(() => {
    const q = query(collection(db, "deliveries"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const deliveryList: Delivery[] = [];
        let statsTemp = {
          total: 0,
          pending: 0,
          assigned: 0,
          inTransit: 0,
          delivered: 0,
          cancelled: 0,
          revenue: 0,
        };

        snapshot.forEach((doc) => {
          const data = doc.data();
          const delivery: Delivery = {
            id: doc.id,
            trackingCode: data.trackingCode || `PTR-${doc.id.slice(0, 6)}`,
            status: data.status || "pending",
            customerName: data.customerName || "Unknown",
            customerPhone: data.customerPhone || "",
            pickupAddress: data.pickupAddress || "",
            deliveryAddress: data.deliveryAddress || "",
            carrierName: data.carrierName,
            priority: data.priority || "standard",
            paymentAmount: data.paymentAmount || 0,
            packageWeight: data.packageWeight || 0,
            packageValue: data.packageValue || 0,
            createdAt: data.createdAt?.toDate() || new Date(),
            pickupDateTime: data.pickupDateTime?.toDate(),
            deliveryDate: data.deliveryDate?.toDate(),
            pickupLocation: data.pickupLocation,
            deliveryLocation: data.deliveryLocation,
          };
          deliveryList.push(delivery);

          // Update stats
          statsTemp.total++;
          if (delivery.status === "pending" || delivery.status === "created")
            statsTemp.pending++;
          if (delivery.status === "assigned" || delivery.status === "accepted")
            statsTemp.assigned++;
          if (delivery.status === "in_transit") statsTemp.inTransit++;
          if (delivery.status === "delivered") {
            statsTemp.delivered++;
            statsTemp.revenue += delivery.paymentAmount;
          }
          if (delivery.status === "cancelled") statsTemp.cancelled++;
        });

        setDeliveries(deliveryList);
        setStats(statsTemp);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading deliveries:", error);
        toast.error("Failed to load deliveries");
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // Initialize search term from URL query
  useEffect(() => {
    const queryTerm = searchParams.get("search") || "";
    if (queryTerm !== searchTerm) {
      setSearchTerm(queryTerm);
    }
  }, [searchParams, searchTerm]);

  const statusRank: Record<string, number> = {
    pending: 0,
    created: 0,
    assigned: 1,
    accepted: 1,
    picked_up: 2,
    in_transit: 3,
    out_for_delivery: 4,
    delivered: 5,
    cancelled: 6,
  };

  const urgencyRank: Record<string, number> = {
    urgent: 0,
    express: 1,
    standard: 2,
  };

  const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

  // Filter + sort deliveries
  const filteredAndSortedDeliveries = useMemo(() => {
    const filtered = deliveries.filter((delivery) => {
      // Status filter
      if (filter !== "all") {
        if (filter === "assigned") {
          if (!["assigned", "accepted"].includes(delivery.status)) {
            return false;
          }
        } else if (delivery.status !== filter) {
          return false;
        }
      }

      // Search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const compactTerm = normalize(searchTerm);
        return (
          delivery.trackingCode.toLowerCase().includes(term) ||
          delivery.customerName.toLowerCase().includes(term) ||
          normalize(delivery.customerPhone || "").includes(compactTerm) ||
          delivery.pickupAddress.toLowerCase().includes(term) ||
          delivery.deliveryAddress.toLowerCase().includes(term) ||
          delivery.status.toLowerCase().includes(term) ||
          (delivery.priority || "").toLowerCase().includes(term) ||
          (delivery.carrierName &&
            delivery.carrierName.toLowerCase().includes(term))
        );
      }

      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "createdAt") {
        return a.createdAt.getTime() - b.createdAt.getTime();
      }

      if (sortBy === "status") {
        const byStatus =
          (statusRank[a.status] ?? 99) - (statusRank[b.status] ?? 99);
        if (byStatus !== 0) return byStatus;
        return a.createdAt.getTime() - b.createdAt.getTime();
      }

      if (sortBy === "urgency") {
        const byUrgency =
          (urgencyRank[a.priority] ?? 99) - (urgencyRank[b.priority] ?? 99);
        if (byUrgency !== 0) return byUrgency;
        return a.createdAt.getTime() - b.createdAt.getTime();
      }

      // optimal default: incomplete first, urgent first, pending/created first, then queue by creation time
      const aTerminal = ["delivered", "cancelled"].includes(a.status);
      const bTerminal = ["delivered", "cancelled"].includes(b.status);
      if (aTerminal !== bTerminal) return aTerminal ? 1 : -1;

      const byUrgency =
        (urgencyRank[a.priority] ?? 99) - (urgencyRank[b.priority] ?? 99);
      if (byUrgency !== 0) return byUrgency;

      const byStatus =
        (statusRank[a.status] ?? 99) - (statusRank[b.status] ?? 99);
      if (byStatus !== 0) return byStatus;

      return a.createdAt.getTime() - b.createdAt.getTime();
    });

    return sortDirection === "asc" ? sorted : sorted.reverse();
  }, [deliveries, filter, searchTerm, sortBy, sortDirection]);

  // Assign carrier to delivery
  const assignCarrier = async (deliveryId: string) => {
    try {
      const result = await assignDeliveryIntelligently(deliveryId);
      const recommendation = result.selected;
      const graphSync = result.graphSyncResult;
      const syncText = graphSync
        ? graphSync.success
          ? graphSync.warnings.length
            ? `Graph sync OK with ${graphSync.warnings.length} warning(s)`
            : "Graph sync OK"
          : `Graph sync failed: ${graphSync.message}`
        : "Graph sync not executed";
      toast.success(
        `Smart assigned to ${recommendation.fullName} • ${parseFloat(recommendation.remainingCapacityKg.toFixed(2))}kg left • ${parseFloat(recommendation.distanceToPickupKm.toFixed(2))}km away • ${syncText}`,
        { duration: 4500 },
      );
    } catch (error) {
      console.error("Error assigning carrier:", error);
      toast.error("Failed to assign carrier");
    }
  };

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
      case "created":
        return "bg-yellow-100 text-yellow-800";
      case "assigned":
      case "accepted":
        return "bg-blue-100 text-blue-800";
      case "picked_up":
        return "bg-purple-100 text-purple-800";
      case "in_transit":
        return "bg-indigo-100 text-indigo-800";
      case "out_for_delivery":
        return "bg-orange-100 text-orange-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return (
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
            Urgent
          </span>
        );
      case "express":
        return (
          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
            Express
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
            Standard
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

  const successRate =
    stats.delivered + stats.cancelled > 0
      ? Math.round(
          (stats.delivered / (stats.delivered + stats.cancelled)) * 100,
        )
      : 0;
  const avgDeliveredAmount =
    stats.delivered > 0 ? stats.revenue / stats.delivered : 0;

  const getStatCardClass = (active: boolean) =>
    `bg-white p-4 rounded-xl shadow border transition-all text-left ${
      active ? "ring-2 ring-blue-500 border-blue-200" : "border-transparent"
    } hover:shadow-md hover:-translate-y-0.5`;

  return (
    <div>
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Deliveries</h1>
            <p className="text-gray-600 mt-2">
              Monitor and manage all deliveries in real-time
            </p>
          </div>
          <Link
            to="/deliveries/create"
            className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center"
          >
            <span className="mr-2">+</span> Create New Delivery
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={getStatCardClass(filter === "all")}
          >
            <div className="text-sm text-gray-500">Total</div>
            <div className="text-2xl font-bold">{stats.total}</div>
          </button>
          <button
            type="button"
            onClick={() => setFilter("pending")}
            className={getStatCardClass(filter === "pending")}
          >
            <div className="text-sm text-gray-500">Pending</div>
            <div className="text-2xl font-bold text-yellow-600">
              {stats.pending}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFilter("assigned")}
            className={getStatCardClass(filter === "assigned")}
          >
            <div className="text-sm text-gray-500">Assigned</div>
            <div className="text-2xl font-bold text-blue-600">
              {stats.assigned}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFilter("in_transit")}
            className={getStatCardClass(filter === "in_transit")}
          >
            <div className="text-sm text-gray-500">In Transit</div>
            <div className="text-2xl font-bold text-indigo-600">
              {stats.inTransit}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFilter("delivered")}
            className={getStatCardClass(filter === "delivered")}
          >
            <div className="text-sm text-gray-500">Delivered</div>
            <div className="text-2xl font-bold text-green-600">
              {stats.delivered}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFilter("delivered")}
            className={getStatCardClass(filter === "delivered")}
          >
            <div className="text-sm text-gray-500">Revenue</div>
            <div className="text-2xl font-bold text-purple-600">
              M{stats.revenue.toFixed(2)}
            </div>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("pending")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "pending"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter("assigned")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "assigned"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Assigned
              </button>
              <button
                onClick={() => setFilter("in_transit")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "in_transit"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                In Transit
              </button>
              <button
                onClick={() => setFilter("delivered")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "delivered"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Delivered
              </button>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2 w-full md:w-auto md:justify-end">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "optimal"
                      | "createdAt"
                      | "status"
                      | "urgency",
                  )
                }
                className="px-3 py-2 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                title="Sort deliveries by"
              >
                <option value="optimal">Optimal (default)</option>
                <option value="createdAt">Time created</option>
                <option value="status">Status</option>
                <option value="urgency">Urgency</option>
              </select>

              <button
                type="button"
                onClick={() =>
                  setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
                }
                className="px-3 py-2 border rounded-lg bg-white text-sm text-gray-700 hover:bg-gray-50"
                title={`Sort ${sortDirection === "asc" ? "ascending" : "descending"}`}
              >
                {sortDirection === "asc" ? "Asc" : "Desc"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deliveries Table */}
      {filteredAndSortedDeliveries.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <FaBox className="text-6xl mb-4 mx-auto text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No deliveries found
          </h3>
          <p className="text-gray-500 mb-6">
            {searchTerm || filter !== "all"
              ? "Try changing your search or filter"
              : "Create your first delivery to get started"}
          </p>
          <Link
            to="/deliveries/create"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create First Delivery
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tracking & Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Carrier
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedDeliveries.map((delivery) => (
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
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex items-center">
                          <FaBox className="text-lg mr-2" />
                          <div>
                            <div className="font-medium text-gray-900">
                              {delivery.trackingCode}
                            </div>
                            <div className="text-sm text-gray-500">
                              {delivery.customerName}
                            </div>
                            <div className="text-xs text-gray-400">
                              {format(delivery.createdAt, "MMM d, h:mm a")}
                            </div>
                          </div>
                        </div>
                        {getPriorityBadge(delivery.priority)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">From:</div>
                        <div className="text-gray-500 truncate max-w-xs">
                          {delivery.pickupAddress}
                        </div>
                        <div className="font-medium text-gray-900 mt-2">
                          To:
                        </div>
                        <div className="text-gray-500 truncate max-w-xs">
                          {delivery.deliveryAddress}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          delivery.status,
                        )}`}
                      >
                        {delivery.status.replace("_", " ").toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        {delivery.carrierName ? (
                          <>
                            <div className="font-medium text-gray-900">
                              {delivery.carrierName}
                            </div>
                            <div className="text-gray-500">Assigned</div>
                          </>
                        ) : (
                          <span className="text-gray-400">Not assigned</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">
                          M{delivery.paymentAmount.toFixed(2)}
                        </div>
                        <div className="text-gray-500">COD</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination/Info */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-medium">
                  {filteredAndSortedDeliveries.length}
                </span>{" "}
                of <span className="font-medium">{deliveries.length}</span>{" "}
                deliveries
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {format(new Date(), "h:mm:ss a")}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions Panel */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4 inline-flex items-center gap-2">
            <FaChartColumn /> Delivery Insights
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span className="text-gray-600">Avg delivered amount:</span>
              <span className="font-medium">
                M{avgDeliveredAmount.toFixed(2)}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Success rate:</span>
              <span className="font-medium text-green-600">{successRate}%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Today's deliveries:</span>
              <span className="font-medium">{stats.delivered}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4 inline-flex items-center gap-2">
            <FaTriangleExclamation /> Urgent Actions
          </h3>
          <div className="space-y-3">
            {deliveries
              .filter((d) => d.status === "pending")
              .slice(0, 2)
              .map((delivery) => (
                <div
                  key={delivery.id}
                  className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{delivery.trackingCode}</div>
                    <div className="text-sm text-gray-600">
                      Needs assignment
                    </div>
                  </div>
                  <button
                    onClick={() => assignCarrier(delivery.id)}
                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm hover:bg-yellow-200"
                  >
                    Smart Assign
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4 inline-flex items-center gap-2">
            <FaChartLine /> Performance
          </h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {deliveries.length > 0
                ? Math.round((stats.delivered / deliveries.length) * 100)
                : 0}
              %
            </div>
            <div className="text-sm text-gray-600">Completion Rate</div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{
                    width: `${
                      deliveries.length > 0
                        ? (stats.delivered / deliveries.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
