import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apollo-client";
import { roboto } from "@/styles/fonts";
import {
  connectFirebaseClientEmulator,
  initFirebaseClient,
} from "@/lib/firebase/firebaseClient";
import { FirebaseAuthProvider } from "@/lib/firebase/context";

initFirebaseClient();
connectFirebaseClientEmulator();

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={apolloClient}>
        <FirebaseAuthProvider>
          <Component {...pageProps} />
        </FirebaseAuthProvider>
      </ApolloProvider>
    </>
  );
}
