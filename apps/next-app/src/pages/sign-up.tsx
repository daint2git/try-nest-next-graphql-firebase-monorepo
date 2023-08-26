import EmailPasswordSignUpForm from "@/components/EmailPasswordSignUpForm";

export default function Page() {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12">
      <div>
        <h1 className="Hero">Sign Up</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <EmailPasswordSignUpForm />
      </div>
    </div>
  );
}
