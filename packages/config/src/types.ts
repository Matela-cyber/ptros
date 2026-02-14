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
}
