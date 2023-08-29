import { useFirebaseAuth } from "@/lib/firebase/context";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export function useSignOut() {
  const router = useRouter();
  const auth = useFirebaseAuth();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signOut = useCallback(async () => {
    if (!auth) return;

    try {
      await auth.signOut();

      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [auth, router]);

  return [
    signOut,
    {
      error,
      isLoading,
    },
  ] as [
    typeof signOut,
    {
      error: Error | null;
      isLoading: boolean;
    },
  ];
}
