import { useEffect, useMemo, useState } from "react";
import { db, syncSystemLocationGraphStructures } from "@config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import {
  FaBoxesPacking,
  FaDiagramProject,
  FaLocationDot,
  FaMotorcycle,
  FaRoad,
  FaRoute,
  FaTriangleExclamation,
  FaTruckFast,
} from "react-icons/fa6";
import {
  getCarrierRecommendationsForDraft,
  promoteRouteReportToManagedSegment,
  subscribeManagedRouteSegments,
  subscribeRouteReports,
  type CarrierRecommendation,
  type ManagedRouteSegment,
  type RouteReportRecord,
} from "./services/routeIntelligenceService";

interface PendingDeliveryInsight {
  id: string;
  trackingCode: string;
  priority: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageWeightKg: number;
  topRecommendation: CarrierRecommendation | null;
}

export default function RouteOptimizationCenter() {
  const [segments, setSegments] = useState<ManagedRouteSegment[]>([]);
  const [reports, setReports] = useState<RouteReportRecord[]>([]);
  const [loadingInsights, setLoadingInsights] = useState(true);
  const [pendingInsights, setPendingInsights] = useState<
    PendingDeliveryInsight[]
  >([]);
  const [promotingReportId, setPromotingReportId] = useState<string | null>(
    null,
  );
  const [syncingGraph, setSyncingGraph] = useState(false);
  const [lastGraphSyncSummary, setLastGraphSyncSummary] = useState<{
    attempted: number;
    succeeded: number;
    failed: number;
    warnings: number;
    sampleFailures: string[];
  } | null>(null);

  useEffect(() => {
    const unsubSegments = subscribeManagedRouteSegments(setSegments);
    const unsubReports = subscribeRouteReports(setReports);

    return () => {
      unsubSegments();
      unsubReports();
    };
  }, []);

  useEffect(() => {
    const loadPendingInsights = async () => {
      setLoadingInsights(true);
      try {
        const pendingQuery = query(
          collection(db, "deliveries"),
          where("status", "in", ["pending", "created"]),
        );
        const snapshot = await getDocs(pendingQuery);
        const firstFive = snapshot.docs.slice(0, 5);

        const insights = await Promise.all(
          firstFive.map(async (docSnap) => {
            const data = docSnap.data() as any;
            const recommendations = await getCarrierRecommendationsForDraft({
              deliveryId: docSnap.id,
              trackingCode: data.trackingCode,
              pickupLocation: data.pickupLocation,
              deliveryLocation: data.deliveryLocation,
              pickupAddress: data.pickupAddress,
              deliveryAddress: data.deliveryAddress,
              packageWeightKg: Number(data.packageWeight || 0),
              packageValue: Number(data.packageValue || 0),
              packageDimensions: data.packageDimensions || "",
              priority: data.priority || "standard",
            });

            return {
              id: docSnap.id,
              trackingCode:
                data.trackingCode || `PTR-${docSnap.id.slice(0, 6)}`,
              priority: data.priority || "standard",
              pickupAddress: data.pickupAddress || "Unknown pickup",
              deliveryAddress: data.deliveryAddress || "Unknown delivery",
              packageWeightKg: Number(data.packageWeight || 0),
              topRecommendation: recommendations[0] || null,
            } satisfies PendingDeliveryInsight;
          }),
        );

        setPendingInsights(insights);
      } catch (error) {
        console.error("Error loading route optimization insights:", error);
        toast.error("Failed to load route optimization insights");
      } finally {
        setLoadingInsights(false);
      }
    };

    loadPendingInsights();
  }, []);

  const stats = useMemo(() => {
    const activeShortcuts = segments.filter(
      (segment) => segment.type === "shortcut" && segment.status === "active",
    ).length;
    const blockedPaths = segments.filter(
      (segment) =>
        segment.type === "blocked_path" && segment.status === "active",
    ).length;
    const openReports = reports.filter(
      (report) => report.status === "open",
    ).length;
    const bikeSpecific = segments.filter((segment) =>
      segment.allowedVehicleTypes.includes("motorcycle"),
    ).length;

    return {
      activeShortcuts,
      blockedPaths,
      openReports,
      bikeSpecific,
    };
  }, [reports, segments]);

  const openReports = reports.filter((report) => report.status === "open");
  const recentSegments = segments.slice(0, 6);

  const handlePromoteReport = async (report: RouteReportRecord) => {
    try {
      setPromotingReportId(report.id);
      await promoteRouteReportToManagedSegment(report);
      toast.success("Report promoted into managed map intelligence");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to promote report");
    } finally {
      setPromotingReportId(null);
    }
  };

  const handleSyncGraphStructure = async () => {
    try {
      setSyncingGraph(true);
      const result = await syncSystemLocationGraphStructures({
        trigger: "manual_sync",
        statuses: [
          "pending",
          "created",
          "assigned",
          "accepted",
          "waiting_for_pickup",
          "picked_up",
          "in_transit",
          "out_for_delivery",
          "delivered",
        ],
      });

      const warnings = result.results.reduce(
        (total, item) => total + item.warnings.length,
        0,
      );
      const sampleFailures = result.results
        .filter((item) => !item.success)
        .slice(0, 3)
        .map((item) => `${item.deliveryId}: ${item.message}`);

      setLastGraphSyncSummary({
        attempted: result.attempted,
        succeeded: result.succeeded,
        failed: result.failed,
        warnings,
        sampleFailures,
      });

      if (result.failed > 0) {
        toast.error(
          `Graph sync completed with failures • ${result.succeeded}/${result.attempted} succeeded • ${result.failed} failed`,
          { duration: 8000 },
        );
      } else {
        toast.success(
          `Graph sync successful • ${result.succeeded}/${result.attempted} deliveries synchronized${warnings ? ` • ${warnings} warning(s)` : ""}`,
          { duration: 7000 },
        );
      }
    } catch (error: any) {
      console.error("Error syncing graph structures:", error);
      toast.error(
        `Graph sync failed to run: ${error?.message || "Unknown error"}`,
        { duration: 8000 },
      );
    } finally {
      setSyncingGraph(false);
    }
  };

  return (
    <div className="space-y-5">
      <Toaster position="top-right" />

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Route Optimization Center
          </h1>
          <p className="mt-1 text-sm text-blue-700">
            Manage route rules, assignment quality, and route reports from one
            consistent workspace.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleSyncGraphStructure}
            disabled={syncingGraph}
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {syncingGraph
              ? "Syncing graph structure..."
              : "Sync Graph Structure"}
          </button>
          <Link
            to="/routes/management"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            Open Map Management
          </Link>
        </div>
      </div>

      {lastGraphSyncSummary && (
        <div
          className={`rounded-lg border p-3 text-xs ${
            lastGraphSyncSummary.failed > 0
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
        >
          <p className="font-medium">
            Graph sync summary: {lastGraphSyncSummary.succeeded}/
            {lastGraphSyncSummary.attempted} succeeded
            {lastGraphSyncSummary.failed > 0 &&
              ` • ${lastGraphSyncSummary.failed} failed`}
            {lastGraphSyncSummary.warnings > 0 &&
              ` • ${lastGraphSyncSummary.warnings} warning(s)`}
          </p>
          {lastGraphSyncSummary.sampleFailures.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs">
              {lastGraphSyncSummary.sampleFailures.map((failure) => (
                <li key={failure}>{failure}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
                Active shortcuts
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-900">
                {stats.activeShortcuts}
              </p>
            </div>
            <FaRoute className="text-xl text-emerald-600" />
          </div>
        </div>
        <div className="rounded-lg border border-red-100 bg-red-50 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-red-700">
                Blocked paths
              </p>
              <p className="mt-1 text-2xl font-semibold text-red-900">
                {stats.blockedPaths}
              </p>
            </div>
            <FaTriangleExclamation className="text-xl text-red-600" />
          </div>
        </div>
        <div className="rounded-lg border border-amber-100 bg-amber-50 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
                Open route reports
              </p>
              <p className="mt-1 text-2xl font-semibold text-amber-900">
                {stats.openReports}
              </p>
            </div>
            <FaRoad className="text-xl text-amber-600" />
          </div>
        </div>
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-blue-700">
                Motorcycle routes
              </p>
              <p className="mt-1 text-2xl font-semibold text-blue-900">
                {stats.bikeSpecific}
              </p>
            </div>
            <FaMotorcycle className="text-xl text-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Pending delivery bundling insights
              </h2>
              <p className="text-sm text-gray-500">
                Top smart-assignment suggestion for the next deliveries waiting
                in the queue.
              </p>
            </div>
            <FaBoxesPacking className="text-xl text-blue-500" />
          </div>

          {loadingInsights ? (
            <div className="flex h-40 items-center justify-center text-gray-500">
              Loading optimization insights…
            </div>
          ) : pendingInsights.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-sm text-gray-500">
              No pending deliveries waiting for assignment right now.
            </div>
          ) : (
            <div className="space-y-4">
              {pendingInsights.map((delivery) => (
                <div
                  key={delivery.id}
                  className="rounded-lg border border-gray-200 bg-white p-4"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">
                        <FaTruckFast /> {delivery.trackingCode}
                      </div>
                      <p className="mt-3 text-sm font-semibold text-gray-700">
                        {delivery.pickupAddress}
                      </p>
                      <p className="text-sm text-gray-500">
                        → {delivery.deliveryAddress}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        Priority:{" "}
                        <span className="font-semibold capitalize">
                          {delivery.priority}
                        </span>
                      </p>
                      <p>
                        Weight:{" "}
                        <span className="font-semibold">
                          {parseFloat(
                            Number(delivery.packageWeightKg || 0).toFixed(2),
                          )}
                          kg
                        </span>
                      </p>
                    </div>
                  </div>

                  {delivery.topRecommendation ? (
                    <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-blue-900">
                            Recommended carrier:{" "}
                            {delivery.topRecommendation.fullName}
                          </p>
                          <p className="text-xs text-blue-700">
                            {delivery.topRecommendation.recommendationReason}
                          </p>
                        </div>
                        <div className="text-xs text-blue-800">
                          <p>
                            Score:{" "}
                            {parseFloat(
                              Number(
                                delivery.topRecommendation.recommendationScore,
                              ).toFixed(2),
                            )}
                          </p>
                          <p>
                            Bundle fit:{" "}
                            {parseFloat(
                              Number(
                                delivery.topRecommendation
                                  .bundleSuitabilityScore,
                              ).toFixed(2),
                            )}
                            /100
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">
                      No eligible carrier recommendation yet — likely due to
                      stale locations, blocked segments, or load limits.
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Open route reports
              </h2>
              <p className="text-sm text-gray-500">
                Promote trusted reports into managed route intelligence.
              </p>
            </div>
            <FaDiagramProject className="text-xl text-amber-500" />
          </div>

          <div className="space-y-3">
            {openReports.length === 0 ? (
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-5 text-sm text-gray-500">
                No pending reports. Field team is behaving suspiciously well
                today.
              </div>
            ) : (
              openReports.slice(0, 6).map((report) => (
                <div
                  key={report.id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {report.type.replace(/_/g, " ")}
                      </p>
                      <p className="text-xs text-gray-500">
                        {report.source} •{" "}
                        {report.trackingCode || report.deliveryId || "general"}
                      </p>
                    </div>
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-medium text-amber-700">
                      Open
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {report.reason ||
                      report.note ||
                      "No extra details provided."}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {report.start && report.end && (
                      <button
                        type="button"
                        onClick={() => handlePromoteReport(report)}
                        disabled={promotingReportId === report.id}
                        className="rounded-md bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                      >
                        {promotingReportId === report.id
                          ? "Promoting…"
                          : "Promote to map rule"}
                      </button>
                    )}
                    <Link
                      to={`/deliveries/${report.deliveryId}/track`}
                      className="rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Open delivery
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Managed route segments
            </h2>
            <p className="text-sm text-gray-500">
              Your active local network intelligence for vehicle-aware routing.
            </p>
          </div>
          <FaLocationDot className="text-xl text-blue-500" />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {recentSegments.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-5 text-sm text-gray-500 xl:col-span-3">
              No managed segments yet. Add your first shortcut or blocked route
              from Map Management.
            </div>
          ) : (
            recentSegments.map((segment) => (
              <div
                key={segment.id}
                className="rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {segment.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {segment.type.replace(/_/g, " ")} • {segment.status}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${segment.blocked ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}
                  >
                    {segment.blocked ? "Blocked" : "Usable"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {segment.note || "No note added."}
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  Vehicles:{" "}
                  {segment.allowedVehicleTypes.length
                    ? segment.allowedVehicleTypes.join(", ")
                    : "all"}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
