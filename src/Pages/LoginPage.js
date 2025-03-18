import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (userName.length === 0) {
      alert("Username cannot be empty.");
    } else if (password.length === 0) {
      alert("Password cannot be empty.");
    } else {
      // Uncomment and use axios for real authentication
      // const url = "http://localhost/api/index.php";
      // let fData = new FormData();
      // fData.append("userName", userName);
      // fData.append("password", password);

      // try {
      //   const response = await axios.post(url, fData);
      //   if (response.data === "Login Successful!!") {
      //     // Replace with actual user data if available from response
      //     const userData = { name: userName, /* other user info */ };
      //     login(userData);
      //     navigate("/"); // Redirect after successful login
      //   } else {
      //     console.log(response.data);
      //   }
      // } catch (error) {
      //   alert(error);
      // }

      // For demo purposes, assume successful login and use a mock userData
      const mockUserData = { name: userName }; // Replace with actual user data from API
      login(mockUserData);
      navigate("/"); // Redirect after successful login
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/login_page_bg.jpg')",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative bg-white bg-opacity-15 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
          Login
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
              value={userName}
              name="username"
              onChange={(e) => setUserName(e.target.value)}
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
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="bg-white bg-opacity-20 text-white font-bold py-2 px-4 rounded-lg border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center text-white">
            <p>
              Don't have an account,{" "}
              <button className="text-blue-400" onClick={handleSignUp}>
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
