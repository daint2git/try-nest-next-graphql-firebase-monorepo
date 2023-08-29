import isDevelopment from "@/utils/isDevelopment";
import isEqual from "@/utils/isEqual";
import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import type { NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import deepmerge from "deepmerge";
import { useMemo } from "react";

interface MyApolloClient extends ApolloClient<NormalizedCacheObject> {}

interface MyApolloStateProps {
  [APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject;
}

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: MyApolloClient;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (isDevelopment()) {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      }
    });
  if (networkError) {
    if (isDevelopment()) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URI, // Server URL (must be absolute)
  credentials: "include", // Additional fetch() options like `credentials` or `headers`
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: isDevelopment(),
  });
}

export function initializeApollo({
  initialState,
}: {
  initialState?: NormalizedCacheObject;
} = {}) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = deepmerge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return _apolloClient;
  }
  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export function addApolloState(
  client: MyApolloClient,
  pageProps: { props: MyApolloStateProps }
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: MyApolloStateProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const apolloClient = useMemo(
    () => initializeApollo({ initialState: state }),
    [state]
  );

  return apolloClient;
}
