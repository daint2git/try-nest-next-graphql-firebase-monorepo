import {
  GetPostsDocument,
  useCreatePostMutation,
  useGetPostsQuery,
} from "@/__generated__/graphql-types-and-hooks";
import Navbar from "@/components/Navbar";
import PostForm from "@/components/PostForm";
import SignOutButton from "@/components/SignOutButton";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import type { GetServerSideProps } from "next";
import Head from "next/head";

export default function Page() {
  const { data, loading, error, refetch } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handlePostCreate = async (data: {
    title: string;
    description: string;
  }) => {
    await createPost({
      variables: {
        createPostInput: data,
      },
    });

    refetch();
  };

  return (
    <>
      <Head>
        <title>posts ssr title</title>
      </Head>
      <main className={`flex min-h-screen flex-col p-24`}>
        <Navbar />
        <SignOutButton />
        <PostForm onSubmit={handlePostCreate} />
        <ul className="flex flex-col gap-2 max-w-[300px] mt-10">
          {data?.posts.map((post) => (
            <li
              key={post.id}
              className="border-2 bg-zinc-400 p-4 text-white flex flex-col min-w-[200px]"
            >
              <span className="font-bold">{post.title}</span>
              <span className="italic">{post.description}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context.req.cookies", context.req.cookies);

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetPostsDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};
