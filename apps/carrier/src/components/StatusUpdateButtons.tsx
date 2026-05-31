import React from "react";
import { useDeliveryStatus } from "../hooks/useDeliveryStatus";
import { CarrierService } from "../carrierService";

interface StatusUpdateButtonsProps {
  deliveryId: string;
  currentStatus: string;
  onStatusUpdate?: (status: string) => void;
  compact?: boolean;
}

export const StatusUpdateButtons: React.FC<StatusUpdateButtonsProps> = ({
  deliveryId,
  currentStatus,
  onStatusUpdate,
  compact = false,
}) => {
  const { updateStatus, loading, error } = useDeliveryStatus();

  const handleStatusUpdate = async (
    status: "picked_up" | "out_for_delivery" | "stuck" | "delivered",
  ) => {
    try {
      if (status === "picked_up" || status === "delivered") {
        const phase = status === "picked_up" ? "pickup" : "delivery";
        const otp = window.prompt(`Enter ${phase} OTP`);

        let riskAccepted = false;
        let bypassReason: string | null = null;
        const otpValue = otp?.trim() ?? "";

        if (!otp) {
          const wantsRiskBypass = window.confirm(
            `Unable to get ${phase} OTP right now? Click OK to accept risk and continue without OTP.`,
          );
          if (!wantsRiskBypass) {
            return;
          }

          const reason = window.prompt(
            `Why are you accepting ${phase} OTP risk?`,
            "Customer unreachable after confirmed handoff",
          );

          if (!reason || reason.trim().length < 5) {
            throw new Error(
              "Please provide a valid risk reason (min 5 chars).",
            );
          }

          riskAccepted = true;
          bypassReason = reason.trim();
        }

        const verified = await CarrierService.verifyOtpForPhase(
          deliveryId,
          phase,
          riskAccepted ? "0000" : otpValue,
          riskAccepted
            ? {
                allowBypass: true,
                bypassReason,
              }
            : undefined,
        );

        if (!verified) {
          throw new Error(
            riskAccepted
              ? "Could not record OTP risk acceptance. Please try again."
              : "Invalid OTP. Please try again.",
          );
        }

        if (riskAccepted) {
          window.alert(
            `${phase === "pickup" ? "Pickup" : "Delivery"} completed with OTP risk acceptance.`,
          );
        }

        if (onStatusUpdate) {
          onStatusUpdate(status);
        }
        return;
      }

      await updateStatus(deliveryId, status);
      if (onStatusUpdate) {
        onStatusUpdate(status);
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  // Determine which buttons to show based on current status
  const getAvailableStatuses = () => {
    switch (currentStatus) {
      case "accepted":
        return ["picked_up"];
      case "picked_up":
        return ["delivered", "stuck"];
      case "in_transit":
        return ["delivered", "stuck"];
      case "out_for_delivery":
        return ["delivered", "stuck"];
      case "stuck":
        return ["out_for_delivery"];
      default:
        return [];
    }
  };

  const availableStatuses = getAvailableStatuses();

  if (availableStatuses.length === 0) {
    return null;
  }

  const statusConfig = {
    picked_up: {
      label: "📦 Picked Up",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Package collected from pickup location",
    },
    out_for_delivery: {
      label: "🚚 Resume Delivery",
      color: "bg-indigo-600 hover:bg-indigo-700",
      description: "Continue delivery after an issue",
    },
    stuck: {
      label: "⚠️ Stuck",
      color: "bg-orange-600 hover:bg-orange-700",
      description: "Facing delays or issues",
    },
    delivered: {
      label: "✅ Delivered",
      color: "bg-green-600 hover:bg-green-700",
      description: "Package delivered successfully",
    },
  };

  if (compact) {
    return (
      <div className="space-y-2">
        {error && (
          <div className="text-red-600 text-sm p-2 bg-red-50 rounded">
            {error}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {availableStatuses.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusUpdate(status as any)}
              disabled={loading}
              className={`px-3 py-2 rounded-lg text-white text-sm font-medium transition ${statusConfig[status as keyof typeof statusConfig].color} disabled:opacity-50`}
            >
              {loading
                ? "Updating..."
                : statusConfig[status as keyof typeof statusConfig].label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-700">Update Delivery Status</h3>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {availableStatuses.map((status) => (
          <button
            key={status}
            onClick={() => handleStatusUpdate(status as any)}
            disabled={loading}
            className={`p-4 rounded-xl text-white flex flex-col items-center justify-center transition ${statusConfig[status as keyof typeof statusConfig].color} disabled:opacity-50 hover:shadow-lg`}
          >
            <span className="text-lg mb-1">
              {status === "picked_up" && "📦"}
              {status === "out_for_delivery" && "🚚"}
              {status === "stuck" && "⚠️"}
              {status === "delivered" && "✅"}
            </span>
            <span className="font-semibold">
              {statusConfig[status as keyof typeof statusConfig].label}
            </span>
            <span className="text-xs opacity-90 mt-1">
              {statusConfig[status as keyof typeof statusConfig].description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
