// apps/customer/src/Dashboard.tsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCircleCheck,
  faHourglassHalf,
  faMap,
  faMoneyBillWave,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  user: any;
  userProfile?: any;
};

export default function Dashboard({ user, userProfile }: Props) {
  const [deliveries, setDeliveries] = useState<any[]>([]);
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalOrders: 0,
    activeOrders: 0,
    completedOrders: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const q = query(
          collection(db, "deliveries"),
          where("customerId", "==", user.uid),
        );
        const snapshot = await getDocs(q);
        const deliveryList: any[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          deliveryList.push({
            id: doc.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            paymentAmount: Number(data.paymentAmount || 0),
            createdAt: data.createdAt?.toDate() || new Date(),
            estimatedDelivery: data.estimatedDelivery?.toDate(),
          });
        });

        setDeliveries(deliveryList.slice(0, 5)); // Show recent 5

        // Calculate stats
        const totalSpent = deliveryList.reduce(
          (sum, delivery) => sum + (Number(delivery.paymentAmount) || 0),
          0,
        );

        setStats({
          totalOrders: deliveryList.length,
          activeOrders: deliveryList.filter((d) => d.status !== "delivered")
            .length,
          completedOrders: deliveryList.filter((d) => d.status === "delivered")
            .length,
          totalSpent,
        });
      } catch (error) {
        console.error("Error fetching deliveries:", error);
      }
    };

    fetchDeliveries();
  }, [user.uid]);

  const quickActions = [
    {
      label: "Create Order",
      icon: faPenToSquare,
      path: "/orders/new",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      label: "Live Tracking",
      icon: faMap,
      path: "/track-map",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      label: "My Orders",
      icon: faBox,
      path: "/orders",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const getStatusBadgeClass = (status: string) => {
    if (status === "delivered") return "bg-green-100 text-green-800";
    if (status === "in_transit") return "bg-blue-100 text-blue-800";
    return "bg-amber-100 text-amber-800";
  };

  const formatStatus = (status: string) =>
    status.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          Welcome Back, {userProfile?.fullName || "Customer"}!
        </h1>
        <p className="mt-1.5 text-sm text-gray-600">
          Here's an overview of your deliveries and account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link
          to="/orders?filter=all"
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-blue-100 p-2.5">
              <FontAwesomeIcon icon={faBox} className="text-lg text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Total Orders
              </p>
              <p className="mt-0.5 text-2xl font-semibold text-blue-600">
                {stats.totalOrders}
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/orders?filter=active"
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-yellow-100 p-2.5">
              <FontAwesomeIcon
                icon={faHourglassHalf}
                className="text-lg text-yellow-700"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Active Orders
              </p>
              <p className="mt-0.5 text-2xl font-semibold text-yellow-700">
                {stats.activeOrders}
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/orders?filter=completed"
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-green-100 p-2.5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-lg text-green-600"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Completed
              </p>
              <p className="mt-0.5 text-2xl font-semibold text-green-600">
                {stats.completedOrders}
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/orders?filter=completed&focus=spent"
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-purple-100 p-2.5">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-lg text-purple-600"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Total Spent
              </p>
              <p className="mt-0.5 text-2xl font-semibold text-purple-600">
                M{stats.totalSpent.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className={`${action.color} rounded-md p-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-95`}
            >
              <span className="mb-1 block text-xl">
                <FontAwesomeIcon icon={action.icon} />
              </span>
              <span>{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">
          Recent Orders
        </h3>
        {deliveries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No orders yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Tracking Code
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Delivery To
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((delivery) => (
                  <tr
                    key={delivery.id}
                    onClick={() => navigate(`/orders/${delivery.id}`)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        navigate(`/orders/${delivery.id}`);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer border-b border-gray-100 transition-colors hover:bg-gray-50 focus:bg-blue-50 focus:outline-none"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">
                      {delivery.trackingCode}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {delivery.deliveryAddress}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClass(delivery.status)}`}
                      >
                        {formatStatus(delivery.status)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {delivery.createdAt.toLocaleDateString()}
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
