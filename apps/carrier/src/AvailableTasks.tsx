import { useState, useEffect } from "react";
import { CarrierService } from "./carrierService";
import { Delivery } from "./types";
import { toast, Toaster } from "react-hot-toast";
import { useGPSLocation } from "./hooks";

export default function AvailableTasks() {
  const [tab, setTab] = useState<"assigned" | "available">("assigned");
  const [assignedTasks, setAssignedTasks] = useState<Delivery[]>([]);
  const [availableTasks, setAvailableTasks] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState<string | null>(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const { isSharing, startSharing } = useGPSLocation();

  useEffect(() => {
    setLoading(true);

    // Restore location sharing from carrier profile if it was previously enabled
    const restoreLocationSharing = async () => {
      try {
        const profile = await CarrierService.getCarrierProfile();
        if (profile?.shareLocation && !isSharing) {
          console.log("🔄 Restoring location sharing on AvailableTasks...");
          startSharing();
        }
      } catch (error) {
        console.error("Error restoring location sharing:", error);
      }
    };

    restoreLocationSharing();

    // Subscribe to assigned tasks
    const unsubscribeAssigned = CarrierService.subscribeToAssignedDeliveries(
      (tasks) => {
        setAssignedTasks(tasks);
        setLoading(false);
      },
    );

    // Subscribe to available tasks
    const unsubscribeAvailable = CarrierService.subscribeToAvailableTasks(
      (tasks) => {
        setAvailableTasks(tasks);
        setLoading(false);
      },
    );

    return () => {
      unsubscribeAssigned();
      unsubscribeAvailable();
    };
  }, []);

  const handleAcceptAssignedJob = async (jobId: string) => {
    if (!isSharing) {
      setShowLocationModal(true);
      return;
    }

    setAccepting(jobId);
    try {
      const success = await CarrierService.acceptAssignedDelivery(
        jobId,
        isSharing,
      );
      if (success) {
        toast.success("Job accepted. Check dashboard for details.");
        setAssignedTasks((prev) => prev.filter((t) => t.id !== jobId));
      } else {
        toast.error("Failed to accept job");
      }
    } catch (error) {
      console.error("Error accepting job:", error);
      toast.error("Error accepting job");
    } finally {
      setAccepting(null);
    }
  };

  const handleRejectAssignedJob = async (jobId: string) => {
    setAccepting(jobId);
    try {
      const success = await CarrierService.declineAssignedDelivery(jobId);
      if (success) {
        toast.success("Job declined");
        setAssignedTasks((prev) => prev.filter((t) => t.id !== jobId));
      } else {
        toast.error("Failed to decline job");
      }
    } catch (error) {
      console.error("Error declining job:", error);
      toast.error("Error declining job");
    } finally {
      setAccepting(null);
    }
  };

  const handleAcceptAvailableTask = async (taskId: string) => {
    setAccepting(taskId);
    try {
      const success = await CarrierService.acceptTask(taskId);
      if (success) {
        toast.success("Task accepted. You are now on this delivery.");
        setAvailableTasks((prev) => prev.filter((t) => t.id !== taskId));
      } else {
        toast.error("Failed to accept task");
      }
    } catch (error) {
      console.error("Error accepting task:", error);
      toast.error("Error accepting task");
    } finally {
      setAccepting(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading tasks...</p>
        </div>
      </div>
    );
  }

  const totalAssignedCount = assignedTasks.length;
  const totalAvailableCount = availableTasks.length;

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Toaster position="top-center" />

      {/* Header */}
      <div className="bg-white/95 backdrop-blur shadow-sm border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Jobs & Tasks</h1>
              <p className="text-sm text-gray-500">
                Accept assignments quickly and track available deliveries
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setTab("assigned")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${
                tab === "assigned"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full inline-flex items-center justify-center ${
                  tab === "assigned"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <i className="fa-solid fa-thumbtack" />
              </span>
              Assigned
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                {totalAssignedCount}
              </span>
            </button>
            <button
              onClick={() => setTab("available")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${
                tab === "available"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full inline-flex items-center justify-center ${
                  tab === "available"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <i className="fa-solid fa-list-check" />
              </span>
              Available
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {totalAvailableCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Assigned</p>
                <p className="text-2xl font-bold text-blue-700">
                  {totalAssignedCount}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 inline-flex items-center justify-center">
                <i className="fa-solid fa-thumbtack" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Available</p>
                <p className="text-2xl font-bold text-emerald-700">
                  {totalAvailableCount}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center">
                <i className="fa-solid fa-list-check" />
              </div>
            </div>
          </div>
        </div>
        {/* ASSIGNED JOBS TAB */}
        {tab === "assigned" && (
          <div>
            {totalAssignedCount === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="text-4xl mb-4 text-gray-400">
                  <i className="fa-solid fa-thumbtack" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No assigned jobs
                </h3>
                <p className="text-gray-600">
                  When coordinator assigns you a job, it will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {assignedTasks.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4"
                  >
                    {/* Status Banner */}
                    {job.status === "assigned" && (
                      <div className="bg-yellow-50 rounded-lg p-3 mb-4 border border-yellow-200">
                        <p className="text-sm text-yellow-900 font-semibold inline-flex items-center gap-2">
                          <i className="fa-regular fa-clock" />
                          This job has been assigned to you. Accept to proceed.
                        </p>
                        {!isSharing && (
                          <p className="text-xs text-yellow-700 mt-2">
                            <i className="fa-solid fa-location-dot mr-1" />
                            <strong>Location sharing required</strong> to accept
                            this job
                          </p>
                        )}
                      </div>
                    )}

                    {/* Job Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {job.trackingCode}
                          </span>
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded ${
                              job.status === "assigned"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {job.status === "assigned"
                              ? "Awaiting Acceptance"
                              : "Accepted"}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-800">
                          {job.customerName || "Unknown Customer"}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          L{job.earnings || job.estimatedEarnings || 0}
                        </div>
                        <p className="text-xs text-gray-500">Payment</p>
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700 mb-2 inline-flex items-center gap-2">
                        <i className="fa-solid fa-box" />
                        <strong>Package:</strong> {job.packageDescription}
                      </p>
                      {job.packageWeight && (
                        <p className="text-sm text-gray-600">
                          <i className="fa-solid fa-scale-balanced mr-1" />
                          <strong>Weight:</strong> {job.packageWeight}kg
                        </p>
                      )}
                    </div>

                    {/* Locations */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1 inline-flex items-center gap-2">
                          <i className="fa-solid fa-location-dot" />
                          Pickup
                        </p>
                        <p className="text-sm font-medium text-gray-800 line-clamp-2">
                          {job.pickupAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1 inline-flex items-center gap-2">
                          <i className="fa-solid fa-flag-checkered" />
                          Delivery
                        </p>
                        <p className="text-sm font-medium text-gray-800 line-clamp-2">
                          {job.deliveryAddress}
                        </p>
                      </div>
                    </div>

                    {/* Delivery Instructions */}
                    {job.deliveryInstructions && (
                      <div className="bg-blue-50 rounded p-2 mb-4">
                        <p className="text-xs font-semibold text-blue-800 mb-1 inline-flex items-center gap-2">
                          <i className="fa-regular fa-note-sticky" />
                          Instructions:
                        </p>
                        <p className="text-sm text-blue-700">
                          {job.deliveryInstructions}
                        </p>
                      </div>
                    )}

                    {/* Recipient Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="inline-flex items-center gap-2">
                        <i className="fa-solid fa-phone" />
                        {job.recipientPhone}
                      </span>
                      {job.recipientName && (
                        <span className="inline-flex items-center gap-2">
                          <i className="fa-solid fa-user" />
                          {job.recipientName}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    {job.status === "assigned" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAcceptAssignedJob(job.id)}
                          disabled={accepting === job.id || !isSharing}
                          className="flex-1 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                        >
                          {accepting === job.id ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Accepting...
                            </>
                          ) : !isSharing ? (
                            <>Enable Location to Accept</>
                          ) : (
                            <>Accept Job</>
                          )}
                        </button>
                        <button
                          onClick={() => handleRejectAssignedJob(job.id)}
                          disabled={accepting === job.id}
                          className="flex-1 py-3 bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-red-700 font-semibold rounded-lg transition"
                        >
                          Decline
                        </button>
                      </div>
                    ) : (
                      <div className="bg-green-50 p-3 rounded border border-green-200 text-center">
                        <p className="text-sm text-green-900 font-semibold inline-flex items-center gap-2">
                          <i className="fa-solid fa-circle-check" />
                          You have accepted this job
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* AVAILABLE TASKS TAB */}
        {tab === "available" && (
          <div>
            {totalAvailableCount === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="text-4xl mb-4 text-gray-400">
                  <i className="fa-regular fa-inbox" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No available tasks
                </h3>
                <p className="text-gray-600">
                  Check back soon for new delivery opportunities!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {availableTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4"
                  >
                    {/* Task Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {task.trackingCode}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-800">
                          {task.customerName || "Unknown Customer"}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          L{task.estimatedEarnings || 0}
                        </div>
                        <p className="text-xs text-gray-500">Estimated pay</p>
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700 mb-2 inline-flex items-center gap-2">
                        <i className="fa-solid fa-box" />
                        <strong>Package:</strong> {task.packageDescription}
                      </p>
                      {task.packageWeight && (
                        <p className="text-sm text-gray-600">
                          <i className="fa-solid fa-scale-balanced mr-1" />
                          <strong>Weight:</strong> {task.packageWeight}kg
                        </p>
                      )}
                      {task.packageValue && (
                        <p className="text-sm text-gray-600">
                          <i className="fa-regular fa-gem mr-1" />
                          <strong>Value:</strong> L{task.packageValue}
                        </p>
                      )}
                    </div>

                    {/* Locations */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1 inline-flex items-center gap-2">
                          <i className="fa-solid fa-location-dot" />
                          Pickup
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {task.pickupAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1 inline-flex items-center gap-2">
                          <i className="fa-solid fa-flag-checkered" />
                          Delivery
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {task.deliveryAddress}
                        </p>
                      </div>
                    </div>

                    {/* Delivery Instructions */}
                    {task.deliveryInstructions && (
                      <div className="bg-blue-50 rounded p-2 mb-4">
                        <p className="text-xs font-semibold text-blue-800 mb-1">
                          Instructions:
                        </p>
                        <p className="text-sm text-blue-700">
                          {task.deliveryInstructions}
                        </p>
                      </div>
                    )}

                    {/* Customer Contact */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="inline-flex items-center gap-2">
                        <i className="fa-solid fa-phone" />
                        {task.customerPhone}
                      </span>
                      {task.recipientName && (
                        <span className="inline-flex items-center gap-2">
                          <i className="fa-solid fa-user" />
                          {task.recipientName}
                        </span>
                      )}
                    </div>

                    {/* Accept Button */}
                    <button
                      onClick={() => handleAcceptAvailableTask(task.id)}
                      disabled={accepting === task.id}
                      className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                    >
                      {accepting === task.id ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Accepting...
                        </>
                      ) : (
                        <>Accept Task</>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Location Sharing Modal */}
        {showLocationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 text-blue-600">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Enable Location Sharing
                </h3>
                <p className="text-gray-600 mt-2">
                  Location sharing is required to accept assigned jobs. This
                  allows the coordinator to track your delivery progress.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">What data is shared?</span>
                  <br />
                  Your real-time location while on deliveries. You can disable
                  it anytime.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition"
                >
                  Not Now
                </button>
                <button
                  onClick={() => {
                    startSharing();
                    setShowLocationModal(false);
                    toast.success(
                      "Location sharing enabled. You can now accept jobs.",
                    );
                  }}
                  className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                  Enable Location
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
