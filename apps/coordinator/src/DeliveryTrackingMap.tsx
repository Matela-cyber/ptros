import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import { db, realtimeDb } from "@config";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { toast, Toaster } from "react-hot-toast";
import { decodePolyline, haversineKm } from "./routeHistory";
import MapLegend from "./components/MapLegend";
import OptimizationReasonDisplay, {
  OptimizationReason,
} from "./components/OptimizationReasonDisplay";

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
  "#2563eb",
  "#16a34a",
  "#e11d48",
  "#9333ea",
  "#ea580c",
  "#0891b2",
];

export default function DeliveryTrackingMap() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [delivery, setDelivery] = useState<DeliveryData | null>(null);
  const [carrierLocation, setCarrierLocation] =
    useState<CarrierLocation | null>(null);
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
  const [carrierToPickupPath, setCarrierToPickupPath] = useState<
    google.maps.LatLng[] | null
  >(null);
  const [pickupToDeliveryPath, setPickupToDeliveryPath] = useState<
    google.maps.LatLng[] | null
  >(null);

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
      !window.google?.maps ||
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

    const directionsService = new window.google.maps.DirectionsService();

    // Carrier to Pickup path (Yellow) - only if not picked up
    if (delivery.status === "assigned" || delivery.status === "accepted") {
      directionsService.route(
        {
          origin: new google.maps.LatLng(
            carrierLocation.lat,
            carrierLocation.lng,
          ),
          destination: new google.maps.LatLng(
            delivery.pickupLocation.lat,
            delivery.pickupLocation.lng,
          ),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result: any, status: any) => {
          if (status === "OK" && result) {
            setCarrierToPickupPath(
              result.routes[0].overview_path as google.maps.LatLng[],
            );
          }
        },
      );
    } else {
      setCarrierToPickupPath(null);
    }

    // Pickup to Delivery path (Orange) - always show for active deliveries
    directionsService.route(
      {
        origin: new google.maps.LatLng(
          delivery.pickupLocation.lat,
          delivery.pickupLocation.lng,
        ),
        destination: new google.maps.LatLng(
          delivery.deliveryLocation.lat,
          delivery.deliveryLocation.lng,
        ),
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: any) => {
        if (status === "OK" && result) {
          setPickupToDeliveryPath(
            result.routes[0].overview_path as google.maps.LatLng[],
          );
        }
      },
    );
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
      await updateDoc(doc(db, "deliveries", id), {
        routeReviews: arrayUnion({
          type: routeIssueCategory,
          temporary: routeIssueTemporary,
          reason: routeIssueReason.trim(),
          start: reviewPoints[0],
          end: reviewPoints[1],
          expiresAt: routeIssueTemporary
            ? Timestamp.fromMillis(
                Date.now() + routeIssueExpiresHours * 60 * 60 * 1000,
              )
            : null,
          createdAt: Timestamp.now(),
          source: "coordinator",
          status: "active",
        }),
        routeControl: {
          hasBlockedSegments: true,
          lastReviewAt: Timestamp.now(),
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
      const q = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", true),
        where("status", "in", ["active", "busy"]),
        limit(20),
      );

      const snap = await getDocs(q);
      const candidates: CarrierCandidate[] = snap.docs
        .map((d) => {
          const data = d.data() as any;
          const loc = data.currentLocation;
          if (!loc?.lat || !loc?.lng || d.id === delivery.carrierId)
            return null;
          const learnedShortcutCount =
            Number(data?.routeLearningStats?.shortcutsReported || 0) || 0;
          return {
            id: d.id,
            fullName: data.fullName || "Carrier",
            distanceKm: haversineKm(
              { lat: carrierLocation.lat, lng: carrierLocation.lng },
              { lat: loc.lat, lng: loc.lng },
            ),
            shortcutContributionScore: Math.min(learnedShortcutCount, 20),
          };
        })
        .filter(Boolean)
        .sort(
          (a, b) =>
            (a as CarrierCandidate).distanceKm -
            (b as CarrierCandidate).distanceKm -
            ((a as CarrierCandidate).shortcutContributionScore * 0.06 -
              (b as CarrierCandidate).shortcutContributionScore * 0.06),
        ) as CarrierCandidate[];

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
    <div className="h-screen flex flex-col">
      <Toaster position="top-right" />

      <div className="bg-white shadow p-4 z-10">
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

      <div className="bg-white border-t border-b px-4 py-3 grid grid-cols-1 lg:grid-cols-4 gap-3 text-sm">
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
        <div className="bg-red-50 border-b border-red-200 px-4 py-3 text-sm grid grid-cols-1 lg:grid-cols-4 gap-3">
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

      <div className="flex-1 relative">
        {typeof window !== "undefined" && (
          <>
            <GoogleMap
              zoom={15}
              center={mapCenter}
              onClick={onMapClick}
              mapContainerStyle={{ height: "100%", width: "100%" }}
              options={{ disableDefaultUI: false }}
            >
              {/* Carrier to Pickup Path (Yellow with low opacity) */}
              {carrierToPickupPath && carrierToPickupPath.length > 1 && (
                <Polyline
                  path={carrierToPickupPath}
                  options={{
                    strokeColor: "#fbbf24",
                    strokeOpacity: 0.4,
                    strokeWeight: 6,
                    icons: [
                      {
                        icon: {
                          path: "M 0,-1 0,1",
                          strokeOpacity: 0.6,
                          scale: 3,
                        },
                        offset: "0",
                        repeat: "20px",
                      },
                    ],
                  }}
                />
              )}

              {/* Pickup to Delivery Path (Orange with low opacity) */}
              {pickupToDeliveryPath && pickupToDeliveryPath.length > 1 && (
                <Polyline
                  path={pickupToDeliveryPath}
                  options={{
                    strokeColor: "#fb923c",
                    strokeOpacity: 0.4,
                    strokeWeight: 6,
                    icons: [
                      {
                        icon: {
                          path: "M 0,-1 0,1",
                          strokeOpacity: 0.6,
                          scale: 3,
                        },
                        offset: "0",
                        repeat: "20px",
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
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
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
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
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
            </GoogleMap>

            {/* Map Legend */}
            <MapLegend
              title="Route Legend"
              items={[
                {
                  color: "#fbbf24",
                  opacity: 0.4,
                  label: "Carrier → Pickup",
                  description: "Expected path from carrier to pickup location",
                },
                {
                  color: "#fb923c",
                  opacity: 0.4,
                  label: "Pickup → Delivery",
                  description: "Expected path from pickup to delivery",
                },
                {
                  color: activeRouteColor,
                  opacity: 1,
                  label: "Active Route",
                  description: "Current live route in progress",
                },
                {
                  color: "#ef4444",
                  opacity: 0.9,
                  label: "Learned Shortcut",
                  description: "Carrier-reported shortcut candidates",
                },
                {
                  color: "#dc2626",
                  opacity: 1,
                  label: "Rejected/Blocked Segment",
                  description: "Coordinator-reviewed unavailable path",
                },
                ...ROUTE_COLORS.slice(
                  0,
                  Math.min(3, visibleSnapshotSegments.length),
                ).map((color, i) => ({
                  color,
                  opacity: 0.95,
                  label: `Snapshot ${i + 1}`,
                  description: "Historical route segment",
                })),
                {
                  color: "#f59e0b",
                  opacity: 0.9,
                  label: "Planned Route",
                  description: "Original calculated route",
                },
              ]}
            />
          </>
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
