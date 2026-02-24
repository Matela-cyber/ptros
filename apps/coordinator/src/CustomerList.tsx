// apps/coordinator/src/CustomerList.tsx
import { useEffect, useState } from "react";
import { db } from "@config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

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
      }
    );

    return () => unsubscribe();
  }, []);

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
          <div className="text-6xl mb-4">👥</div>
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
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {customer.fullName || "Unnamed Customer"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.email || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.phone || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.address || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.city || "-"}
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
