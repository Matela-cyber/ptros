import { useEffect, useMemo, useState } from "react";
import { db } from "@config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FaClockRotateLeft, FaMagnifyingGlass } from "react-icons/fa6";

interface DeliveryHistoryRow {
  id: string;
  trackingCode: string;
  customerName: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  carrierName?: string;
  paymentAmount: number;
  createdAt?: Date;
  deliveredAt?: Date;
}

export default function DeliveryHistory() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<DeliveryHistoryRow[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDocs(
          query(collection(db, "deliveries"), orderBy("createdAt", "desc")),
        );

        const parsed: DeliveryHistoryRow[] = snap.docs
          .map((d) => {
            const data = d.data() as any;
            return {
              id: d.id,
              trackingCode: data.trackingCode || `PTR-${d.id.slice(0, 6)}`,
              customerName: data.customerName || "Unknown",
              status: data.status || "pending",
              pickupAddress: data.pickupAddress || "",
              deliveryAddress: data.deliveryAddress || "",
              carrierName: data.carrierName || "",
              paymentAmount: Number(data.paymentAmount || 0),
              createdAt: data.createdAt?.toDate?.() || undefined,
              deliveredAt: data.deliveredAt?.toDate?.() || undefined,
            };
          })
          .filter((row) => ["delivered", "cancelled"].includes(row.status));

        setRows(parsed);
      } catch (error) {
        console.error("Error loading delivery history:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter((row) => {
      return (
        row.trackingCode.toLowerCase().includes(term) ||
        row.customerName.toLowerCase().includes(term) ||
        row.pickupAddress.toLowerCase().includes(term) ||
        row.deliveryAddress.toLowerCase().includes(term) ||
        row.status.toLowerCase().includes(term)
      );
    });
  }, [rows, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Delivery History</h1>
          <p className="text-gray-600 mt-1">
            Completed and cancelled deliveries
          </p>
        </div>

        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search history..."
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaMagnifyingGlass className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <FaClockRotateLeft className="text-5xl text-gray-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-700">
            No historical deliveries found
          </h3>
          <p className="text-gray-500 mt-2">
            Try changing your search term or complete some deliveries first.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tracking
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Carrier
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Completed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Track
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/deliveries/${row.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/deliveries/${row.id}`);
                      }
                    }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.trackingCode}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.customerName}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          row.status === "delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row.carrierName || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      M{row.paymentAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {row.deliveredAt
                        ? format(row.deliveredAt, "MMM d, h:mm a")
                        : row.createdAt
                          ? format(row.createdAt, "MMM d, h:mm a")
                          : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/deliveries/${row.id}/track`}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded text-sm hover:bg-cyan-200 text-center inline-block"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Track
                      </Link>
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
