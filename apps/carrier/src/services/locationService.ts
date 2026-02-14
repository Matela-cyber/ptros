import { getDatabase, ref, set, remove } from "firebase/database";
import { auth } from "@config";

export class LocationService {
	private static db = getDatabase();

	// Push carrier location to RTDB (call every 5-20 seconds)
	static async updateCarrierLocation(
		deliveryId: string,
		latitude: number,
		longitude: number,
		accuracy?: number
	): Promise<boolean> {
		try {
			const user = auth.currentUser;
			if (!user) return false;

			const locationRef = ref(
				this.db,
				`locations/active/${user.uid}/${deliveryId}`
			);

			await set(locationRef, {
				deliveryId,
				carrierId: user.uid,
				lat: latitude,
				lng: longitude,
				accuracy: accuracy || null,
				timestamp: Date.now(),
				carrierName: user.displayName || "Unknown",
				carrierEmail: user.email,
			});

			return true;
		} catch (error) {
			console.error("Error updating carrier location:", error);
			return false;
		}
	}

	// Clear location when delivery completes
	static async clearCarrierLocation(deliveryId: string): Promise<boolean> {
		try {
			const user = auth.currentUser;
			if (!user) return false;

			const locationRef = ref(
				this.db,
				`locations/active/${user.uid}/${deliveryId}`
			);

			await remove(locationRef);
			return true;
		} catch (error) {
			console.error("Error clearing carrier location:", error);
			return false;
		}
	}

	// Get RTDB reference for a specific delivery's location
	static getLocationRef(carrierId: string, deliveryId: string) {
		return ref(this.db, `locations/active/${carrierId}/${deliveryId}`);
	}
}
