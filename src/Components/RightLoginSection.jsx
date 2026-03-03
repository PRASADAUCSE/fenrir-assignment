import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Sign Up
      </h2>
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-teal-600 hover:underline font-medium"
        >
          Log in
        </Link>
      </p>

      <form className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();   // prevent refresh
          navigate("/dashboard");
        }}>
        <div>

          <input
            type="email"
            placeholder="First Name*"
            className="w-full px-4 py-2 border mt-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Last Name*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password (8 + characters)*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-start gap-3 mt-4">
            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer" required />
            <label htmlFor="terms" className="text-sm text-slate-600 leading-snug cursor-pointer">
              I agree to Aps's <a href="#" className="text-blue-600 font-semibold hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>
            </label>
          </div>


        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-3xl cvd font-medium hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>

      <div className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-500">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 gap-3">


          <button className="flex justify-center items-center py-3 bg-black text-white hover:bg-gray-900 rounded-2xl transition shadow-sm">
            <FaApple className="w-5 h-5" />
          </button>


          <button className="flex justify-center items-center py-3 bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-2xl transition shadow-sm">
            <FaGoogle className="w-5 h-5 text-red-500" />
          </button>


          <button className="flex justify-center items-center py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl transition shadow-sm">
            <FaFacebook className="w-5 h-5" />
          </button>

        </div>
      </div>


    </>

  );
};

export default LoginForm;