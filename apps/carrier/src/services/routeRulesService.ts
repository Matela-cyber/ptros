// src/services/routeRulesService.ts
import { db } from "@config";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// --- Types ---
export interface BlockedRoute {
  fromNodeId: string;
  toNodeId: string;
  reason: string;
  reportedBy: string;
  timestamp: number;
}

export interface ObstacleRoute {
  fromNodeId: string;
  toNodeId: string;
  obstacleType: string;
  severity: number;
  reportedBy: string;
  timestamp: number;
}

export interface Shortcut {
  fromNodeId: string;
  toNodeId: string;
  description: string;
  addedBy: string;
  timestamp: number;
}

// --- Blocked Routes ---
export async function addBlockedRoute(route: BlockedRoute) {
  await setDoc(
    doc(db, "blockedRoutes", `${route.fromNodeId}_${route.toNodeId}`),
    route,
  );
}

export async function getBlockedRoute(fromNodeId: string, toNodeId: string) {
  const snap = await getDoc(
    doc(db, "blockedRoutes", `${fromNodeId}_${toNodeId}`),
  );
  return snap.exists() ? (snap.data() as BlockedRoute) : null;
}

export async function getAllBlockedRoutes(): Promise<BlockedRoute[]> {
  const snap = await getDocs(collection(db, "blockedRoutes"));
  return snap.docs.map((doc) => doc.data() as BlockedRoute);
}

export async function updateBlockedRoute(
  fromNodeId: string,
  toNodeId: string,
  updates: Partial<BlockedRoute>,
) {
  await updateDoc(
    doc(db, "blockedRoutes", `${fromNodeId}_${toNodeId}`),
    updates,
  );
}

export async function removeBlockedRoute(fromNodeId: string, toNodeId: string) {
  await deleteDoc(doc(db, "blockedRoutes", `${fromNodeId}_${toNodeId}`));
}

// --- Obstacle Routes ---
export async function addObstacleRoute(route: ObstacleRoute) {
  await setDoc(
    doc(db, "obstacleRoutes", `${route.fromNodeId}_${route.toNodeId}`),
    route,
  );
}

export async function getObstacleRoute(fromNodeId: string, toNodeId: string) {
  const snap = await getDoc(
    doc(db, "obstacleRoutes", `${fromNodeId}_${toNodeId}`),
  );
  return snap.exists() ? (snap.data() as ObstacleRoute) : null;
}

export async function getAllObstacleRoutes(): Promise<ObstacleRoute[]> {
  const snap = await getDocs(collection(db, "obstacleRoutes"));
  return snap.docs.map((doc) => doc.data() as ObstacleRoute);
}

export async function updateObstacleRoute(
  fromNodeId: string,
  toNodeId: string,
  updates: Partial<ObstacleRoute>,
) {
  await updateDoc(
    doc(db, "obstacleRoutes", `${fromNodeId}_${toNodeId}`),
    updates,
  );
}

export async function removeObstacleRoute(
  fromNodeId: string,
  toNodeId: string,
) {
  await deleteDoc(doc(db, "obstacleRoutes", `${fromNodeId}_${toNodeId}`));
}

// --- Shortcuts ---
export async function addShortcut(shortcut: Shortcut) {
  await setDoc(
    doc(db, "shortcuts", `${shortcut.fromNodeId}_${shortcut.toNodeId}`),
    shortcut,
  );
}

export async function getShortcut(fromNodeId: string, toNodeId: string) {
  const snap = await getDoc(doc(db, "shortcuts", `${fromNodeId}_${toNodeId}`));
  return snap.exists() ? (snap.data() as Shortcut) : null;
}

export async function getAllShortcuts(): Promise<Shortcut[]> {
  const snap = await getDocs(collection(db, "shortcuts"));
  return snap.docs.map((doc) => doc.data() as Shortcut);
}

export async function updateShortcut(
  fromNodeId: string,
  toNodeId: string,
  updates: Partial<Shortcut>,
) {
  await updateDoc(doc(db, "shortcuts", `${fromNodeId}_${toNodeId}`), updates);
}

export async function removeShortcut(fromNodeId: string, toNodeId: string) {
  await deleteDoc(doc(db, "shortcuts", `${fromNodeId}_${toNodeId}`));
}
