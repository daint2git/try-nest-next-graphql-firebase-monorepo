import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useMemo } from "react";

/**
 * Returns default Firebase auth client
 *
 * @returns
 */
export function getAuthClient() {
  return getAuth(getApp());
}

/**
 * Hook that return Auth instance
 *
 * @returns
 */
export function useAuthClient() {
  return useMemo(() => getAuthClient(), []);
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
