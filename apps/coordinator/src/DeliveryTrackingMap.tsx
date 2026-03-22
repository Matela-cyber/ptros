import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import {
  db,
  realtimeDb,
  formatRouteNetworkSegmentType,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  subscribeRouteNetworkSegments,
  type RouteNetworkSegment,
} from "@config";
import {
  arrayUnion,
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { toast, Toaster } from "react-hot-toast";
import { decodePolyline } from "./routeHistory";
import MapLegend from "./components/MapLegend";
import OptimizationReasonDisplay, {
  OptimizationReason,
} from "./components/OptimizationReasonDisplay";
import {
  recommendReassignmentCandidates,
  submitRouteReport,
} from "./services/routeIntelligenceService";

interface DeliveryData {
  id: string;
  trackingCode: string;
  status: string;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDescription: string;
  carrierName?: string;
  carrierPhone?: string;
  carrierId?: string;
  estimatedDelivery?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  createdAt: Date;
  acceptedAt?: Date;
  assignedAt?: Date;
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp?: any;
  };
  pickupLocation?: {
    lat: number;
    lng: number;
    address?: string;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
    address?: string;
  };
  packageValue?: number;
  packageWeight?: number;
  paymentMethod?: string;
  route?: {
    polyline?: string;
  };
  routeHistory?: {
    activePolyline?: string;
  };
  optimizationReasons?: OptimizationReason[];
  priority?: string;
  routeReviews?: Array<{
    type: string;
    temporary?: boolean;
    reason?: string;
    start?: { lat: number; lng: number };
    end?: { lat: number; lng: number };
    status?: string;
    createdAt?: any;
    expiresAt?: any;
  }>;
  routeFeedback?: Array<{
    type: string;
    reason?: string;
    note?: string;
    source?: string;
    reportedAt?: string;
    shortcut?: {
      start: { lat: number; lng: number };
      end: { lat: number; lng: number };
      vehicleTypeSpecific?: boolean;
      note?: string;
    };
  }>;
}

interface CarrierLocation {
  lat: number;
  lng: number;
  timestamp?: number;
  accuracy?: number;
}

interface RouteSnapshot {
  id: string;
  encodedPolyline: string;
  startedAt?: number;
  endedAt?: number;
}

interface CarrierCandidate {
  id: string;
  fullName: string;
  distanceKm: number;
  shortcutContributionScore: number;
}

interface LearnedSegment {
  id: string;
  encodedPolyline?: string;
  reason?: string;
  note?: string;
  vehicleTypeSpecific?: boolean;
}

const ROUTE_COLORS = [
  "#a855f7",
  "#16a34a",
  "#e11d48",
  "#ca8a04",
  "#ea580c",
  "#84cc16",
];

const toLatLngLiteral = (
  point: google.maps.LatLng | { lat: number; lng: number },
) => {
  const anyPoint: any = point;
  if (typeof anyPoint.lat === "function") {
    return { lat: anyPoint.lat(), lng: anyPoint.lng() };
  }
  return { lat: anyPoint.lat, lng: anyPoint.lng };
};

const offsetPathMeters = (
  path: Array<google.maps.LatLng | { lat: number; lng: number }> | null,
  offsetMeters: number,
): Array<{ lat: number; lng: number }> | null => {
  if (!path || path.length < 2 || offsetMeters === 0) return path as any;

  const source = path.map(toLatLngLiteral);
  const shifted: Array<{ lat: number; lng: number }> = [];

  for (let i = 0; i < source.length; i += 1) {
    const prev = source[Math.max(0, i - 1)];
    const next = source[Math.min(source.length - 1, i + 1)];
    const dx = next.lng - prev.lng;
    const dy = next.lat - prev.lat;
    const length = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = -dy / length;
    const ny = dx / length;

    const latScale = 111320;
    const lngScale = Math.max(
      1,
      111320 * Math.cos((source[i].lat * Math.PI) / 180),
    );

    shifted.push({
      lat: source[i].lat + (ny * offsetMeters) / latScale,
      lng: source[i].lng + (nx * offsetMeters) / lngScale,
    });
  }

  return shifted;
};

