# Map Visualization & Optimization Reasoning - Implementation Guide

## Overview

This document describes the enhanced map visualization system with color-coded paths, map legends, and optimization reasoning tracking implemented across the platform.

## Key Features

### 1. Color-Coded Path Visualization

#### Coordinator View (`DeliveryTrackingMap.tsx`)

The coordinator sees comprehensive path information for detailed delivery tracking:

- **Yellow Path (Low Opacity 0.4)**: Carrier current location → Pickup location
  - Shows expected path carrier will take to reach pickup
  - Only visible when status is `assigned` or `accepted` (before pickup)
  - Uses Google Maps Directions API for accurate routing

- **Orange Path (Low Opacity 0.4)**: Pickup location → Delivery location
  - Shows expected delivery route from pickup to final destination
  - Visible for all active deliveries (`assigned`, `accepted`, `picked_up`)
  - Helps coordinators understand full delivery trajectory

- **Blue Path (Full Opacity)**: Active live tracking route
  - Real-time path from `routeHistory.activePolyline`
  - Shows where carrier has actually traveled
  - Highest priority visual (thickest line, full opacity)

- **Amber Dotted Path**: Planned/calculated route
  - Original route from `route.polyline`
  - Helps compare planned vs actual routes
  - Useful for route deviation analysis

- **Multi-color Snapshot Segments**: Historical route snapshots
  - Each snapshot gets a distinct color from `ROUTE_COLORS` array
  - Allows replay of route history segment by segment
  - Useful for post-delivery analysis

#### Customer View (`TrackingMap.tsx`)

Customer sees simplified tracking focused on delivery progress:

- Current carrier location (green marker)
- Expected delivery route
- Pickup and delivery markers
- Simple legend with essential information

### 2. Map Legend Component

#### Location

- `apps/coordinator/src/components/MapLegend.tsx`
- `apps/customer/src/components/MapLegend.tsx`

#### Features

- Floating legend in top-right corner
- Scrollable for long legend items
- Shows color, opacity, label, and description
- Automatically generated based on visible routes

#### Usage Example

```typescript
<MapLegend
  title="Route Legend"
  items={[
    {
      color: "#fbbf24",
      opacity: 0.4,
      label: "Carrier → Pickup",
      description: "Expected path from carrier to pickup location",
    },
    // ... more items
  ]}
/>
```

### 3. Optimization Reasoning

#### Purpose

Tracks and displays **why** specific carriers were chosen and **how** routes were optimized, ensuring transparency and enabling continuous improvement.

#### Data Structure (`OptimizationReason`)

```typescript
interface OptimizationReason {
  type: "carrier_assignment" | "route_optimization" | "reassignment";
  reason: string;
  timestamp: Timestamp;
  carrierId?: string;
  carrierName?: string;
  details?: {
    distanceKm?: number;
    estimatedDetourKm?: number;
    carrierStatus?: string;
    activeDeliveries?: number;
    score?: number;
    factors?: string[];
  };
}
```

#### Storage Location

Stored in Firestore `deliveries` collection:

```javascript
{
  // ... other delivery fields
  optimizationReasons: [
    {
      type: "carrier_assignment",
      reason:
        "Auto-assigned to John Doe (Top recommendation): 2.3km from pickup • available now • 1 active deliveries",
      timestamp: Timestamp,
      carrierId: "user123",
      carrierName: "John Doe",
      details: {
        distanceKm: 2.3,
        estimatedDetourKm: 0.0,
        carrierStatus: "active",
        activeDeliveries: 1,
        score: 5.29,
        factors: [
          "2.3km from pickup",
          "Status: active",
          "1 active deliveries",
          "No significant detour",
        ],
      },
    },
  ];
}
```

#### Display Component

- Location: `apps/coordinator/src/components/OptimizationReasonDisplay.tsx`
- Shows optimization history with color-coded cards
- Displays detailed factors and metrics
- Includes timestamps for audit trail

#### When Optimization Reasons are Created

1. **Carrier Assignment (on delivery creation)**
   - Auto-assigned: Includes top recommendation details
   - Manual assignment: Notes coordinator override
   - Stored in `CreateDelivery.tsx` during `handleSubmit`

2. **Route Optimization** (future enhancement)
   - When route is recalculated due to traffic
   - When alternative route is chosen
   - When delivery sequence is reordered

3. **Reassignment** (existing feature)
   - When carrier is changed mid-delivery
   - Stored in `DeliveryTrackingMap.tsx` during `reassignToRecommendedCarrier`

### 4. Carrier Recommendation Algorithm

#### Scoring System

Lower score = better match (penalty-based system)

**Penalty Components:**

- **Distance Penalty**: `distanceToPickupKm × 2.3`
- **Availability Penalty**:
  - Active: 0
  - Busy: 12
  - Other: 25
- **Workload Penalty**: `activeDeliveryCount × 14`
- **Direction Penalty**: `estimatedDetourKm × 2.8`
- **Capacity Penalty**: 999 if package exceeds vehicle capacity, else 0

#### Total Score Formula

```
score = distancePenalty + availabilityPenalty + workloadPenalty + directionPenalty + capacityPenalty
```

#### Auto-Assignment Criteria

Carrier is auto-assignable if:

- Package weight ≤ vehicle capacity
- AND (carrier status is `active` OR (status is `busy` AND detour ≤ 4km))

