import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/useCart";

const MenuItem = ({ meals }) => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantities, setQuantities] = useState(
    meals.reduce((acc, meal) => ({ ...acc, [meal.id]: 0 }), {})
  );

  const handleAddToCart = (meal) => {
    if (isLogin) {
      const quantity = quantities[meal.id];
      if (quantity > 0) {
        addToCart(meal, quantity);
        navigate("/cart");
      } else {
        alert("Please select a quantity greater than 0.");
      }
    } else {
      alert("Please login to add items..");
      navigate("/login");
    }
  };

  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, value),
    }));
  };

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1),
    }));
  };

  // const handleAddItem = (meal) => {
  //   if (isLogin) {
  //     const quantity = quantities[meal.id];
  //     alert(`Added ${quantity} of ${meal.name} to the cart.`);
  //   } else {
  //     alert("Please login to Place Order..");
  //     navigate("/login");
  //   }
  // };

  return (
    <div className="meal-container mx-auto max-w-4xl p-4">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="w-full flex flex-row items-center mb-6 p-4 border border-gray-300 shadow-lg rounded-lg bg-white"
        >
          <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center mr-4">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
              style={{ aspectRatio: "1 / 1" }}
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-xl font-bold text-gray-900">{meal.name}</h5>
              <span className="text-lg text-gray-700 font-semibold">
                ₹{meal.price}
              </span>
            </div>
            <p className="text-gray-800 mb-3">{meal.description}</p>
            <div className="flex items-center">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => decreaseQuantity(meal.id)}
                  className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 xs:px-2"
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  value={quantities[meal.id]}
                  onChange={(e) =>
                    handleQuantityChange(meal.id, parseInt(e.target.value))
                  }
                  className="w-16 p-2 border-0 text-center text-gray-900 bg-white xs:w-12"
                />
                <button
                  onClick={() => increaseQuantity(meal.id)}
                  className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 xs:px-2"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(meal)}
                className="ml-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:px-3 xs:px-3 sm-xs:px-3"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