export default function DeliveryTrackingMap() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [delivery, setDelivery] = useState<DeliveryData | null>(null);
  const [managedSegments, setManagedSegments] = useState<RouteNetworkSegment[]>(
    [],
  );
  const [carrierLocation, setCarrierLocation] =
    useState<CarrierLocation | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [snapshots, setSnapshots] = useState<RouteSnapshot[]>([]);
  const [replayProgress, setReplayProgress] = useState(100);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewPoints, setReviewPoints] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [routeIssueReason, setRouteIssueReason] = useState("");
  const [routeIssueTemporary, setRouteIssueTemporary] = useState(true);
  const [routeIssueCategory, setRouteIssueCategory] =
    useState("blocked_segment");
  const [routeIssueExpiresHours, setRouteIssueExpiresHours] = useState(6);
  const [recommending, setRecommending] = useState(false);
  const [recommendedCarrier, setRecommendedCarrier] =
    useState<CarrierCandidate | null>(null);
  const [learnedSegments, setLearnedSegments] = useState<LearnedSegment[]>([]);
  const [carrierToPickupPath, setCarrierToPickupPath] = useState<Array<{
    lat: number;
    lng: number;
  }> | null>(null);
  const [pickupToDeliveryPath, setPickupToDeliveryPath] = useState<Array<{
    lat: number;
    lng: number;
  }> | null>(null);
  const [selectedMapInfo, setSelectedMapInfo] = useState<{
    position: { lat: number; lng: number };
    title: string;
    details: string[];
  } | null>(null);

  useEffect(() => {
    if (!id) {
      toast.error("No delivery ID provided");
      navigate("/deliveries/active");
      return;
    }

    const docRef = doc(db, "deliveries", id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (!docSnap.exists()) {
        toast.error("Delivery not found");
        navigate("/deliveries/active");
        return;
      }

      const data = docSnap.data();
      setDelivery({
        id: docSnap.id,
        trackingCode: data.trackingCode,
        status: data.status,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        pickupAddress: data.pickupAddress,
        deliveryAddress: data.deliveryAddress,
        packageDescription: data.packageDescription,
        carrierName: data.carrierName,
        carrierPhone: data.carrierPhone,
        carrierId: data.carrierId,
        estimatedDelivery: data.estimatedDelivery?.toDate(),
        pickupTime: data.pickupTime?.toDate(),
        deliveryTime: data.deliveryTime?.toDate(),
        createdAt: data.createdAt?.toDate() || new Date(),
        acceptedAt: data.acceptedAt?.toDate(),
        assignedAt: data.assignedAt?.toDate(),
        currentLocation: data.currentLocation,
        pickupLocation: data.pickupLocation,
        deliveryLocation: data.deliveryLocation,
        packageValue: data.packageValue,
        packageWeight: data.packageWeight,
        paymentMethod: data.paymentMethod,
        route: data.route,
        routeHistory: data.routeHistory,
        optimizationReasons: data.optimizationReasons || [],
        priority: data.priority,
        routeReviews: data.routeReviews || [],
        routeFeedback: data.routeFeedback || [],
      });
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id, navigate]);

  useEffect(() => {
    return subscribeRouteNetworkSegments(setManagedSegments);
  }, []);

  useEffect(() => {
    if (!id) return;

    const q = query(
      collection(db, "deliveries", id, "routeSnapshots"),
      orderBy("endedAt", "asc"),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data: RouteSnapshot[] = snapshot.docs.map((d) => {
        const row = d.data() as any;
        return {
          id: d.id,
          encodedPolyline: row.encodedPolyline,
          startedAt: row.startedAt,
          endedAt: row.endedAt,
        };
      });
      setSnapshots(data);
    });

    return () => unsub();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const q = query(
      collection(db, "deliveries", id, "routeLearnedSegments"),
      orderBy("createdAt", "desc"),
      limit(20),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data: LearnedSegment[] = snapshot.docs.map((d) => {
        const row = d.data() as any;
        return {
          id: d.id,
          encodedPolyline: row.encodedPolyline,
          reason: row.reason,
          note: row.note,
          vehicleTypeSpecific: row.vehicleTypeSpecific,
        };
      });
      setLearnedSegments(data);
    });

    return () => unsub();
  }, [id]);

  useEffect(() => {
    if (!delivery?.carrierId && delivery?.status === "pending") {
      return;
    }

    if (delivery?.currentLocation?.lat) {
      setCarrierLocation({
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      });
    }

    if (delivery?.carrierId) {
      const trackRef = rtdbRef(realtimeDb, `tracks/${delivery.carrierId}`);
      const unsubscribe = onValue(trackRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setCarrierLocation({
            lat: data.lat,
            lng: data.lng,
            timestamp: data.timestamp || data.timestampMs,
            accuracy: data.accuracy,
          });
        }
      });

      return () => unsubscribe();
    }
  }, [delivery?.carrierId, delivery?.currentLocation, delivery?.status]);

  // Calculate carrier-to-pickup and pickup-to-delivery paths for visualization
  useEffect(() => {
    if (
      !delivery ||
      !carrierLocation ||
      !delivery.pickupLocation ||
      !delivery.deliveryLocation
    ) {
      return;
    }

    // Only show expected paths for active deliveries (not yet picked up)
    if (
      delivery.status !== "assigned" &&
      delivery.status !== "accepted" &&
      delivery.status !== "picked_up"
    ) {
      setCarrierToPickupPath(null);
      setPickupToDeliveryPath(null);
      return;
    }

    // Carrier to Pickup path (Yellow) - only if not picked up
    // Lightweight segment path avoids legacy DirectionsService dependency.
    if (delivery.status === "assigned" || delivery.status === "accepted") {
      setCarrierToPickupPath([
        { lat: carrierLocation.lat, lng: carrierLocation.lng },
        {
          lat: delivery.pickupLocation.lat,
          lng: delivery.pickupLocation.lng,
        },
      ]);
    } else {
      setCarrierToPickupPath(null);
    }

    // Pickup to Delivery path (Orange) - always show for active deliveries
    setPickupToDeliveryPath([
      { lat: delivery.pickupLocation.lat, lng: delivery.pickupLocation.lng },
      {
        lat: delivery.deliveryLocation.lat,
        lng: delivery.deliveryLocation.lng,
      },
    ]);
  }, [
    delivery?.id,
    delivery?.status,
    delivery?.pickupLocation,
    delivery?.deliveryLocation,
    carrierLocation,
  ]);

  const mapCenter = carrierLocation || {
    lat: parseFloat(delivery?.currentLocation?.lat?.toString() || "-29.6100"),
    lng: parseFloat(delivery?.currentLocation?.lng?.toString() || "28.2336"),
  };

  const routeSegments = useMemo(() => {
    const planned = delivery?.route?.polyline
      ? decodePolyline(delivery.route.polyline)
      : [];

    const snapshotSegments = snapshots
      .filter((s) => s.encodedPolyline)
      .map((s, idx) => ({
        id: s.id,
        points: decodePolyline(s.encodedPolyline),
        color: ROUTE_COLORS[idx % ROUTE_COLORS.length],
      }))
      .filter((s) => s.points.length > 1);

    const active = delivery?.routeHistory?.activePolyline
      ? decodePolyline(delivery.routeHistory.activePolyline)
      : [];

    const blockedSegments = (delivery?.routeReviews || [])
      .filter(
        (review) =>
          review?.start && review?.end && review?.status !== "resolved",
      )
      .map((review, idx) => ({
        id: `review-${idx}`,
        points: [review.start!, review.end!],
        temporary: !!review.temporary,
        reason: review.reason,
      }));

    const learnedShortcutSegments = learnedSegments
      .filter((seg) => seg.encodedPolyline)
      .map((seg) => ({
        id: seg.id,
        points: decodePolyline(seg.encodedPolyline || ""),
        reason: seg.reason,
        note: seg.note,
        vehicleTypeSpecific: seg.vehicleTypeSpecific,
      }))
      .filter((seg) => seg.points.length > 1);

    return {
      planned,
      snapshotSegments,
      active,
      blockedSegments,
      learnedShortcutSegments,
    };
  }, [
    delivery?.route?.polyline,
    delivery?.routeHistory?.activePolyline,
    delivery?.routeReviews,
    snapshots,
    learnedSegments,
  ]);

  const visibleSegmentCount = Math.max(
    1,
    Math.ceil(
      routeSegments.snapshotSegments.length *
        Math.max(0.01, replayProgress / 100),
    ),
  );

  const visibleSnapshotSegments = routeSegments.snapshotSegments.slice(
    0,
    visibleSegmentCount,
  );

  const carrierToPickupDisplayPath = useMemo(
    () => offsetPathMeters(carrierToPickupPath, -7),
    [carrierToPickupPath],
  );

  const pickupToDeliveryDisplayPath = useMemo(
    () => offsetPathMeters(pickupToDeliveryPath, 7),
    [pickupToDeliveryPath],
  );

  const visibleManagedSegments = useMemo(
    () =>
      getDisplayRouteNetworkSegments(
        managedSegments,
        [
          delivery?.pickupLocation,
          delivery?.deliveryLocation,
          carrierLocation,
          delivery?.currentLocation,
        ],
        { thresholdKm: 10, fallbackLimit: 120 },
      ),
    [
      carrierLocation,
      delivery?.currentLocation,
      delivery?.deliveryLocation,
      delivery?.pickupLocation,
      managedSegments,
    ],
  );

  const focusPoint = (point?: { lat: number; lng: number } | null) => {
    if (!mapInstance || !point) return;
    mapInstance.panTo(point);
    mapInstance.setZoom(16);
  };

  const focusSegment = (segment: RouteNetworkSegment) => {
    if (!mapInstance || !window.google?.maps) return;
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(segment.start);
    bounds.extend(segment.end);
    mapInstance.fitBounds(bounds, 80);
  };

  const getStatusLabel = (status: string) => {
    const labels: { [key: string]: string } = {
      pending: "Pending",
      assigned: "Driver Assigned",
      accepted: "Accepted",
      picked_up: "Picked Up",
      in_transit: "In Transit",
      out_for_delivery: "Out for Delivery",
      delivered: "Delivered",
      cancelled: "Cancelled",
    };
    return labels[status] || status;
  };

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!reviewMode || !event.latLng) return;
    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setReviewPoints((prev) => (prev.length >= 2 ? [point] : [...prev, point]));
  };

  const submitRouteReview = async () => {
    if (
      !delivery ||
      !id ||
      reviewPoints.length !== 2 ||
      !routeIssueReason.trim()
    ) {
      toast.error("Choose two map points and provide a reason.");
      return;
    }

    try {
      await submitRouteReport({
        deliveryId: id,
        trackingCode: delivery.trackingCode,
        type: routeIssueCategory as
          | "blocked_path"
          | "bad_road"
          | "unsafe_segment"
          | "wrong_map_road",
        source: "coordinator",
        note: routeIssueReason.trim(),
        reason: routeIssueReason.trim(),
        temporary: routeIssueTemporary,
        start: reviewPoints[0],
        end: reviewPoints[1],
        createdByName: "Coordinator",
      });

      await updateDoc(doc(db, "deliveries", id), {
        routeControl: {
          hasBlockedSegments: true,
          lastReviewAt: Timestamp.now(),
          expiresInHours: routeIssueTemporary ? routeIssueExpiresHours : null,
        },
        updatedAt: Timestamp.now(),
      });

      toast.success("Route segment marked for rejection/review.");
      setReviewMode(false);
      setReviewPoints([]);
      setRouteIssueReason("");
      setRouteIssueTemporary(true);
      setRouteIssueCategory("blocked_segment");
      setRouteIssueExpiresHours(6);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save route review.");
    }
  };

  const activeRouteColor = useMemo(() => {
    switch (delivery?.status) {
      case "assigned":
      case "accepted":
        return "#7c3aed";
      case "picked_up":
      case "in_transit":
      case "out_for_delivery":
        return "#14b8a6";
      case "delivered":
        return "#64748b";
      default:
        return "#0ea5e9";
    }
  }, [delivery?.status]);

  const recommendNextCarrier = async () => {
    if (!delivery || !carrierLocation) return;
    setRecommending(true);

    try {
      const ranked = await recommendReassignmentCandidates({
        deliveryId: delivery.id,
        trackingCode: delivery.trackingCode,
        carrierId: delivery.carrierId,
        pickupLocation: delivery.pickupLocation,
        deliveryLocation: delivery.deliveryLocation,
        currentLocation: carrierLocation,
        packageWeightKg: delivery.packageWeight,
        packageValue: delivery.packageValue,
        priority: delivery.priority,
      });

      const candidates: CarrierCandidate[] = ranked.map((candidate) => ({
        id: candidate.id,
        fullName: candidate.fullName,
        distanceKm: candidate.distanceToPickupKm,
        shortcutContributionScore: candidate.shortcutContributionScore,
      }));

      if (!candidates.length) {
        toast.error("No alternative carriers with valid location found.");
        setRecommendedCarrier(null);
        return;
      }

      setRecommendedCarrier(candidates[0]);
      toast.success(
        `Suggested ${candidates[0].fullName} as next best carrier.`,
      );
    } catch (error) {
      console.error(error);
      toast.error("Unable to recommend next carrier.");
    } finally {
      setRecommending(false);
    }
  };

  const reassignToRecommendedCarrier = async () => {
    if (!id || !recommendedCarrier) return;

    try {
      await updateDoc(doc(db, "deliveries", id), {
        carrierId: recommendedCarrier.id,
        carrierName: recommendedCarrier.fullName,
        status: "assigned",
        optimizationReasons: arrayUnion({
          type: "reassignment",
          reason: `Reassigned to ${recommendedCarrier.fullName} after in-transit optimization`,
          timestamp: Timestamp.now(),
          carrierId: recommendedCarrier.id,
          carrierName: recommendedCarrier.fullName,
          details: {
            distanceKm: recommendedCarrier.distanceKm,
            factors: [
              "In-transit reroute requested by coordinator",
              `${recommendedCarrier.distanceKm.toFixed(2)} km from active route`,
              `${recommendedCarrier.shortcutContributionScore} learned shortcut contribution score`,
            ],
          },
        }),
        reassignment: {
          reason: "coordinator_reroute",
          previousCarrierId: delivery?.carrierId || null,
          previousCarrierName: delivery?.carrierName || null,
          recommendedCarrierId: recommendedCarrier.id,
          recommendedCarrierName: recommendedCarrier.fullName,
          reassignedAt: Timestamp.now(),
        },
        updatedAt: Timestamp.now(),
      });
      toast.success("Delivery reassigned to recommended carrier.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to reassign carrier.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading tracking map...</p>
        </div>
      </div>
    );
  }

  if (!delivery) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-8.5rem)] flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Toaster position="top-right" />

      <div className="bg-white shadow-sm p-4 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {delivery.trackingCode}
            </h1>
            <p className="text-sm text-gray-600">
              {getStatusLabel(delivery.status)}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="bg-white border-t border-b px-4 py-3 grid grid-cols-1 xl:grid-cols-4 gap-3 text-sm">
        <div className="lg:col-span-2">
          <p className="font-semibold text-gray-700">Trip Replay</p>
          <input
            type="range"
            min={0}
            max={100}
            value={replayProgress}
            onChange={(e) => setReplayProgress(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500">
            {visibleSnapshotSegments.length}/
            {routeSegments.snapshotSegments.length} persisted segments visible
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Route Review</p>
          <button
            onClick={() => {
              setReviewMode((prev) => !prev);
              setReviewPoints([]);
            }}
            className={`mt-1 px-3 py-1 rounded-md text-white ${reviewMode ? "bg-red-600" : "bg-indigo-600"}`}
          >
            {reviewMode ? "Cancel Segment Select" : "Reject Blocked Segment"}
          </button>
          <p className="text-xs text-gray-500 mt-1">
            Click 2 points on map when enabled
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">In-transit Reroute</p>
          <button
            onClick={recommendNextCarrier}
            disabled={recommending}
            className="mt-1 px-3 py-1 rounded-md bg-emerald-600 text-white disabled:opacity-60"
          >
            {recommending ? "Finding..." : "Recommend Next Carrier"}
          </button>
          {recommendedCarrier && (
            <div className="mt-1 text-xs text-gray-600">
              <p>
                {recommendedCarrier.fullName} •{" "}
                {recommendedCarrier.distanceKm.toFixed(2)} km away
              </p>
              <p>
                Learning score: {recommendedCarrier.shortcutContributionScore}
              </p>
              <button
                onClick={reassignToRecommendedCarrier}
                className="mt-1 px-2 py-1 rounded bg-amber-500 text-white"
              >
                Reassign Now
              </button>
            </div>
          )}
        </div>
      </div>

      {reviewMode && (
        <div className="bg-red-50 border-b border-red-200 px-4 py-3 text-sm grid grid-cols-1 xl:grid-cols-4 gap-3">
          <select
            value={routeIssueCategory}
            onChange={(e) => setRouteIssueCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="blocked_segment">Blocked segment</option>
            <option value="temporarily_unseeable">Temporarily unseeable</option>
            <option value="unsafe_segment">Unsafe segment</option>
          </select>
          <input
            value={routeIssueReason}
            onChange={(e) => setRouteIssueReason(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            placeholder="Why this route section should be rejected/unavailable"
          />
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={routeIssueTemporary}
              onChange={(e) => setRouteIssueTemporary(e.target.checked)}
            />
            Temporary issue
          </label>
          <input
            type="number"
            min={1}
            max={48}
            value={routeIssueExpiresHours}
            onChange={(e) => setRouteIssueExpiresHours(Number(e.target.value))}
            disabled={!routeIssueTemporary}
            className="border border-gray-300 rounded px-3 py-2 disabled:opacity-50"
            placeholder="Expires in hours"
          />
          <button
            onClick={submitRouteReview}
            disabled={reviewPoints.length !== 2 || !routeIssueReason.trim()}
            className="px-3 py-2 rounded bg-red-600 text-white disabled:opacity-50"
          >
            Save Segment Review
          </button>
        </div>
      )}

      <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
        <div className="relative w-full h-[52vh] min-h-[360px] lg:min-h-[520px] overflow-hidden rounded-xl border border-gray-200 bg-white">
          {typeof window !== "undefined" && (
            <>
              <GoogleMap
                zoom={15}
                center={mapCenter}
                onLoad={(map) => setMapInstance(map)}
                onClick={onMapClick}
                mapContainerStyle={{ height: "100%", width: "100%" }}
                options={{ disableDefaultUI: false }}
              >
                {visibleManagedSegments.map((segment) => {
                  const style = getRouteNetworkSegmentStyle(segment);
                  return (
                    <Polyline
                      key={`managed-${segment.id}`}
                      path={[segment.start, segment.end]}
                      onClick={() => focusSegment(segment)}
                      options={{
                        strokeColor: style.strokeColor,
                        strokeOpacity: style.strokeOpacity,
                        strokeWeight: style.strokeWeight,
                        zIndex: 18,
                      }}
                    />
                  );
                })}

                {/* Carrier to Pickup Path (Yellow with low opacity) */}
                {carrierToPickupDisplayPath &&
                  carrierToPickupDisplayPath.length > 1 && (
                    <Polyline
                      path={carrierToPickupDisplayPath}
                      options={{
                        strokeColor: "#a855f7",
                        strokeOpacity: 0.72,
                        strokeWeight: 5,
                        icons: [
                          {
                            icon: {
                              path: "M 0,-1 0,1",
                              strokeOpacity: 0.9,
                              scale: 3,
                            },
                            offset: "0",
                            repeat: "16px",
                          },
                        ],
                      }}
                    />
                  )}

                {/* Pickup to Delivery Path (Orange with low opacity) */}
                {pickupToDeliveryDisplayPath &&
                  pickupToDeliveryDisplayPath.length > 1 && (
                    <Polyline
                      path={pickupToDeliveryDisplayPath}
                      options={{
                        strokeColor: "#f97316",
                        strokeOpacity: 0.74,
                        strokeWeight: 5,
                        icons: [
                          {
                            icon: {
                              path: "M 0,-1 0,1",
                              strokeOpacity: 0.95,
                              scale: 3,
                            },
                            offset: "0",
                            repeat: "18px",
                          },
                        ],
                      }}
                    />
                  )}

                {/* Planned Route (Dotted Amber) */}
                {routeSegments.planned.length > 1 && (
                  <Polyline
                    path={routeSegments.planned}
                    options={{
                      strokeColor: "#f59e0b",
                      strokeOpacity: 0.9,
                      strokeWeight: 4,
                      icons: [
                        {
                          icon: {
                            path: "M 0,-1 0,1",
                            strokeOpacity: 1,
                            scale: 3,
                          },
                          offset: "0",
                          repeat: "16px",
                        },
                      ],
                    }}
                  />
                )}

                {/* Historical Route Snapshots */}
                {visibleSnapshotSegments.map((segment) => (
                  <Polyline
                    key={segment.id}
                    path={segment.points}
                    options={{
                      strokeColor: segment.color,
                      strokeOpacity: 0.95,
                      strokeWeight: 5,
                    }}
                  />
                ))}

                {routeSegments.active.length > 1 && (
                  <Polyline
                    path={routeSegments.active}
                    options={{
                      strokeColor: activeRouteColor,
                      strokeOpacity: 1,
                      strokeWeight: 6,
                      icons: [
                        {
                          icon: {
                            path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                            scale: 2.5,
                            strokeOpacity: 0.9,
                          },
                          offset: "12px",
                          repeat: "44px",
                        },
                      ],
                    }}
                  />
                )}

                {routeSegments.learnedShortcutSegments.map((segment) => (
                  <Polyline
                    key={`learned-${segment.id}`}
                    path={segment.points}
                    options={{
                      strokeColor: "#ef4444",
                      strokeOpacity: 0.9,
                      strokeWeight: 4,
                      icons: [
                        {
                          icon: {
                            path: "M 0,-1 0,1",
                            strokeOpacity: 1,
                            scale: 3,
                          },
                          offset: "0",
                          repeat: "10px",
                        },
                      ],
                    }}
                  />
                ))}

                {routeSegments.blockedSegments.map((segment) => (
                  <Polyline
                    key={segment.id}
                    path={segment.points}
                    options={{
                      strokeColor: segment.temporary ? "#eab308" : "#dc2626",
                      strokeOpacity: 1,
                      strokeWeight: 5,
                      icons: [
                        {
                          icon: {
                            path: "M -2,-2 2,2 M 2,-2 -2,2",
                            strokeOpacity: 1,
                            scale: 2,
                          },
                          offset: "0",
                          repeat: "14px",
                        },
                      ],
                    }}
                  />
                ))}

                {reviewPoints.map((point, index) => (
                  <Marker
                    key={`${point.lat}-${point.lng}-${index}`}
                    position={point}
                    title={`Review point ${index + 1}`}
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      scale: 8,
                      fillColor: "#dc2626",
                      fillOpacity: 1,
                      strokeColor: "#fff",
                      strokeWeight: 2,
                    }}
                  />
                ))}

                {reviewPoints.length === 2 && (
                  <Polyline
                    path={reviewPoints}
                    options={{
                      strokeColor: "#dc2626",
                      strokeOpacity: 1,
                      strokeWeight: 4,
                    }}
                  />
                )}

                {delivery.currentLocation && (
                  <Marker
                    position={{
                      lat: delivery.currentLocation.lat,
                      lng: delivery.currentLocation.lng,
                    }}
                    title="Delivery Location"
                    zIndex={10}
                    onClick={() =>
                      setSelectedMapInfo({
                        position: {
                          lat: delivery.currentLocation!.lat,
                          lng: delivery.currentLocation!.lng,
                        },
                        title: "Package location",
                        details: [
                          `Tracking: ${delivery.trackingCode}`,
                          `Status: ${getStatusLabel(delivery.status)}`,
                        ],
                      })
                    }
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      scale: 16,
                      fillColor: "#ef4444",
                      fillOpacity: 1,
                      strokeColor: "#fff",
                      strokeWeight: 2,
                    }}
                  />
                )}

                {carrierLocation && delivery.status !== "delivered" && (
                  <Marker
                    position={{
                      lat: carrierLocation.lat,
                      lng: carrierLocation.lng,
                    }}
                    title={delivery.carrierName || "Carrier"}
                    zIndex={20}
                    onClick={() =>
                      setSelectedMapInfo({
                        position: {
                          lat: carrierLocation.lat,
                          lng: carrierLocation.lng,
                        },
                        title: delivery.carrierName || "Carrier location",
                        details: [
                          `Status: ${getStatusLabel(delivery.status)}`,
                          delivery.carrierPhone
                            ? `Phone: ${delivery.carrierPhone}`
                            : "Phone unavailable",
                        ],
                      })
                    }
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      scale: 12,
                      fillColor: "#22c55e",
                      fillOpacity: 1,
                      strokeColor: "#fff",
                      strokeWeight: 2,
                    }}
                  />
                )}

                {/* Pickup Location Marker */}
                {delivery.pickupLocation && (
                  <Marker
                    position={{
                      lat: delivery.pickupLocation.lat,
                      lng: delivery.pickupLocation.lng,
                    }}
                    title="Pickup Location"
                    zIndex={30}
                    onClick={() =>
                      setSelectedMapInfo({
                        position: {
                          lat: delivery.pickupLocation!.lat,
                          lng: delivery.pickupLocation!.lng,
                        },
                        title: "Pickup location",
                        details: [
                          delivery.pickupAddress,
                          `Customer: ${delivery.customerName}`,
                        ],
                      })
                    }
                    icon={{
                      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                      scale: 6,
                      fillColor: "#fbbf24",
                      fillOpacity: 1,
                      strokeColor: "#fff",
                      strokeWeight: 2,
                    }}
                  />
                )}

                {/* Delivery Location Marker */}
                {delivery.deliveryLocation && (
                  <Marker
                    position={{
                      lat: delivery.deliveryLocation.lat,
                      lng: delivery.deliveryLocation.lng,
                    }}
                    title="Delivery Destination"
                    zIndex={30}
                    onClick={() =>
                      setSelectedMapInfo({
                        position: {
                          lat: delivery.deliveryLocation!.lat,
                          lng: delivery.deliveryLocation!.lng,
                        },
                        title: "Dropoff location",
                        details: [
                          delivery.deliveryAddress,
                          `Customer: ${delivery.customerName}`,
                        ],
                      })
                    }
                    icon={{
                      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                      scale: 6,
                      fillColor: "#fb923c",
                      fillOpacity: 1,
                      strokeColor: "#fff",
                      strokeWeight: 2,
                    }}
                  />
                )}

                {selectedMapInfo && (
                  <InfoWindow
                    position={selectedMapInfo.position}
                    onCloseClick={() => setSelectedMapInfo(null)}
                  >
                    <div className="min-w-[180px] text-xs text-slate-700">
                      <p className="text-sm font-semibold text-slate-900">
                        {selectedMapInfo.title}
                      </p>
                      <div className="mt-1 space-y-0.5">
                        {selectedMapInfo.details.map((line, index) => (
                          <p key={`${line}-${index}`}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </>
          )}
        </div>

        {/* Map Legend */}
        <div className="mt-3">
          <MapLegend
            title="Route Legend"
            className="w-full"
            items={[
              {
                color: "#16a34a",
                opacity: 0.92,
                label: "Shortcut",
                description: "Managed local shortcut",
              },
              {
                color: "#dc2626",
                opacity: 0.95,
                label: "Blocked path",
                description: "Managed road block",
              },
              {
                color: "#7c3aed",
                opacity: 0.9,
                label: "Restricted path",
                description: "Vehicle or road restriction",
              },
              {
                color: "#a855f7",
                opacity: 0.72,
                label: "Carrier → Pickup",
                description: "Approach leg",
              },
              {
                color: "#f97316",
                opacity: 0.74,
                label: "Pickup → Delivery",
                description: "Delivery leg",
              },
              {
                color: activeRouteColor,
                opacity: 1,
                label: "Active Route",
                description: "Current live route",
              },
              {
                color: "#ef4444",
                opacity: 0.9,
                label: "Learned Shortcut",
                description: "Shortcut candidates",
              },
              {
                color: "#dc2626",
                opacity: 1,
                label: "Rejected/Blocked",
                description: "Unavailable path",
              },
              ...ROUTE_COLORS.slice(
                0,
                Math.min(3, visibleSnapshotSegments.length),
              ).map((color, i) => ({
                color,
                opacity: 0.95,
                label: `Snapshot ${i + 1}`,
                description: "Historical segment",
              })),
              {
                color: "#f59e0b",
                opacity: 0.9,
                label: "Planned Route",
                description: "Original route",
              },
            ]}
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => focusPoint(delivery.pickupLocation)}
            className="rounded-full bg-amber-100 px-3 py-1.5 font-semibold text-amber-800 hover:bg-amber-200"
          >
            Locate pickup
          </button>
          <button
            type="button"
            onClick={() =>
              focusPoint(carrierLocation || delivery.currentLocation)
            }
            className="rounded-full bg-emerald-100 px-3 py-1.5 font-semibold text-emerald-800 hover:bg-emerald-200"
          >
            Locate carrier
          </button>
          <button
            type="button"
            onClick={() => focusPoint(delivery.deliveryLocation)}
            className="rounded-full bg-orange-100 px-3 py-1.5 font-semibold text-orange-800 hover:bg-orange-200"
          >
            Locate delivery
          </button>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
            {visibleManagedSegments.length} route rule(s) visible
          </span>
        </div>

        {visibleManagedSegments.length > 0 && (
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-800">
              Visible route rules for this delivery
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {visibleManagedSegments.map((segment) => {
                const style = getRouteNetworkSegmentStyle(segment);
                return (
                  <button
                    key={segment.id}
                    type="button"
                    onClick={() => focusSegment(segment)}
                    className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                    style={{
                      borderColor: style.strokeColor,
                      color: style.strokeColor,
                      backgroundColor: `${style.strokeColor}12`,
                    }}
                  >
                    {segment.name} •{" "}
                    {formatRouteNetworkSegmentType(segment.type)}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {(delivery.routeFeedback?.length || learnedSegments.length) && (
        <div className="bg-white border-t px-4 py-3 text-xs text-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Carrier Route Feedback
            </p>
            <div className="space-y-1 max-h-24 overflow-y-auto pr-1">
              {(delivery.routeFeedback || [])
                .slice(0, 5)
                .map((feedback, idx) => (
                  <p key={`fb-${idx}`}>
                    • {feedback.type}: {feedback.reason || "No reason"}
                    {feedback.note ? ` — ${feedback.note}` : ""}
                  </p>
                ))}
              {!delivery.routeFeedback?.length && <p>None yet.</p>}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Learned Shortcut Segments
            </p>
            <p>
              {learnedSegments.length} segment(s) captured for future
              optimization.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white shadow p-4 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500 font-medium">PICKUP</p>
            <p className="text-sm text-gray-800">{delivery.pickupAddress}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">DELIVERY</p>
            <p className="text-sm text-gray-800">{delivery.deliveryAddress}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">DRIVER</p>
            <p className="text-sm text-gray-800">
              {delivery.carrierName || "Not assigned"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">PRIORITY</p>
            <p className="text-sm text-gray-800 capitalize">
              {delivery.priority || "standard"}
            </p>
          </div>
        </div>

        {/* Optimization Reasons Display */}
        {delivery.optimizationReasons &&
          delivery.optimizationReasons.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <OptimizationReasonDisplay
                reasons={delivery.optimizationReasons}
              />
            </div>
          )}
      </div>
    </div>
  );
}
