import { useFirebaseAuth } from "@/lib/firebase/context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export function useSignUpWithEmailAndPassword() {
  const router = useRouter();
  const auth = useFirebaseAuth();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = useCallback(
    async (email: string, password: string) => {
      if (!auth) return;

      setIsLoading(true);

      try {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // console.log({ credential });

        router.push("/posts-csr");
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
    signUp,
    {
      error,
      isLoading,
    },
  ] as [
    typeof signUp,
    {
      error: Error | null;
      isLoading: boolean;
    },
  ];
}
