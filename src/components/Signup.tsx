import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router";

const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add signup submission logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-white to-indigo-200 px-4">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-8">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
            👋
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue your journey
          </p>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name:
          </label>

          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={signupInput.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={signupInput.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={signupInput.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={signupInput.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300"
        >
          Sign Up
        </button>

        <div className="relative my-6">
          <hr />
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-500 text-sm">
            OR
          </span>
        </div>

        <button
          type="button"
          className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
      
    </div>
  );
};

export default Signup;