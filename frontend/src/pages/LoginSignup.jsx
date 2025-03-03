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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">{isSignUp ? "Create Your Account" : "Sign In"}</h2>
        <p className="text-center text-gray-600 mb-4">
          {isSignUp ? "Join SnipScript.ai today!" : "Welcome back! Please sign in."}
        </p>

        {/* Social Login */}
        <div className="flex justify-center gap-4 mb-4">
          <Button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3">
            <FaGithub className="text-xl" /> GitHub
          </Button>
          <Button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3">
            <FaGoogle className="text-xl text-red-500" /> Google
          </Button>
        </div>

        <div className="relative text-center text-gray-500 my-3">or</div>

        {/* Email & Password Fields */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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

        <div className="mb-4 relative">
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
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <Button className="w-full bg-black text-white py-3" onClick={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        <p className="text-center text-sm mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="text-blue-600 font-semibold" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>

        <p className="text-xs text-center text-gray-500 mt-3">
          By signing up, you agree to our <a href="#" className="text-blue-500">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
}
