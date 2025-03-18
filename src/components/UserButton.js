import React, { useState, useEffect } from "react";
import { FaUserCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const UserButton = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative inline-block text-left mr-2">
      {isVisible && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 flex items-center px-4 py-2 btn rounded-lg border border-white text-white hover:bg-white hover:text-black xs:px-1 sm:px-1 sm-xs:px-1 font-serif"
        >
          <FaUserCircle className="w-6 h-6 mr-2" />
          <span className="font-medium sm:text-xs md:text-xs sm-xs:text-xs text-sm">
            {username}
          </span>
          {isOpen ? (
            <FaChevronUp className="ml-2 w-4 h-4" />
          ) : (
            <FaChevronDown className="ml-2 w-4 h-4" />
          )}
        </button>
      )}

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => navigate("/profile")}
              className="block px-4 py-2 text-sm rounded-lg border border-white text-black hover:bg-black hover:text-white w-full text-left"
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/orders")}
              className="block px-4 py-2 text-sm rounded-lg border border-white text-black hover:bg-black hover:text-white w-full text-left"
            >
              Orders
            </button>
            <button
              onClick={logout} // Call the logout function
              className="block px-4 py-2 text-sm rounded-lg border border-white text-black hover:bg-black hover:text-white w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;
