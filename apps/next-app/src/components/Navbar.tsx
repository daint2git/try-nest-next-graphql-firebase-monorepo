import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/posts-ssr" className="link link-primary block">
        posts ssr
      </Link>
      <Link href="/posts-csr" className="link link-primary block">
        posts csr
      </Link>
    </nav>
  );
}

export default Navbar;
