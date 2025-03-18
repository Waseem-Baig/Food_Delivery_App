import React, { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("./cart");
  }

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
    <div
      className={`relative inline-block text-left ${isVisible ? "" : "hidden"}`}
    >
      <button
        className="fixed top-4 right-28 flex items-center justify-center btn rounded-lg border border-white text-white px-4 py-2 hover:bg-white hover:text-black "
        onClick={handleClick}
      >
        <BsCart3 className="w-6 h-6 mr-2" />
        <span className="font-medium sm:text-xs md:text-xs sm-xs:text-xs text-lg">
          Cart
        </span>
      </button>
    </div>
  );
};

export default CartButton;
