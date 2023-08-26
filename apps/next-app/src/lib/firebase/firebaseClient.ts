import { getApp, getApps, initializeApp } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";
import log from "./log";
import { getAuth } from "firebase/auth";
import type { User } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

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

/**
 * Get Firebase auth client
 *
 * @returns
 */
export function getFirebaseAuthClient() {
  const app = initFirebaseClient();
  return getAuth(app);
}

/**
 * Hook that return Auth instance
 *
 * @returns
 */
export function useAuthClient() {
  return useMemo(() => getFirebaseAuthClient(), []);
}

// export function useAuthClient() {
//   const auth = useMemo(() => getFirebaseAuthClient(), []);
//   const [state, setState] = useState<{
//     user: User | null;
//     error: Error | null;
//   }>({
//     user: auth.currentUser,
//     error: null,
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(
//       (user) => {
//         setState({
//           user,
//           error: null,
//         });
//       },
//       (error) => {
//         setState({
//           user: null,
//           error,
//         });
//       }
//     );

//     return unsubscribe;
//   }, [auth]);

//   return state;
// }
