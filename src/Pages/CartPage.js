import React from "react";
import { useCart } from "../contexts/useCart";
import { useOrders } from "../contexts/ordersContext"; // Import OrdersContext
import EmptyCartPage from "./EmptyCartPage";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, setCartItems } = useCart();
  const { addOrder } = useOrders(); // Get addOrder function from OrdersContext

  const taxRate = 0.02;
  const deliveryFee = 10;

  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.food.price * item.quantity,
    0
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax + deliveryFee;

  const handleCheckout = () => {
    if (cart.items.length === 0) return;

    const order = {
      id: Date.now(), // Unique ID for the order
      date: new Date().toLocaleDateString(),
      total: total,
      items: cart.items.map((item) => ({
        name: item.food.name,
        image: item.food.image,
        quantity: item.quantity,
      })),
    };

    addOrder(order); // Add order to OrdersContext
    // cart.items.forEach((item) => removeFromCart(item.food.id)); // Clear the cart
    setCartItems([]);
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
        Your Cart
      </h1>

      {cart && cart.items.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Cart Items Table */}
          <div className="lg:w-2/3">
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 sm:px-6 text-left">Image</th>
                    <th className="py-2 px-4 sm:px-6 text-left">Item Name</th>
                    <th className="py-2 px-4 sm:px-6 text-center">Price</th>
                    <th className="py-2 px-4 sm:px-6 text-center">Quantity</th>
                    <th className="py-2 px-4 sm:px-6 text-center">Total</th>
                    <th className="py-2 px-4 sm:px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item) => (
                    <tr key={item.food.id} className="border-b border-gray-200">
                      <td className="py-3 px-4 sm:px-6">
                        <img
                          src={item.food.image}
                          alt={item.food.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                        />
                      </td>
                      <td className="py-3 px-4 sm:px-6">{item.food.name}</td>
                      <td className="py-3 px-4 sm:px-6 text-center">
                        ₹{item.food.price}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-center">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() =>
                              updateQuantity(item.food.id, item.quantity - 1)
                            }
                            className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-l"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.food.id,
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-10 sm:w-12 text-center"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.food.id, item.quantity + 1)
                            }
                            className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-center">
                        ₹{item.food.price * item.quantity}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-center">
                        <button
                          onClick={() => removeFromCart(item.food.id)}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bill Summary */}
          <div className="lg:w-1/3 h-fit bg-white border border-gray-300 rounded-lg p-4 sm:p-6 mt-6 lg:mt-0 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Order Summary
            </h2>
            <hr className="w-full h-1 bg-gray-700 border-none rounded-md shadow-md mb-2"></hr>
            <div className="text-lg sm:text-xl">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Goods (2%):</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee:</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between font-semibold text-xl sm:text-2xl mb-4">
                <span>Grand Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <hr className="w-full h-1 bg-gray-700 border-none rounded-md shadow-md mb-1"></hr>
              <div className="text-center">
                <button
                  onClick={handleCheckout}
                  className="w-[60%] bg-green-500 text-white py-2 mt-2 rounded-lg hover:bg-green-600"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCartPage />
      )}
    </div>
  );
};

export default CartPage;
