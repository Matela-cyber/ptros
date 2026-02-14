import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",
  authDomain: "ptros-lesotho-d145d.firebaseapp.com",
  databaseURL: "https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",
  projectId: "ptros-lesotho-d145d",
  storageBucket: "ptros-lesotho-d145d.firebasestorage.app",
  messagingSenderId: "355339066230",
  appId: "1:355339066230:web:fca735feb941dbd8e57857",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const realtimeDb = getDatabase(app)

export default app