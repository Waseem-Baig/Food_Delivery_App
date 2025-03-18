import React from "react";
import { FaTrash } from "react-icons/fa"; // Trash icon for removing items

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="w-full max-w-full sm:max-w-4xl mx-auto flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
        <img
          src={item.food.image}
          alt={item.food.name}
          className="w-full h-full object-cover rounded-lg shadow-md"
          style={{ aspectRatio: "1 / 1" }}
        />
      </div>
      <div className="flex-grow mt-4 sm:mt-0 sm:ml-6">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2 sm:mb-4">
          <h5 className="text-lg sm:text-2xl font-semibold text-gray-900 text-center sm:text-left">
            {item.food.name}
          </h5>
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            ₹{item.food.price}
          </span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-4 text-center sm:text-left">
          {item.food.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => onQuantityChange(item.food.id, item.quantity - 1)}
              className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200 ease-in-out"
            >
              -
            </button>
            <input
              type="number"
              min="0"
              value={item.quantity}
              onChange={(e) =>
                onQuantityChange(item.food.id, parseInt(e.target.value) || 0)
              }
              className="w-12 sm:w-16 p-1 sm:p-2 text-center text-gray-900 bg-white border-0 outline-none"
            />
            <button
              onClick={() => onQuantityChange(item.food.id, item.quantity + 1)}
              className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200 ease-in-out"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemove(item.food.id)}
            className="p-2 sm:p-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 ease-in-out"
          >
            <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
