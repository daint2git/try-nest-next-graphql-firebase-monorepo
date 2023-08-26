import { FormEvent, useCallback } from "react";

import { useSignInWithEmailAndPassword } from "@/hooks/auth/useSignInWithEmailAndPassword";
import Link from "next/link";

function EmailPasswordSignInForm() {
  const [signIn, { error, loading }] = useSignInWithEmailAndPassword();

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const email = data.get("email") as string;
      const password = data.get("password") as string;

      await signIn(email, password);
    },
    [signIn]
  );

  return (
    <form className={"w-full"} onSubmit={onSubmit}>
      <div className={"flex-col space-y-6"}>
        <input
          required
          placeholder="Your Email"
          name="email"
          type="email"
          className="input input-bordered w-full"
        />
        <input
          required
          placeholder="Your Password"
          name="password"
          type="password"
          className="input input-bordered w-full"
        />
        {error ? <span className="text-red-500">{error.message}</span> : null}
        <button
          type="submit"
          // disabled={loading}
          className="btn btn-success w-full"
        >
          Sign In
        </button>
        <Link href={"/sign-up"} className="link link-primary block">
          Sign Up
        </Link>
      </div>
    </form>
  );
}

export default EmailPasswordSignInForm;
