import { format } from "date-fns";

interface TimelineEvent {
  status: string;
  label: string;
  timestamp?: Date;
  completed: boolean;
  icon: string;
}

interface DeliveryTimelineProps {
  status: string;
  pickupTime?: Date;
  deliveryTime?: Date;
  acceptedAt?: Date;
  assignedAt?: Date;
  createdAt: Date;
}

export default function DeliveryTimeline({
  status,
  pickupTime,
  deliveryTime,
  acceptedAt,
  assignedAt,
  createdAt,
}: DeliveryTimelineProps) {
  const statusOrder = [
    "pending",
    "assigned",
    "accepted",
    "picked_up",
    "in_transit",
    "out_for_delivery",
    "delivered",
  ];

  const statusIndex = statusOrder.indexOf(status);

  const events: TimelineEvent[] = [
    {
      status: "pending",
      label: "Order Placed",
      timestamp: createdAt,
      completed: statusIndex >= 0,
      icon: "📦",
    },
    {
      status: "assigned",
      label: "Carrier Assigned",
      timestamp: assignedAt,
      completed: statusIndex >= 1,
      icon: "👤",
    },
    {
      status: "accepted",
      label: "Delivery Accepted",
      timestamp: acceptedAt,
      completed: statusIndex >= 2,
      icon: "✓",
    },
    {
      status: "picked_up",
      label: "Package Picked Up",
      timestamp: pickupTime,
      completed: statusIndex >= 3,
      icon: "🚗",
    },
    {
      status: "in_transit",
      label: "In Transit",
      timestamp: pickupTime,
      completed: statusIndex >= 4,
      icon: "🚙",
    },
    {
      status: "out_for_delivery",
      label: "Out for Delivery",
      timestamp: pickupTime,
      completed: statusIndex >= 5,
      icon: "📍",
    },
    {
      status: "delivered",
      label: "Delivered",
      timestamp: deliveryTime,
      completed: statusIndex >= 6,
      icon: "✅",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Delivery Timeline
      </h3>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"
          style={{
            height: `${(statusIndex + 1) * 80}px`,
            background:
              statusIndex >= 0
                ? "linear-gradient(to bottom, #10b981, #10b981)"
                : "#d1d5db",
          }}
        />

        {/* Timeline events */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.status} className="flex items-start gap-4 relative">
              {/* Dot */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 relative z-10 ${
                  event.completed
                    ? "bg-green-500 text-white"
                    : index === statusIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-600"
                }`}
              >
                {event.icon}
              </div>

              {/* Content */}
              <div className="pt-2 flex-1">
                <h4
                  className={`font-semibold ${
                    event.completed
                      ? "text-green-600"
                      : index === statusIndex
                        ? "text-blue-600"
                        : "text-gray-600"
                  }`}
                >
                  {event.label}
                </h4>
                {event.timestamp && (
                  <p className="text-sm text-gray-500 mt-1">
                    {format(event.timestamp, "MMM dd, yyyy hh:mm a")}
                  </p>
                )}
                {index === statusIndex && !event.completed && (
                  <p className="text-sm text-blue-500 mt-1 font-medium">
                    Current Status
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
