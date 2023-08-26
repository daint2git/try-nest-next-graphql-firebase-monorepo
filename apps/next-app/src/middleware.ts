import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get("session");

  // Return to /sign-in if don't have a session
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // verify session
  const response = await fetch(new URL("/api/auth/verify-session", req.url), {
    method: "POST",
    headers: {
      Cookie: `session=${sessionCookie?.value}`,
    },
  });

  // Return to /sign-in if token is not authorized
  if (!response.ok) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Add your protected routes
export const config = {
  matcher: ["/posts-ssr", "/posts-csr"],
};
