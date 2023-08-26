import { FormEvent, useCallback } from "react";

import { useSignUpWithEmailAndPassword } from "@/hooks/auth/useSignUpWithEmailAndPassword";

function EmailPasswordSignUpForm() {
  const [signUp, { error, loading }] = useSignUpWithEmailAndPassword();

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const email = data.get("email") as string;
      const password = data.get("password") as string;

      await signUp(email, password);
    },
    [signUp]
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
          disabled={loading}
          className="btn btn-success w-full"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default EmailPasswordSignUpForm;
