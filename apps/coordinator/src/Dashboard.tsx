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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Coordinator Dashboard
          </h1>
          <p className="text-indigo-600 mt-2 font-semibold">
            Welcome back, {userProfile?.fullName || user.email}. Here's what's
            happening.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all border border-cyan-300/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-100 text-sm font-bold uppercase tracking-wide">Active Deliveries</p>
              <p className="text-4xl font-extrabold mt-2">12</p>
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <span className="text-4xl">📦</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all border border-emerald-300/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-bold uppercase tracking-wide">Active Carriers</p>
              <p className="text-4xl font-extrabold mt-2">8</p>
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <span className="text-4xl">🏍️</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all border border-fuchsia-300/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-fuchsia-100 text-sm font-bold uppercase tracking-wide">Completed Today</p>
              <p className="text-4xl font-extrabold mt-2">24</p>
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <span className="text-4xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all border border-yellow-300/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm font-bold uppercase tracking-wide">Revenue Today</p>
              <p className="text-4xl font-extrabold mt-2">M2,450</p>
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <span className="text-4xl">💰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-2 border-indigo-100">
        <h3 className="text-2xl font-extrabold mb-6 text-gray-800">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a
              key={index}
              href={action.path}
              className={`${action.color === "bg-blue-600 hover:bg-blue-700" ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/50" : action.color === "bg-green-600 hover:bg-green-700" ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/50" : action.color === "bg-purple-600 hover:bg-purple-700" ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50" : "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 shadow-lg shadow-amber-500/50"} text-white p-6 rounded-xl flex flex-col items-center justify-center text-center transition transform hover:scale-110 font-bold"}
              >
              <span className="text-4xl mb-3">{action.icon}</span>
              <span className="font-bold text-lg">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-indigo-100">
          <h3 className="text-xl font-extrabold mb-6 text-gray-800">Recent Activity</h3>
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
        <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-indigo-100">
          <h3 className="text-xl font-extrabold mb-6 text-gray-800">System Alerts</h3>
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
