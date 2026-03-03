import React from "react";
import LoginForm from "../components/RightLoginSection";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0F0F0F] via-[#0E2A2A] to-[#1A1A1A]">

      {/* Left Side Content */}
      <div className="hidden lg:flex w-1/2 text-white p-16 flex-col justify-center ">
        <h1 className="text-4xl font-semibold leading-snug ">
          Expert level Cybersecurity <br />
          in <span className="text-[#0CC8A8]">hours</span> not weeks.
        </h1>

        <div className="mt-10 space-y-4 text-gray-300 text-3xl">
          <p className="font-medium text-white">What’s included</p>
          <ul className="space-y-3 text-sm ml-2">
            <li>✔ Effortlessly spider and map targets to uncover hidden ssecurity flows</li>
            <li>✔ Deliver validated findings in hours, not weeks</li>
            <li>✔ Generate professional, enterprise-grade reports automatically</li>
          </ul>
        </div>
        <div className="text-sm text-gray-300 mt-10 space-y-4">
    <p className="text-[#0CC8A8]">★ Trustpilot</p>
    <p className="mt-2">
      Rated 4.5/5.0 <span className="text-gray-400">(100k+ reviews)</span>
    </p>
  </div>
 </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <LoginForm />
        </div>
      </div>

    </div>
  );
};

export default Login;

