import { useFirebaseAuth } from "@/lib/firebase/context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export function useSignInWithEmailAndPassword() {
  const router = useRouter();
  const auth = useFirebaseAuth();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!auth) return;

      setIsLoading(true);

      try {
        const credential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // console.log({ credential });

        router.push("/posts-ssr");
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [auth, router]
  );

  return [
    signIn,
    {
      error,
      isLoading,
    },
  ] as [
    typeof signIn,
    {
      error: Error | null;
      isLoading: boolean;
    },
  ];
}
