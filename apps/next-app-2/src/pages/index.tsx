import { inter } from "@/styles/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <Link href="/sign-in">sign in</Link>
      <Link href="/sign-up">sign up</Link>
      <Link href="/protected">protected</Link>
      <Link href="/posts-ssr">posts ssr</Link>
      <Link href="/posts-csr">posts csr</Link>
    </main>
  );
}
