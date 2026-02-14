// apps/coordinator/src/Dashboard.tsx - UPDATED
type Props = {
  user: any;
  userProfile?: any;
};

export default function Dashboard({ user, userProfile }: Props) {
  const quickActions = [
    {
      label: "Create Delivery",
      icon: "➕",
      path: "/deliveries/create",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      label: "Approve Carriers",
      icon: "✅",
      path: "/carriers/pending",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      label: "Live Tracking",
      icon: "📍",
      path: "/tracking/live",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      label: "View Reports",
      icon: "📊",
      path: "/analytics",
      color: "bg-yellow-600 hover:bg-yellow-700",
    },
  ];

  const recentActivities = [
    {
      type: "delivery",
      action: "New delivery created",
      details: "Tracking #PTR-001 to Maseru",
      time: "5 min ago",
    },
    {
      type: "carrier",
      action: "Carrier approved",
      details: "John Doe approved",
      time: "15 min ago",
    },
    {
      type: "delivery",
      action: "Delivery completed",
      details: "Tracking #PTR-045 delivered",
      time: "30 min ago",
    },
    {
      type: "customer",
      action: "New customer registered",
      details: "Jane Smith signed up",
      time: "1 hour ago",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Coordinator Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {userProfile?.fullName || user.email}. Here's what's
          happening.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <span className="text-2xl text-blue-600">📦</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Deliveries</p>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <span className="text-2xl text-green-600">🏍️</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Carriers</p>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <span className="text-2xl text-purple-600">✅</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed Today</p>
              <p className="text-3xl font-bold">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg mr-4">
              <span className="text-2xl text-yellow-600">💰</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Revenue Today</p>
              <p className="text-3xl font-bold">M2,450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.path}
              className={`${action.color} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition transform hover:scale-105`}
            >
              <span className="text-3xl mb-2">{action.icon}</span>
              <span className="font-medium">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activity.type === "delivery"
                      ? "bg-blue-100"
                      : activity.type === "carrier"
                      ? "bg-green-100"
                      : "bg-purple-100"
                  }`}
                >
                  <span
                    className={
                      activity.type === "delivery"
                        ? "text-blue-600"
                        : activity.type === "carrier"
                        ? "text-green-600"
                        : "text-purple-600"
                    }
                  >
                    {activity.type === "delivery"
                      ? "📦"
                      : activity.type === "carrier"
                      ? "🏍️"
                      : "👤"}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">System Alerts</h3>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <span className="text-yellow-600 mr-3">⚠️</span>
                <div>
                  <h4 className="font-medium text-yellow-800">
                    3 carriers pending approval
                  </h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Review carrier applications in the pending approvals
                    section.
                  </p>
                  <a
                    href="/carriers/pending"
                    className="text-sm text-yellow-600 font-medium mt-2 inline-block"
                  >
                    Review now →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">📊</span>
                <div>
                  <h4 className="font-medium text-blue-800">
                    Monthly report ready
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    View delivery performance and analytics for this month.
                  </p>
                  <a
                    href="/analytics"
                    className="text-sm text-blue-600 font-medium mt-2 inline-block"
                  >
                    View report →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start">
                <span className="text-green-600 mr-3">✅</span>
                <div>
                  <h4 className="font-medium text-green-800">
                    System is running smoothly
                  </h4>
                  <p className="text-sm text-green-700 mt-1">
                    All services are operational. No issues detected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
