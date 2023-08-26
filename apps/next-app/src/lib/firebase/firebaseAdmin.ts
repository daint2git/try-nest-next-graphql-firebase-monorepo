import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import type { AppOptions } from "firebase-admin/app";
import log from "./log";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig: AppOptions = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

export function initFirebaseAdmin() {
  if (getApps().length > 0) {
    log(
      "Did not initialize the Firebase admin SDK because an app already exists."
    );

    return getApp();
  }

  // Initialize Firebase
  const app = initializeApp(firebaseAdminConfig);

  log("Initialized the Firebase admin SDK.");

  return app;
}

export function getFirebaseAuthAdmin() {
  const app = initFirebaseAdmin();
  return getAuth(app);
}
