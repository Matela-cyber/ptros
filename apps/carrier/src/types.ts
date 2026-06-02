import { Timestamp } from "firebase/firestore";

export interface CarrierProfile {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  vehicleType: string;
  licensePlate: string;
  role: "carrier";
  isApproved: boolean;
  status: "active" | "inactive" | "busy" | "pending";
  shareLocation: boolean;
  earnings: number;
  completedDeliveries: number;
  rating: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastActive?: Timestamp;
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp: Timestamp;
  };
  capacityWeight?: number; // max carrying weight in kg
  capacityVolume?: number; // max carrying volume in m³
}

export interface Delivery {
  id: string;
  trackingCode: string;
  status:
    | "pending"
    | "assigned"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "out_for_delivery"
    | "stuck"
    | "delivered"
    | "cancelled";
  customerEmail: string;
  senderEmail?: string;
  receiverEmail?: string;
  customerName: string;
  customerPhone: string;
  recipientName: string;
  recipientPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDescription: string;
  packageWeight: number;
  packageValue: number;
  deliveryInstructions: string;
  carrierId?: string;
  carrierName?: string;
  carrierPhone?: string;
  earnings?: number;
  estimatedEarnings?: number;
  estimatedDelivery?: Timestamp;
  pickupTime?: Timestamp;
  deliveryTime?: Timestamp;
  assignedAt?: Timestamp;
  acceptedAt?: Timestamp;
  eta?: {
    pickupEtaMs: number | null;
    deliveryEtaMs: number | null;
    computedAtMs: number;
    distanceToPickupKm: number | null;
    totalDistanceKm: number | null;
    avgSpeedKmh: number;
    source: "assigned" | "accepted" | "reoptimized";
  };
  pickupLocation?: {
    lat: number;
    lng: number;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
  };
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp: Timestamp;
  };
  route?: {
    polyline?: string; // Encoded polyline for route display
    distance?: number; // Distance in km
    duration?: number; // Duration in minutes
    waypoints?: Array<{ lat: number; lng: number }>;
  };
  otpCode?: string;
  otp?: {
    pickup?: {
      code?: string | null;
      verified?: boolean;
      verifiedAt?: Timestamp | null;
      verifiedBy?: string | null;
      bypassed?: boolean;
      bypassReason?: string | null;
    };
    delivery?: {
      code?: string | null;
      verified?: boolean;
      verifiedAt?: Timestamp | null;
      verifiedBy?: string | null;
      bypassed?: boolean;
      bypassReason?: string | null;
    };
  };
  otpVerified: boolean;
  paymentMethod: "cash" | "mobile_money" | "card";
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CarrierStats {
  todayEarnings: number;
  todayDeliveries: number;
  totalEarnings: number;
  totalDeliveries: number;
  averageRating: number;
  activeHours: number;
}

export interface LocationUpdate {
  lat: number;
  lng: number;
  timestamp: Date;
  accuracy?: number;
}
