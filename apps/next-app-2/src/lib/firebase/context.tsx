import { getApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { ReactNode, createContext, useContext, useMemo } from "react";

export const FirebaseAuthContext = createContext<Auth | undefined>(undefined);

type FirebaseAuthProviderProps = {
  children: ReactNode;
};

export function FirebaseAuthProvider({ children }: FirebaseAuthProviderProps) {
  const auth = useMemo(() => getAuth(getApp()), []);

  return (
    <FirebaseAuthContext.Provider value={auth}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

export function useFirebaseAuth() {
  return useContext(FirebaseAuthContext);
}
