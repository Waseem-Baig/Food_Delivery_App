import React from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

const SignUpPage = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();

  function handleClick(e) {
    e.preventDefault();
    navigate("/login");
    // login();
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login_page_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white bg-opacity-15 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
          Sign Up
        </h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2 drop-shadow-md"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2 drop-shadow-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-semibold mb-2 drop-shadow-md"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-semibold mb-2 drop-shadow-md"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="bg-white bg-opacity-20 text-white font-bold py-2 px-4 rounded-lg border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
