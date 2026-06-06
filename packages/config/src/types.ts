export interface UserProfile {
  id: string;
  email: string;
  role: "coordinator" | "carrier" | "customer";
  fullName: string;
  phone: string;
  address: string;
  whatsapp: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
  isApproved: boolean;

  // Coordinator specific
  canManageCoordinators?: boolean;
  permissions?: string[];

  // Carrier specific
  vehicleType?: string;
  licensePlate?: string;
  idNumber?: string;
  earnings?: number;
  completedDeliveries?: number;
  status?: "active" | "inactive" | "suspended";

  // Customer specific
  emailVerified?: boolean;
  defaultPaymentMethod?: string;
}

export interface Delivery {
  id: string;
  trackingCode: string;
  status: "pending" | "assigned" | "picked_up" | "in_transit" | "delivered";
  pickupAddress: string;
  deliveryAddress: string;
  packageDetails: string;
  customerId: string;
  carrierId?: string;
  coordinatorId: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedDelivery?: Date;
  actualDelivery?: Date;
  // Payment fields
  paymentMethod?: "cash" | "mobile_money";
  paymentAmount?: number | null;
  paymentStatus?: "pending" | "processing" | "paid" | "failed";
  payerNumber?: string | null; // e.g., M-Pesa phone number used for payment
  paymentConfirmedBy?: string | null; // uid of user who confirmed payment (carrier/coordinator/customer)
  paymentConfirmedAt?: Date | null;
  paymentHistory?: Array<{
    type: string; // e.g., "mpesa_attempt", "mpesa_success", "cod_received"
    method?: string;
    amount?: number | null;
    initiatedBy?: string | null;
    timestamp?: Date | null;
    meta?: any;
  }>;
}
