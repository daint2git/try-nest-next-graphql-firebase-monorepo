import { useAuthClient } from "@/lib/firebase/authClient";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export function useSignOut() {
  const router = useRouter();
  const auth = useAuthClient();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signOut = useCallback(async () => {
    try {
      await auth.signOut();

      const response = await fetch("/api/auth/remove-session", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/sign-in");
      }
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
