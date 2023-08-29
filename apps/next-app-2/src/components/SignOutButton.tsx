import { useSignOut } from "@/hooks/auth/useSignOut";

function SignOutButton() {
  const [signOut] = useSignOut();

  return (
    <button className="btn btn-success" onClick={signOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
