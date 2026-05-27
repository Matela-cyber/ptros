import { useState } from "react";
import { updateDeliveryStatus } from "../services/deliveryService";
import { CarrierService } from "../carrierService";
import { useCarrier } from "./useCarrier";

export const useDeliveryStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { carrier } = useCarrier();
  const currentLocation = carrier?.currentLocation || {
    latitude: 0,
    longitude: 0,
  };

  // Validate status transitions
  const validateStatusTransition = (
    current: string,
    next: string,
  ): { valid: boolean; message?: string } => {
    const allowedTransitions: Record<string, string[]> = {
      accepted: ["picked_up"],
      picked_up: ["out_for_delivery", "stuck"],
      in_transit: ["out_for_delivery", "stuck"],
      out_for_delivery: ["delivered", "stuck"],
      stuck: ["in_transit", "out_for_delivery"],
    };

    if (!allowedTransitions[current]) {
      return { valid: false, message: `Cannot update status from ${current}` };
    }

    if (!allowedTransitions[current].includes(next)) {
      return {
        valid: false,
        message: `Cannot transition from ${current} to ${next}`,
      };
    }

    return { valid: true };
  };

  const updateStatus = async (
    deliveryId: string,
    status:
      | "picked_up"
      | "in_transit"
      | "out_for_delivery"
      | "stuck"
      | "delivered",
    currentStatus?: string,
    routeContext?: {
      reason?: string;
      note?: string;
      shortcut?: {
        start: { lat: number; lng: number };
        end: { lat: number; lng: number };
        vehicleTypeSpecific?: boolean;
        note?: string;
      };
    },
  ) => {
    setLoading(true);
    setError(null);

    try {
      // Validate status transition if currentStatus is provided
      if (currentStatus) {
        const validation = validateStatusTransition(currentStatus, status);
        if (!validation.valid) {
          throw new Error(validation.message || "Invalid status transition");
        }
      }

      await updateDeliveryStatus(
        deliveryId,
        status,
        currentLocation,
        routeContext,
      );
      // Archive route stops — non-critical, must not block or fail the status update
      try {
        await CarrierService.archiveStopsForDelivery(deliveryId, status);
      } catch (archiveErr) {
        console.error(
          "archiveStopsForDelivery failed (useDeliveryStatus):",
          archiveErr,
        );
      }
      setLoading(false);
      return { success: true, message: `Status updated to ${status}` };
    } catch (err: any) {
      const errorMsg = err.message || "Failed to update status";
      setError(errorMsg);
      setLoading(false);
      throw err;
    }
  };

  // Get next available statuses based on current status
  const getAvailableStatuses = (
    currentStatus: string,
  ): Array<
    "picked_up" | "in_transit" | "out_for_delivery" | "stuck" | "delivered"
  > => {
    switch (currentStatus) {
      case "accepted":
        return ["picked_up"];
      case "picked_up":
        // in_transit is NOT a manual option from picked_up — only reachable from stuck
        return ["out_for_delivery", "stuck"];
      case "in_transit":
        return ["out_for_delivery", "stuck"];
      case "out_for_delivery":
        return ["delivered", "stuck"];
      case "stuck":
        return ["in_transit", "out_for_delivery"];
      default:
        return [];
    }
  };

  // Get status display information
  const getStatusInfo = (status: string) => {
    const statusInfo = {
      picked_up: {
        label: "Picked Up",
        icon: "fa-solid fa-box",
        color: "bg-blue-600",
        description: "Package collected from pickup location",
      },
      in_transit: {
        label: "Resume Transit",
        icon: "fa-solid fa-truck",
        color: "bg-purple-600",
        description: "Resuming after being stuck",
      },
      out_for_delivery: {
        label: "Out for Delivery",
        icon: "fa-solid fa-route",
        color: "bg-indigo-600",
        description: "On the way to recipient",
      },
      stuck: {
        label: "Report Stuck",
        icon: "fa-solid fa-triangle-exclamation",
        color: "bg-orange-600",
        description: "Facing delays or issues",
      },
      delivered: {
        label: "Delivered",
        icon: "fa-solid fa-circle-check",
        color: "bg-green-600",
        description: "Package delivered successfully",
      },
    };

    return (
      statusInfo[status as keyof typeof statusInfo] || {
        label: status,
        icon: "fa-regular fa-clipboard",
        color: "bg-gray-600",
        description: "",
      }
    );
  };

  return {
    updateStatus,
    loading,
    error,
    getAvailableStatuses,
    getStatusInfo,
    validateStatusTransition,
  };
};
