import React from "react";
import "./style.css";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UserButton from "./UserButton";
import { useAuth } from "../contexts/AuthContext";
import CartButton from "./CartButton";

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, login, user } = useAuth();

  // Function to get the initials from the user's name
  const getInitials = (name) => {
    const names = name.split(" ");
    const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
    const lastInitial = names[1]?.charAt(0).toUpperCase() || "";
    return `${firstInitial}${lastInitial}`;
  };

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
    // login();
  }

  function handleSignUp(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div
      className="bg-fixed bg-cover bg-center pt-6 pb-24"
      style={{ backgroundImage: "url('/images/img_2.png')" }}
    >
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center pl-4">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-12 relative cursor-pointer"
          />
        </div>
        {isLogin ? (
          <div className="flex items-center">
            <CartButton />
            <UserButton username={getInitials(user?.name || "User")} />
          </div>
        ) : (
          <div className="flex justify-end gap-2 px-4 sm:px-3 md:px-4 lg:px-5">
            <button
              className="btn rounded-lg border border-white text-white w-20 h-10 hover:bg-white hover:text-black"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="btn rounded-lg border border-white text-white w-20 h-10 hover:bg-white hover:text-black"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-5 gap-8">
        <h1 className="roboto-slab text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold heading text-white">
          Delivery Dost
        </h1>
        <h2 className="sub-heading text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          Enjoy Delicious Campus Meals Delivered to Your Doorstep
        </h2>
        <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex border p-2 rounded-lg bg-white w-full max-w-screen-md lg:max-w-3xl gap-3">
            <input
              type="text"
              className="bg-transparent w-full outline-none placeholder:text-center"
              placeholder="Search for a restaurant, cuisine or dish"
            />
            <button className="bg-red-500 w-40 h-10 rounded-lg flex justify-center items-center hover:bg-red-400">
              <Search className="text-white" />
              <span className="text-white text-xl"> Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
