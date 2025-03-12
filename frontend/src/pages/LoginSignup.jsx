import React, { useState } from "react";
import  Button  from "../components/ui/Button";
import  Input  from "../components/ui/Input";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Function to handle authentication
  const handleAuth = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError(""); // Clear errors on success
    alert(`${isSignUp ? "Registered" : "Logged in"} successfully!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 text-gray-900 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">
          {isSignUp ? "Create Your Account" : "Sign In"}
        </h2>
        <p className="mb-4 text-center text-gray-600">
          {isSignUp
            ? "Join SnipScript.ai today!"
            : "Welcome back! Please sign in."}
        </p>

        {/* Social Login */}
        <div className="flex justify-center gap-4 mb-4">
          <Button className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-200">
            <FaGithub className="text-xl" /> GitHub
          </Button>
          <Button className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-200">
            <FaGoogle className="text-xl text-red-500" /> Google
          </Button>
        </div>

        <div className="relative my-3 text-center text-gray-500">or</div>

        {/* Email & Password Fields */}
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
        <div className="mb-3">
          <label className="text-sm font-semibold">Email Address</label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg"
          />
        </div>

        <div className="relative mb-4">
          <label className="text-sm font-semibold">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-lg"
            />
            <button
              type="button"
              className="absolute text-gray-500 right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <Button
          className="w-full py-3 text-white bg-black"
          onClick={handleAuth}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        <p className="mt-4 text-sm text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="font-semibold text-blue-600"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>

        <p className="mt-3 text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
}
