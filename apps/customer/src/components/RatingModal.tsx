// apps/customer/src/components/RatingModal.tsx
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  submitDeliveryRating,
  getDeliveryRating,
  DeliveryRating,
} from "../services/ratingService";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  deliveryId: string;
  carrierId: string;
  carrierName: string;
  onRatingSubmitted?: (rating: DeliveryRating) => void;
}

export const RatingModal = ({
  isOpen,
  onClose,
  deliveryId,
  carrierId,
  carrierName,
  onRatingSubmitted,
}: RatingModalProps) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [existingRating, setExistingRating] = useState<DeliveryRating | null>(
    null,
  );
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Load existing rating if any
      const loadExistingRating = async () => {
        const existing = await getDeliveryRating(deliveryId);
        if (existing) {
          setExistingRating(existing);
          setRating(existing.rating);
          setComment(existing.comment || "");
        }
      };
      loadExistingRating();
    }
  }, [isOpen, deliveryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setLoading(true);
    try {
      await submitDeliveryRating(deliveryId, carrierId, carrierName, rating, comment);
      toast.success(`Thank you! You rated ${carrierName} ${rating} stars`);

      if (onRatingSubmitted) {
        onRatingSubmitted({
          deliveryId,
          customerId: "",
          customerEmail: "",
          carrierId,
          carrierName,
          rating,
          comment,
        });
      }

      setRating(0);
      setComment("");
      onClose();
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error("Failed to submit rating. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {existingRating ? "Update Rating" : "Rate Delivery"}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition"
          >
            ×
          </button>
        </div>

        {/* Carrier Name */}
        <p className="text-sm text-gray-600 mb-6">
          How was your experience with <span className="font-semibold">{carrierName}</span>?
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <span
                  className={`text-4xl ${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              </button>
            ))}
          </div>

          {/* Rating Label */}
          {rating > 0 && (
            <div className="text-center text-sm font-medium text-gray-700">
              {rating === 5 && "Excellent! 😊"}
              {rating === 4 && "Very good! 👍"}
              {rating === 3 && "Good 👌"}
              {rating === 2 && "Fair 😐"}
              {rating === 1 && "Poor 😞"}
            </div>
          )}

          {/* Comment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments (Optional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience with this delivery..."
              maxLength={500}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">
              {comment.length}/500 characters
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || rating === 0}
            >
              {loading ? "Submitting..." : existingRating ? "Update Rating" : "Submit Rating"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
