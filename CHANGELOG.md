# PTROS Platform - Change Log
April 29 to May 27, 2026

---

## May 27 - ETA Countdown System

We built an estimation time system so that carriers, customers, and coordinators can all see a live countdown to pickup or delivery.

When a delivery is created, we calculate how long it will take the assigned carrier to reach the pickup point and then the customer, and we save those two times directly on the delivery record in the database. We do the same calculation again when the coordinator auto-assigns a carrier. Then, every time a carrier accepts a job or their route gets reordered, we recalculate using the carrier's actual live GPS position so the estimate stays accurate.

Because we store the arrival time as a fixed clock time rather than a number of minutes, any screen can subtract the current time from it to get the countdown - no server calls needed.

We added the countdown to four screens: the carrier sees it on their current job screen, the customer sees it on their tracking page and on the map, and the coordinator sees it in the delivery detail panel. On the customer screens, the stored countdown is shown as a backup - if Google Maps has already calculated a live road-based ETA it uses that instead, since that is more accurate once the carrier is actually moving.

---

## May 27 - Maps and Tracking Overhaul

We reworked all four tracking maps to show the route as a line that fades from red at the start to green at the destination. This gives everyone a quick visual sense of how far along the delivery is.

We fixed the customer map where the markers for pickup location, dropoff location, and carrier position were not appearing. They now show correctly and move in real time.

We added a dialog on the carrier side for when they accept a new job while already having active ones. Before, the system would silently bundle the new job in. Now it asks the carrier whether they want to add it to their current route or swap it in.

We rebuilt the carrier live-track screen with the new gradient route and better automatic map zoom.

The coordinator delivery tracking map got a full rewrite. It now shows the gradient route, a side panel with the driver, ETA, how many stops remain, and the delivery priority. Shortcuts and blocked roads from the route network are drawn on the map. The coordinator can also see suggested reassignment candidates and submit a route report without leaving the map.

We also created a shared set of tracking utilities that all three apps use - things like working out whether a delivery is still on the way to pickup or already heading to the customer, formatting ETA text, and styling route network overlays.

---

## May 25 - Carrier Profile Screen

We built a profile screen for carriers so they can view and update their own information inside the app. It shows their name, phone number, vehicle type, and profile photo, and has a section for changing their password. It also shows a summary of their total deliveries and rating. We added it to the carrier sidebar so it is easy to find.

We also tidied up the route tab to show per-stop distances and estimated travel times more clearly.

---

## May 11 - Multi-Stop Route Management

This week was focused on giving carriers proper control over their route when they have multiple jobs at once.

We built the route tab screen. It shows all of the carrier's active stops in order - pickups and dropoffs together as a single list, each with the address, what the package is, and the distance from the previous stop. There is a button to reoptimise the order if the carrier wants a more efficient route, and a small map preview of the whole planned path.

We set up the route to be saved in the database as a linked list so the order is preserved properly. Every time the carrier accepts a job or reoptimises, the updated list is saved. At the same time we write a compact version of the route onto each delivery record so the tracking maps can show the planned path without having to load all the route stops separately.

We improved how the carrier GPS works. It now ignores readings that are less accurate than 50 metres, retries more sensibly if GPS is unavailable, and sends location updates to the database less frequently to reduce data usage.

We added picked-up and out-for-delivery as proper status steps, with OTP verification tied into the flow at the right point.

---

## May 2 - Route Data Foundation

We built the data structures the multi-stop route system depends on.

We created the first version of the route tab screen so carriers can see their stops listed in order with basic details for each one.

We built the algorithm that works out the best place to insert a new delivery into a carrier's existing route, using the insertion that adds the least extra distance. We also built the function that converts an ordered list of stops into the linked-list format we store in the database.

We added the Haversine formula for calculating straight-line distance between two GPS points, which is used throughout route ordering and ETA calculations.

We updated the data types to formally define what a route stop looks like and expanded the delivery type to include route information.

---

## April 29 - Route Network and Carrier Intelligence Foundation

We laid the groundwork for the intelligent route and carrier selection system.

We built a map management screen for carriers where they can draw route network segments directly on the map. They can mark shortcuts for faster paths, flag blocked segments like road closures, and identify governance-managed road sections that carry an extra cost.

On the coordinator side we introduced a scoring system for picking the best carrier for a delivery. It looks at ten factors including how far the carrier is from the pickup point, how many jobs they already have, whether their vehicle has capacity, how fresh their last GPS reading is, and whether their route would go through any penalised road segments. The carrier with the lowest penalty score gets the job if they are below the threshold and have capacity available.

We built the service that manages route network segments in the database, with a live subscription so all apps always have the current picture of which roads are open, blocked, or have restrictions.

We updated the database rules and added the necessary indexes for querying route network data efficiently.
