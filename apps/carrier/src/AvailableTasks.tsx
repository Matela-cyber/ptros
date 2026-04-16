import { useState, useEffect } from "react";
import { CarrierService } from "./carrierService";
import { Delivery } from "./types";
import { toast, Toaster } from "react-hot-toast";
import { useGPSLocation } from "./hooks";
import { getCarrierLiveTrackUrl } from "./liveTrackUrl";
import { formatNumber, formatCurrency } from "./format";

export default function AvailableTasks() {
  const [tab, setTab] = useState<"assigned" | "available">("assigned");
  const [assignedTasks, setAssignedTasks] = useState<Delivery[]>([]);
  const [availableTasks, setAvailableTasks] = useState<Delivery[]>([]);
  const [selectedTask, setSelectedTask] = useState<Delivery | null>(null);
  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState<string | null>(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const { isSharing, startSharing } = useGPSLocation();

  const openTaskDetails = (task: Delivery) => {
    setSelectedTask(task);
  };

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    task: Delivery,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTaskDetails(task);
    }
  };

  const withStop = (event: React.MouseEvent, action: () => void) => {
    event.stopPropagation();
    action();
  };

  const openLiveTrack = (deliveryId: string) => {
    window.open(
      getCarrierLiveTrackUrl(deliveryId),
      "_blank",
      "noopener,noreferrer",
    );
  };

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
        if (selectedTask?.id === jobId) {
          setSelectedTask(null);
        }
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
        if (selectedTask?.id === jobId) {
          setSelectedTask(null);
        }
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
        if (selectedTask?.id === taskId) {
          setSelectedTask(null);
        }
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
  const isSelectedFromAvailable =
    !!selectedTask &&
    availableTasks.some((task) => task.id === selectedTask.id);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Toaster position="top-center" />

      {/* Header - Matches MyDeliveries style */}
      <div className="mb-8">
        <div className="px-4 md:px-6 pt-6">
          <h1 className="text-3xl font-bold text-gray-800">Jobs & Tasks</h1>
          <p className="text-gray-600 mt-2">
            Accept assignments quickly and track available deliveries
          </p>
        </div>

        {/* Tab Navigation - Cleaner style */}
        <div className="px-4 md:px-6 mt-6">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setTab("assigned")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${
                tab === "assigned"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <i className="fa-solid fa-thumbtack text-sm" />
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
              <i className="fa-solid fa-list-check text-sm" />
              Available
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {totalAvailableCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6">
        {/* ASSIGNED JOBS TAB */}
        {tab === "assigned" && (
          <div>
            {totalAssignedCount === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="text-5xl mb-4 text-gray-400">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignedTasks.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    role="button"
                    tabIndex={0}
                    onClick={() => openTaskDetails(job)}
                    onKeyDown={(event) => handleCardKeyDown(event, job)}
                  >
                    {/* Card Header - Matches MyDeliveries */}
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded border">
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
                          <h3 className="font-bold text-gray-800">
                            {job.customerName || "Unknown Customer"}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600">
                            L{job.earnings || job.estimatedEarnings || 0}
                          </div>
                          <p className="text-xs text-gray-500">Payment</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body - Refined spacing and colors */}
                    <div className="p-4">
                      <div className="space-y-3">
                        {/* Location Status Banner - Softer color */}
                        {job.status === "assigned" && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-sm text-yellow-800 font-medium inline-flex items-center gap-2">
                              <i className="fa-regular fa-clock" />
                              This job has been assigned to you. Accept to
                              proceed.
                            </p>
                            {!isSharing && (
                              <p className="text-xs text-yellow-700 mt-2">
                                <i className="fa-solid fa-location-dot mr-1" />
                                <strong>Location sharing required</strong> to
                                accept this job
                              </p>
                            )}
                          </div>
                        )}

                        {/* Pickup & Delivery - Cleaner layout */}
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-0.5">
                              <i className="fa-solid fa-location-dot text-sm" />
                            </span>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500">Pickup</p>
                              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {job.pickupAddress}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-600 mr-2 mt-0.5">
                              <i className="fa-solid fa-flag-checkered text-sm" />
                            </span>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500">Delivery</p>
                              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {job.deliveryAddress}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Package Info - Refined background */}
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-700 mb-1">
                            Package
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 truncate mr-2">
                              {job.packageDescription}
                            </span>
                            {job.packageWeight && (
                              <span className="font-medium whitespace-nowrap">
                                {formatNumber(job.packageWeight)} kg
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Delivery Instructions - Softer blue */}
                        {job.deliveryInstructions && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-xs font-semibold text-blue-800 mb-1 inline-flex items-center gap-2">
                              <i className="fa-regular fa-note-sticky" />
                              Instructions
                            </p>
                            <p className="text-sm text-blue-900">
                              {job.deliveryInstructions}
                            </p>
                          </div>
                        )}

                        {/* Recipient Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-1">
                            <i className="fa-solid fa-phone text-xs" />
                            {job.recipientPhone}
                          </span>
                          {job.recipientName && (
                            <span className="inline-flex items-center gap-1">
                              <i className="fa-solid fa-user text-xs" />
                              {job.recipientName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer - Matches MyDeliveries */}
                    <div className="px-4 py-3 bg-gray-50 border-t">
                      {job.status === "assigned" ? (
                        <div className="flex gap-2">
                          <button
                            onClick={(event) =>
                              withStop(event, () => openLiveTrack(job.id))
                            }
                            className="text-sm px-3 py-2 rounded-md bg-cyan-100 text-cyan-700 hover:bg-cyan-200 font-semibold"
                          >
                            Live Track
                          </button>
                          <button
                            onClick={(event) =>
                              withStop(event, () =>
                                handleRejectAssignedJob(job.id),
                              )
                            }
                            disabled={accepting === job.id}
                            className="text-sm px-3 py-2 rounded-md bg-red-100 text-red-700 hover:bg-red-200 font-semibold disabled:opacity-50"
                          >
                            Decline
                          </button>
                          <button
                            onClick={(event) =>
                              withStop(event, () =>
                                handleAcceptAssignedJob(job.id),
                              )
                            }
                            disabled={accepting === job.id || !isSharing}
                            className="flex-1 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2 text-sm"
                          >
                            {accepting === job.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Accepting...
                              </>
                            ) : !isSharing ? (
                              <>Enable Location</>
                            ) : (
                              <>Accept Job</>
                            )}
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-green-700">
                            <i className="fa-solid fa-circle-check text-sm" />
                            <span className="text-sm font-medium">
                              You have accepted this job
                            </span>
                          </div>
                          <button
                            onClick={(event) =>
                              withStop(event, () => openLiveTrack(job.id))
                            }
                            className="text-sm px-3 py-1.5 rounded-md bg-cyan-100 text-cyan-700 hover:bg-cyan-200 font-semibold"
                          >
                            Live Track
                          </button>
                        </div>
                      )}
                    </div>
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
                <div className="text-5xl mb-4 text-gray-400">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    role="button"
                    tabIndex={0}
                    onClick={() => openTaskDetails(task)}
                    onKeyDown={(event) => handleCardKeyDown(event, task)}
                  >
                    {/* Card Header */}
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded border">
                              {task.trackingCode}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-800">
                            {task.customerName || "Unknown Customer"}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600">
                            L{task.estimatedEarnings || 0}
                          </div>
                          <p className="text-xs text-gray-500">Estimated pay</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      <div className="space-y-3">
                        {/* Pickup & Delivery */}
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-0.5">
                              <i className="fa-solid fa-location-dot text-sm" />
                            </span>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500">Pickup</p>
                              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {task.pickupAddress}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-600 mr-2 mt-0.5">
                              <i className="fa-solid fa-flag-checkered text-sm" />
                            </span>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500">Delivery</p>
                              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {task.deliveryAddress}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Package Info */}
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-700 mb-1">
                            Package
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 truncate mr-2">
                              {task.packageDescription}
                            </span>
                            {task.packageWeight && (
                              <span className="font-medium whitespace-nowrap">
                                {formatNumber(task.packageWeight)} kg
                              </span>
                            )}
                          </div>
                          {task.packageValue && (
                            <p className="text-sm text-gray-600 mt-1">
                              Value: {formatCurrency(task.packageValue)}
                            </p>
                          )}
                        </div>

                        {/* Delivery Instructions */}
                        {task.deliveryInstructions && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-xs font-semibold text-blue-800 mb-1">
                              Instructions
                            </p>
                            <p className="text-sm text-blue-900">
                              {task.deliveryInstructions}
                            </p>
                          </div>
                        )}

                        {/* Customer Contact */}
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-1">
                            <i className="fa-solid fa-phone text-xs" />
                            {task.customerPhone}
                          </span>
                          {task.recipientName && (
                            <span className="inline-flex items-center gap-1">
                              <i className="fa-solid fa-user text-xs" />
                              {task.recipientName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-4 py-3 bg-gray-50 border-t">
                      <div className="flex gap-2">
                        <button
                          onClick={(event) =>
                            withStop(event, () => openLiveTrack(task.id))
                          }
                          className="text-sm px-3 py-2 rounded-md bg-cyan-100 text-cyan-700 hover:bg-cyan-200 font-semibold"
                        >
                          Live Track
                        </button>
                        <button
                          onClick={(event) =>
                            withStop(event, () =>
                              handleAcceptAvailableTask(task.id),
                            )
                          }
                          disabled={accepting === task.id}
                          className="flex-1 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2 text-sm"
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Location Sharing Modal - Keep as is, it's fine */}
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

        {/* Task Details Modal - Refined colors */}
        {selectedTask && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
              <div className="px-6 py-4 border-b bg-gray-50 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Task Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedTask.trackingCode || selectedTask.id}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[65vh] space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Customer</p>
                    <p className="font-semibold text-gray-800">
                      {selectedTask.customerName || "Unknown Customer"}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 inline-flex items-center gap-2">
                      <i className="fa-solid fa-phone" />
                      {selectedTask.customerPhone || "N/A"}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Recipient</p>
                    <p className="font-semibold text-gray-800">
                      {selectedTask.recipientName || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 inline-flex items-center gap-2">
                      <i className="fa-solid fa-phone" />
                      {selectedTask.recipientPhone || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-xs text-emerald-700 font-semibold mb-1">
                    Earnings
                  </p>
                  <p className="text-2xl font-bold text-emerald-700">
                    L
                    {selectedTask.earnings ||
                      selectedTask.estimatedEarnings ||
                      0}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <p className="text-xs text-blue-700 font-semibold mb-1 inline-flex items-center gap-2">
                      <i className="fa-solid fa-location-dot" />
                      Pickup
                    </p>
                    <p className="text-sm text-blue-900">
                      {selectedTask.pickupAddress}
                    </p>
                  </div>

                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-xs text-green-700 font-semibold mb-1 inline-flex items-center gap-2">
                      <i className="fa-solid fa-flag-checkered" />
                      Delivery
                    </p>
                    <p className="text-sm text-green-900">
                      {selectedTask.deliveryAddress}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">Package</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedTask.packageDescription || "No description"}
                  </p>
                  <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
                    <span>
                      Weight: {formatNumber(selectedTask.packageWeight)}kg
                    </span>
                    {selectedTask.packageValue ? (
                      <span>
                        Value: {formatCurrency(selectedTask.packageValue)}
                      </span>
                    ) : null}
                  </div>
                </div>

                {selectedTask.deliveryInstructions && (
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="text-xs font-semibold text-amber-800 mb-1 inline-flex items-center gap-2">
                      <i className="fa-regular fa-note-sticky" />
                      Delivery instructions
                    </p>
                    <p className="text-sm text-amber-900">
                      {selectedTask.deliveryInstructions}
                    </p>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-t bg-white flex flex-wrap gap-2 justify-end">
                <button
                  onClick={() => openLiveTrack(selectedTask.id)}
                  className="px-4 py-2 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 font-semibold rounded-lg transition"
                >
                  Live Track
                </button>

                {selectedTask.status === "assigned" && (
                  <>
                    <button
                      onClick={() => handleRejectAssignedJob(selectedTask.id)}
                      disabled={accepting === selectedTask.id}
                      className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-lg transition disabled:bg-gray-200"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleAcceptAssignedJob(selectedTask.id)}
                      disabled={accepting === selectedTask.id || !isSharing}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition disabled:bg-gray-400"
                    >
                      {accepting === selectedTask.id
                        ? "Accepting..."
                        : !isSharing
                          ? "Enable Location to Accept"
                          : "Accept Job"}
                    </button>
                  </>
                )}

                {isSelectedFromAvailable && (
                  <button
                    onClick={() => handleAcceptAvailableTask(selectedTask.id)}
                    disabled={accepting === selectedTask.id}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition disabled:bg-gray-400"
                  >
                    {accepting === selectedTask.id
                      ? "Accepting..."
                      : "Accept Task"}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
