// apps/coordinator/src/CustomerList.tsx
import { useEffect, useState } from "react";
import { db } from "@config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FaLocationDot, FaMobileScreen, FaUsers } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Customer {
  id: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  createdAt?: Date;
}

export default function CustomerList() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "users"), where("role", "==", "customer"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list: Customer[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          list.push({
            id: doc.id,
            fullName: data.fullName || data.name || data.displayName || "",
            email: data.email || "",
            phone: data.phone || "",
            address: data.address || "",
            city: data.city || "",
            createdAt: data.createdAt?.toDate?.() || undefined,
          });
        });
        setCustomers(list);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading customers:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const formatDate = (date?: Date) => {
    if (!date) return "-";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <p className="text-gray-600 mt-2">All registered customers</p>
      </div>

      {customers.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <FaUsers className="text-6xl mb-4 mx-auto text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No customers found
          </h3>
          <p className="text-gray-500">No customer accounts exist yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/customers/${customer.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/customers/${customer.id}`);
                      }
                    }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-700 font-bold">
                            {(customer.fullName ||
                              customer.email ||
                              "C")?.[0] || "C"}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {customer.fullName || "Unnamed Customer"}
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.email || "-"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-900 inline-flex items-center gap-2">
                          <FaMobileScreen /> {customer.phone || "-"}
                        </div>
                        <div className="text-gray-500 inline-flex items-center gap-2">
                          <FaLocationDot /> {customer.city || "-"}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {[customer.address, customer.city]
                        .filter(Boolean)
                        .join(", ") || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {formatDate(customer.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{customers.length}</span>{" "}
                customers
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
