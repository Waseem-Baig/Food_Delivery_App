import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const EmptyCartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <img
          src="/images/empty_cart.png"
          alt="Empty Cart"
          className="w-48 h-48 mx-auto mb-6"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/" // Assuming you have a menu or products page
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartPage;