## Data Model Updates

### Delivery Document Schema (Firestore)

```typescript
interface Delivery {
  // ... existing fields

  // New fields for visualization
  pickupLocation?: {
    lat: number;
    lng: number;
    address: string;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
    address: string;
  };

  // New field for optimization tracking
  optimizationReasons?: OptimizationReason[];

  // Enhanced field
  priority?: "urgent" | "standard" | "low";
}
```

### Carrier Recommendation Telemetry (Existing)

Already stored in `carrierRecommendations` array for analytics.

## Implementation Files Changed

### New Files Created

1. `apps/coordinator/src/components/MapLegend.tsx`
2. `apps/coordinator/src/components/OptimizationReasonDisplay.tsx`
3. `apps/customer/src/components/MapLegend.tsx`

### Modified Files

1. `apps/coordinator/src/DeliveryTrackingMap.tsx`
   - Added color-coded path rendering
   - Integrated MapLegend component
   - Integrated OptimizationReasonDisplay component
   - Added pickup/delivery location markers
   - Added Google Directions API integration for expected paths

2. `apps/coordinator/src/CreateDelivery.tsx`
   - Added `optimizationReasons` field to delivery creation
   - Stores carrier assignment reasoning with full context
   - Captures recommendation details for transparency

## User Experience Flow

### Coordinator Creating Delivery

1. Enters pickup and delivery addresses
2. System geocodes and displays recommendations
3. Top 5 carriers shown with optimization scores
4. Coordinator can:
   - Accept top recommendation (auto-assign)
   - Choose different carrier from list
   - Skip assignment for later
5. Assignment reason is automatically captured

### Coordinator Viewing Delivery Map

1. Opens delivery tracking map
2. Sees color-coded paths:
   - Yellow: Where carrier needs to go first (to pickup)
   - Orange: Where delivery will go after pickup
   - Blue: Where carrier has actually been
3. Reviews map legend to understand all paths
4. Scrolls down to see optimization reasoning
5. Can see exact factors that led to carrier selection

### Customer Tracking Delivery

1. Opens tracking page
2. Sees simplified map with:
   - Current carrier location
   - Expected route to their address
   - Pickup and delivery markers
3. Legend shows basic path meanings
4. No optimization details (internal info)

## Performance Considerations

### Google Maps API Calls

- Directions API called when:
  - Delivery status changes
  - Carrier location updates significantly
  - Component mounts with active delivery
- Cached for efficiency (useEffect dependencies)

### Firestore Reads

- Single document read per delivery (includes optimization reasons)
- Real-time updates via onSnapshot
- Subcollection query for route snapshots (pagination possible)

### Rendering Optimization

- useMemo for route segment calculations
- Conditional rendering (only show paths when data available)
- Lazy loading of map legend

## Security & Privacy

### Firestore Rules Update Required

Add to `firestore.rules`:

```javascript
match /deliveries/{deliveryId} {
  allow update: if request.auth != null
    && request.resource.data.keys().hasAny([
      'optimizationReasons',
      'pickupLocation',
      'deliveryLocation'
    ]);
}
```

### Data Access

- **Coordinators**: See all optimization details
- **Carriers**: See assigned deliveries, not optimization reasoning
- **Customers**: See basic tracking, no internal optimization data

## Future Enhancements

### Suggested Improvements

1. **Multi-Delivery Route Visualization**
   - Show all deliveries for one carrier on one map
   - Color-code by priority (urgent = red, standard = orange, low = green)
   - Display delivery sequence numbers

2. **Real-Time Route Optimization**
   - Monitor traffic conditions
   - Suggest route adjustments
   - Log reason for route changes

3. **Historical Analytics**
   - Compare planned vs actual routes
   - Calculate route efficiency scores
   - Identify frequently deviated segments

4. **Carrier Performance Metrics**
   - Track on-time delivery rate
   - Monitor route adherence
   - Correlate with optimization decisions

## Testing Checklist

- [ ] Coordinator can see all color-coded paths on tracking map
- [ ] Map legend displays correctly with all route types
- [ ] Optimization reasons appear on delivery details
- [ ] Auto-assignment creates proper optimization reason
- [ ] Manual assignment creates proper optimization reason
- [ ] Customer sees simplified tracking (no internal data)
- [ ] Carrier assignment scoring works correctly
- [ ] Google Directions API paths render properly
- [ ] Map legend is readable and scrollable
- [ ] Markers appear for pickup and delivery locations
- [ ] Paths update when delivery status changes

## Support & Maintenance

### Common Issues

1. **Paths Not Showing**: Check that `pickupLocation` and `deliveryLocation` are set in Firestore
2. **Legend Not Visible**: Verify map container has `position: relative`
3. **Optimization Reasons Empty**: Ensure delivery was created after this update

### Debug Mode

Add to component for debugging:

```typescript
console.log("Carrier Location:", carrierLocation);
console.log("Pickup Location:", delivery?.pickupLocation);
console.log("Delivery Location:", delivery?.deliveryLocation);
console.log("Optimization Reasons:", delivery?.optimizationReasons);
```

## Conclusion

This implementation provides comprehensive visibility into delivery routes and carrier selection, enabling better decision-making, transparency, and continuous optimization of the delivery platform.
