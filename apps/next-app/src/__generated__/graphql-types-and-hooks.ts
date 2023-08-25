import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type TCreatePostInput = {
  /** Example field (placeholder) */
  description: Scalars["String"]["input"];
  /** Example field (placeholder) */
  title: Scalars["String"]["input"];
};

export type TMutation = {
  __typename?: "Mutation";
  createPost: TPost;
  removePost: TPost;
  updatePost: TPost;
};

export type TMutationCreatePostArgs = {
  createPostInput: TCreatePostInput;
};

export type TMutationRemovePostArgs = {
  id: Scalars["String"]["input"];
};

export type TMutationUpdatePostArgs = {
  updatePostInput: TUpdatePostInput;
};

export type TPost = {
  __typename?: "Post";
  /** Description */
  description: Scalars["String"]["output"];
  /** Title */
  id: Scalars["String"]["output"];
  /** Title */
  title: Scalars["String"]["output"];
};

export type TQuery = {
  __typename?: "Query";
  post: TPost;
  posts: Array<TPost>;
};

export type TQueryPostArgs = {
  id: Scalars["String"]["input"];
};

export type TUpdatePostInput = {
  /** Example field (placeholder) */
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  /** Example field (placeholder) */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TCreatePostMutationVariables = Exact<{
  createPostInput: TCreatePostInput;
}>;

export type TCreatePostMutation = {
  __typename?: "Mutation";
  createPost: {
    __typename?: "Post";
    id: string;
    title: string;
    description: string;
  };
};

export type TGetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type TGetPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    title: string;
    description: string;
  }>;
};

export const CreatePostDocument = gql`
  mutation CreatePost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      id
      title
      description
    }
  }
`;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      createPostInput: // value for 'createPostInput'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TCreatePostMutation,
    TCreatePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TCreatePostMutation, TCreatePostMutationVariables>(
    CreatePostDocument,
    options,
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      id
      title
      description
    }
  }
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TGetPostsQuery,
    TGetPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TGetPostsQuery, TGetPostsQueryVariables>(
    GetPostsDocument,
    options,
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TGetPostsQuery,
    TGetPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TGetPostsQuery, TGetPostsQueryVariables>(
    GetPostsDocument,
    options,
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
