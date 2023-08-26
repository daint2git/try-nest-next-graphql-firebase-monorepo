import { useAuthClient } from "@/lib/firebase/firebaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export function useSignUpWithEmailAndPassword() {
  const router = useRouter();
  const auth = useAuthClient();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const signUp = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      try {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log({ credential });

        const idToken = await credential.user.getIdToken();

        const response = await fetch("/api/auth/set-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken,
          }),
        });

        if (response.ok) {
          router.push("/posts-csr");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    },
    [auth, router]
  );

  return [
    signUp,
    {
      error,
      loading,
    },
  ] as [
    typeof signUp,
    {
      error: Error | null;
      loading: boolean;
    },
  ];
}
