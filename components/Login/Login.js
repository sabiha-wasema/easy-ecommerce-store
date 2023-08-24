import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Simulate validation
    if (phoneNumber.trim() === "" || password.trim() === "") {
      setError("Please enter your phone number and password.");
      return;
    }

    // Simulate successful login
    router.push("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">
          Log in to Your Account
        </h2>
        {error &&
          <p className="text-red-500 mb-2">
            {error}
          </p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className="mb-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Log in
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
