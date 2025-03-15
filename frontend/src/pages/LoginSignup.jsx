import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  auth,
  googleProvider,
  signInWithPopup,
  githubProvider,
} from "../firebase/firebase";
import { loginUser, registerUser } from "../frontendApp";
import toast, { Toaster } from "react-hot-toast";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await loginUser(email, password);
      Cookies.set("accessToken", response?.access, { expires: 1 / 24 });
      Cookies.set("refreshToken", response?.refresh);
      setError("");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error?.status === 401) {
        return toast.error(error?.response?.data?.detail);
      }
      toast.error(`Something went wrong! Try later.`);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await registerUser(email, password);
      toast.success("Sign up successfully");
      setEmail("");
      setPassword("");
      setError("");
      setIsSignUp(false);
      Cookies.set("accessToken", response?.access, { expires: 1 / 24 });
      Cookies.set("refreshToken", response?.refresh);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error?.status === 400) {
        return toast.error(
          `${
            error?.response?.data?.email[0] ||
            error?.response?.data?.password[0]
          }`
        );
      }
      toast.error(`Something went wrong! Try later.`);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle authentication
  const handleAuth = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (isSignUp) {
      register(email, password);
    } else {
      login(email, password);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { email, uid } = result.user;
      console.log("Google User", { uid, email });
      if (isSignUp) {
        register(email, uid);
      } else {
        login(email, uid);
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Something went wrong!");
    }
  };
  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const { uid, email } = result.user;
      if (isSignUp) {
        register(email, uid);
      } else {
        login(email, uid);
      }
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
      toast.error("Something went wrong!");
    }
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
          <Button
            className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-200"
            onClick={handleGithubSignIn}
          >
            <FaGithub className="text-xl" /> GitHub
          </Button>
          <Button
            className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-200"
            onClick={handleGoogleSignIn}
          >
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
          isLoading={isLoading}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        <p className="mt-4 text-sm text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="font-semibold text-blue-600 ml-1"
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
      <Toaster position="top-right" />
    </div>
  );
}
