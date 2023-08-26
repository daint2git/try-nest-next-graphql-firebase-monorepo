import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "@/__generated__/graphql-types-and-hooks";
import PostForm from "@/components/PostForm";
import SignOutButton from "@/components/SignoutButton";
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
        <title>posts csr title</title>
      </Head>
      <main className={`flex min-h-screen flex-col p-24`}>
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
