import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username === "vasundara" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      setError("");
      navigate("/");
    } else {
      setError("❌ Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 px-4">
      <form
        onSubmit={handleSignIn}
        className="relative w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 animate-fadeZoom"
      >
        
        <div className="absolute top-0 left-0 h-1 w-full overflow-hidden rounded-t-3xl">
          <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 animate-slideBar" />
        </div>

        
        <h2 className="text-3xl font-extrabold text-center flex justify-center items-center gap-2 mt-2">
          <FaLock className="text-indigo-800" />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-700 bg-clip-text text-transparent">
            Sign In
          </span>
        </h2>
        

       
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-indigo-700"
            placeholder="Enter your name"
          />
        </div>

        {/* 🔑 Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-indigo-700"
            placeholder="Enter password"
          />
        </div>

        
        {error && (
          <p className="text-red-600 text-sm text-center font-medium mb-2">{error}</p>
        )}

       
        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2.5 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
