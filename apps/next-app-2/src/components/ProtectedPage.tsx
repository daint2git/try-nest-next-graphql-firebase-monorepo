import { useFirebaseAuth } from "@/lib/firebase/context";
import { ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import getErrorMessage from "@/utils/getErrorMessage";
import isNull from "@/utils/isNull";

type Props = {
  children: ReactNode;
};

export default function ProtectedPage({ children }: Props) {
  const auth = useFirebaseAuth();
  const [isVerifying, setIsVerifying] = useState(isNull(auth?.currentUser));

  useEffect(() => {
    if (!auth) {
      return;
    }

    // keep this running for the whole session
    // unless the component was unmounted, for example, on log-outs
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log({ user });

      if (user) {
        try {
          const token = await user.getIdToken();
          console.log({ token });

          setIsVerifying(false);
        } catch (error) {
          console.log(getErrorMessage(error));

          await Router.push("/sign-in");

          setIsVerifying(true);
        }
      } else {
        // unauthorized
        Router.push("/sign-in");
      }
    });

    // unsubscribe on un-mount
    return () => {
      unsubscribe();
    };
  }, [auth]);

  if (isVerifying) {
    return <div>Verifying...</div>;
  }

  return children;
}
