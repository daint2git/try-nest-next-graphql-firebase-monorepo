import isBrowser from "@/utils/isBrowser";
import isProduction from "@/utils/isProduction";
import type { FirebaseOptions } from "firebase/app";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  indexedDBLocalPersistence,
  initializeAuth,
} from "firebase/auth";
import log from "./log";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * Connect Firebase emulator in client environment
 *
 * @returns
 */
export function connectFirebaseClientEmulator() {
  // Cannot be used in production mode
  if (isProduction()) {
    return;
  }

  // // Cannot be used in server environment
  if (!isBrowser()) {
    return;
  }

  const firebaseAuthEmulatorHost =
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST;

  // missing environment variable
  if (!firebaseAuthEmulatorHost) {
    return;
  }

  const auth = initializeAuth(getApp(), {
    persistence: indexedDBLocalPersistence,
  });

  // prevent emulator from being
  // called multiple times on page navigation
  if (!("emulator" in auth.config)) {
    connectAuthEmulator(auth, `http://${firebaseAuthEmulatorHost}`);
  }
}

/**
 * Get Firebase client
 *
 * @returns
 */
export function initFirebaseClient() {
  if (getApps().length > 0) {
    log(
      "Did not initialize the Firebase JS SDK because an app already exists."
    );

    return getApp();
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  log("Initialized the Firebase JS SDK.");

  return app;
}
