#!/usr/bin/env node
// Test write to RTDB using Admin SDK (CommonJS)
// Usage:
// 1) Place service account JSON at ./serviceAccountKey.json or set GOOGLE_APPLICATION_CREDENTIALS env var
// 2) node scripts/test-rtdb-write.cjs

const fs = require('fs')
const path = require('path')
const admin = require('firebase-admin')

const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.resolve(process.cwd(), 'serviceAccountKey.json')
if (!fs.existsSync(serviceAccountPath)) {
  console.error('Service account JSON not found at', serviceAccountPath)
  process.exit(1)
}

const serviceAccount = require(serviceAccountPath)

const databaseURL = process.env.FIREBASE_DATABASE_URL || 'https://ptros-lesotho-d145d-default-rtdb.firebaseio.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL
})

const db = admin.database()

;(async () => {
  try {
    const now = Date.now()
    const ref = db.ref('tracks/test_write')
    await ref.set({ lat: -29.31, lng: 27.48, timestamp: now, test: true })
    console.log('RTDB write succeeded to /tracks/test_write')
    process.exit(0)
  } catch (err) {
    console.error('RTDB write failed:', err)
    process.exit(2)
  }
})()
