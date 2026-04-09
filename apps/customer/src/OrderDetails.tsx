// apps/customer/src/OrderDetails.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { doc, getDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleCheck,
  faComments,
  faMapLocationDot,
  faPhone,
  faPrint,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

interface OrderDetail {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDetails: string;
  carrierName?: string;
  carrierPhone?: string;
  createdAt: Date;
  estimatedDelivery?: Date;
  actualDelivery?: Date;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  otpCode?: string;
  otpVerified?: boolean;
  proofOfDelivery?: {
    otp?: string;
    verified?: boolean;
  };
}

const SUPPORT_EMAIL = "support@ptros.co.ls";
const SUPPORT_PHONE = "+2662222";

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const normalizePhone = (rawPhone?: string) => {
    if (!rawPhone) return "";
    return rawPhone.replace(/[^+\d]/g, "");
  };

  const handleCallCarrier = () => {
    if (!order) return;

    const carrierPhone = normalizePhone(order.carrierPhone);
    const supportPhone = normalizePhone(SUPPORT_PHONE);
    const targetPhone = carrierPhone || supportPhone;

    if (!targetPhone) {
      toast.error("No phone number is available right now.");
      return;
    }

    if (!carrierPhone) {
      toast("Carrier phone is unavailable. Calling support instead.");
    }

    window.location.href = `tel:${targetPhone}`;
  };

  const handleChatSupport = () => {
    if (!order) return;

    const subject = encodeURIComponent(
      `Support request for order ${order.trackingCode}`,
    );
    const body = encodeURIComponent(
      [
        `Hello PTROS Support,`,
        "",
        `I need help with my order ${order.trackingCode}.`,
        `Status: ${order.status}`,
        `Pickup Address: ${order.pickupAddress}`,
        `Delivery Address: ${order.deliveryAddress}`,
        order.carrierName ? `Carrier: ${order.carrierName}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening support chat via email");
  };

  const handlePrintReceipt = () => {
    if (!order) return;

    const statusLabel = order.status.replace(/_/g, " ");
    const orderedDate = order.createdAt.toLocaleString();
    const estimatedDate = order.estimatedDelivery
      ? order.estimatedDelivery.toLocaleString()
      : "N/A";
    const deliveredDate = order.actualDelivery
      ? order.actualDelivery.toLocaleString()
      : "N/A";

    const receiptHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>PTROS Receipt - ${order.trackingCode}</title>
          <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              color: #111827;
              margin: 0;
              padding: 24px;
            }
            .receipt {
              max-width: 760px;
              margin: 0 auto;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              padding: 24px;
            }
            .header {
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 12px;
              margin-bottom: 16px;
            }
            .title {
              font-size: 22px;
              font-weight: 700;
              margin: 0;
            }
            .subtitle {
              margin: 6px 0 0;
              color: #4b5563;
              font-size: 14px;
            }
            .section {
              margin-top: 16px;
            }
            .section h3 {
              margin: 0 0 8px;
              font-size: 15px;
            }
            .row {
              display: flex;
              gap: 12px;
              margin: 6px 0;
            }
            .label {
              width: 180px;
              color: #6b7280;
              flex-shrink: 0;
            }
            .value {
              font-weight: 500;
              word-break: break-word;
            }
            .footer {
              margin-top: 20px;
              padding-top: 12px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="receipt">
            <div class="header">
              <h1 class="title">PTROS Delivery Receipt</h1>
              <p class="subtitle">Tracking Code: ${order.trackingCode}</p>
            </div>

            <div class="section">
              <h3>Order Summary</h3>
              <div class="row"><div class="label">Status</div><div class="value">${statusLabel}</div></div>
              <div class="row"><div class="label">Ordered At</div><div class="value">${orderedDate}</div></div>
              <div class="row"><div class="label">Estimated Delivery</div><div class="value">${estimatedDate}</div></div>
              <div class="row"><div class="label">Delivered At</div><div class="value">${deliveredDate}</div></div>
            </div>

            <div class="section">
              <h3>Delivery Details</h3>
              <div class="row"><div class="label">Pickup Address</div><div class="value">${order.pickupAddress || "N/A"}</div></div>
              <div class="row"><div class="label">Delivery Address</div><div class="value">${order.deliveryAddress || "N/A"}</div></div>
              <div class="row"><div class="label">Package Details</div><div class="value">${order.packageDetails || "N/A"}</div></div>
              <div class="row"><div class="label">Carrier</div><div class="value">${order.carrierName || "Not assigned"}</div></div>
            </div>

            <div class="footer">
              Generated on ${new Date().toLocaleString()} • PTROS Customer Portal
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) {
      toast.error("Unable to open print window. Please allow pop-ups.");
      return;
    }

    printWindow.document.open();
    printWindow.document.write(receiptHtml);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  };

  const handleShareTracking = async () => {
    if (!order) return;

    const shareUrl = `${window.location.origin}/g/track/${order.id}`;
    const shareTitle = `Track package ${order.trackingCode}`;
    const shareText = `Track my package ${order.trackingCode} using this link.`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      toast.success("Tracking link copied to clipboard");
    } catch (error) {
      // Ignore user cancellation for native share dialog
      if ((error as any)?.name === "AbortError") {
        return;
      }

      console.error("Error sharing tracking link:", error);
      toast.error("Failed to share tracking link");
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (!id) return;
        const docRef = doc(db, "deliveries", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setOrder({
            id: docSnap.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            packageDetails: data.packageDetails,
            carrierName: data.carrierName,
            carrierPhone: data.carrierPhone,
            createdAt: data.createdAt?.toDate() || new Date(),
            estimatedDelivery: data.estimatedDelivery?.toDate(),
            actualDelivery: data.actualDelivery?.toDate(),
            currentLocation: data.currentLocation,
            otpCode: data.otpCode,
            otpVerified: data.otpVerified,
            proofOfDelivery: data.proofOfDelivery,
          });
        } else {
          toast.error("Order not found");
          navigate("/orders");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
        toast.error("Failed to load order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <p className="text-gray-500 text-lg">Order not found</p>
      </div>
    );
  }

  const getStatusSteps = () => {
    const steps = [
      "pending",
      "assigned",
      "picked_up",
      "in_transit",
      "delivered",
    ];
    return steps.map((step, index) => ({
      step,
      completed: steps.indexOf(order.status) >= index,
    }));
  };

  const displayOtp = order.proofOfDelivery?.otp || order.otpCode;
  const shouldShowOtp = [
    "picked_up",
    "in_transit",
    "out_for_delivery",
  ].includes(order.status);

  return (
    <div>
      <Toaster position="top-right" />
      <button
        onClick={() => navigate("/orders")}
        className="mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
      >
        ← Back to Orders
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Header */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">{order.trackingCode}</h1>
                <p className="text-gray-600 mt-2">
                  Ordered on {order.createdAt.toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/track/${order.id}`)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faMapLocationDot} /> Live Track
                </button>
                <span
                  className={`px-4 py-2 rounded-full text-lg font-medium text-center ${
                    order.status === "delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "in_transit"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-xl">
              Delivery Progress
            </h3>
            <div className="flex items-start justify-between gap-1.5 sm:items-center sm:gap-0">
              {getStatusSteps().map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`mb-1.5 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold sm:mb-2 sm:h-12 sm:w-12 sm:text-base ${
                      item.completed
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.completed ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p
                    className={`text-center text-[11px] leading-tight sm:text-sm ${
                      item.completed ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {item.step}
                  </p>
                  {index < getStatusSteps().length - 1 && (
                    <div
                      className={`mt-2 h-0.5 w-full mx-1 sm:mx-2 sm:mt-4 sm:h-1 ${
                        item.completed ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">Delivery Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pickup Address</p>
                <p className="text-gray-800 font-medium">
                  {order.pickupAddress}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Delivery Address</p>
                <p className="text-gray-800 font-medium">
                  {order.deliveryAddress}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Package Details</p>
                <p className="text-gray-800 font-medium">
                  {order.packageDetails}
                </p>
              </div>
              {order.carrierName && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Carrier</p>
                  <p className="text-gray-800 font-medium">
                    {order.carrierName}
                  </p>
                </div>
              )}
              {order.estimatedDelivery && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Estimated Delivery
                  </p>
                  <p className="text-gray-800 font-medium">
                    {order.estimatedDelivery.toLocaleDateString()}
                  </p>
                </div>
              )}

              {shouldShowOtp && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Delivery OTP</p>
                  {displayOtp ? (
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-50 text-amber-800 font-bold tracking-widest border border-amber-200">
                        {displayOtp}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Give this OTP to the carrier only when your package is
                        delivered.
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      OTP is generated after pickup.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Carrier */}
          {order.status !== "delivered" && (
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold mb-4">Need Help?</h3>
              <button
                onClick={handleCallCarrier}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Contact Carrier
              </button>
              <button
                onClick={handleChatSupport}
                className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 font-medium"
              >
                <FontAwesomeIcon icon={faComments} className="mr-2" />
                Chat Support
              </button>
            </div>
          )}

          {/* Delivered Info */}
          {order.status === "delivered" && order.actualDelivery && (
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold mb-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mr-2 text-green-600"
                />
                Delivered
              </h3>
              <p className="text-sm text-green-800">
                Your package was delivered on{" "}
                {order.actualDelivery.toLocaleDateString()}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-4">Actions</h3>
            <button
              onClick={handleShareTracking}
              className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium mb-2"
            >
              <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
              Share Tracking
            </button>
            <button
              onClick={handlePrintReceipt}
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
            >
              <FontAwesomeIcon icon={faPrint} className="mr-2" />
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
