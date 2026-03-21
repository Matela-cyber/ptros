export const getCarrierLiveTrackUrl = (deliveryId: string): string => {
  return `/live-track/${encodeURIComponent(deliveryId)}`;
};
