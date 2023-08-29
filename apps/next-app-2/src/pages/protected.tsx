import ProtectedPage from "@/components/ProtectedPage";
import SignOutButton from "@/components/SignOutButton";

export default function Page() {
  return (
    <ProtectedPage>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col space-y-8">
          <h1 className="Hero">Protected</h1>
          <p>This is a protected page :)</p>
          <SignOutButton />
        </div>
      </div>
    </ProtectedPage>
  );
}
