import { SignIn, useUser } from "@clerk/clerk-react";

const Auth = () => {

  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-164px)] ">
      <SignIn />
    </div>
  );
};

export default Auth;
