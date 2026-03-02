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
  packageValue?: number;
  paymentMethod?: string;
  route?: {
    polyline?: string;
  };
  routeHistory?: {
    activePolyline?: string;
  };
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
  const [recommending, setRecommending] = useState(false);
  const [recommendedCarrier, setRecommendedCarrier] =
    useState<CarrierCandidate | null>(null);

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
        packageValue: data.packageValue,
        paymentMethod: data.paymentMethod,
        route: data.route,
        routeHistory: data.routeHistory,
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

    return { planned, snapshotSegments, active };
  }, [
    delivery?.route?.polyline,
    delivery?.routeHistory?.activePolyline,
    snapshots,
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
          type: "blocked_segment",
          temporary: routeIssueTemporary,
          reason: routeIssueReason.trim(),
          start: reviewPoints[0],
          end: reviewPoints[1],
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
    } catch (error) {
      console.error(error);
      toast.error("Failed to save route review.");
    }
  };

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
          return {
            id: d.id,
            fullName: data.fullName || "Carrier",
            distanceKm: haversineKm(
              { lat: carrierLocation.lat, lng: carrierLocation.lng },
              { lat: loc.lat, lng: loc.lng },
            ),
          };
        })
        .filter(Boolean)
        .sort(
          (a, b) =>
            (a as CarrierCandidate).distanceKm -
            (b as CarrierCandidate).distanceKm,
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
          <input
            value={routeIssueReason}
            onChange={(e) => setRouteIssueReason(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 lg:col-span-2"
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
          <button
            onClick={submitRouteReview}
            disabled={reviewPoints.length !== 2 || !routeIssueReason.trim()}
            className="px-3 py-2 rounded bg-red-600 text-white disabled:opacity-50"
          >
            Save Segment Review
          </button>
        </div>
      )}

      <div className="flex-1">
        {typeof window !== "undefined" && (
          <GoogleMap
            zoom={15}
            center={mapCenter}
            onClick={onMapClick}
            mapContainerStyle={{ height: "100%", width: "100%" }}
            options={{ disableDefaultUI: false }}
          >
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
                  strokeColor: "#0ea5e9",
                  strokeOpacity: 1,
                  strokeWeight: 6,
                }}
              />
            )}

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
          </GoogleMap>
        )}
      </div>

      <div className="bg-white shadow p-4 border-t">
        <div className="grid grid-cols-3 gap-4">
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
        </div>
      </div>
    </div>
  );
}
