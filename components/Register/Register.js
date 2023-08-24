import React, { useState } from "react";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Simulate successful registration
    alert("Registration successful! You can now log in.");
    setPhoneNumber("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className=" text-3xl font-semibold mb-4 text-blue-500">Register</h2>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          className="mb-4 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mb-4 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        />
        <button
          type="button"
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Register
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Have an account? Please Login {" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
