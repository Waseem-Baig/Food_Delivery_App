import React, { createContext, useContext, useState, useEffect } from "react";
// import menuData from "./MenuData";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // menuData
  //   .slice(1, 4)
  //   .map((food) => ({ food, quantity: 1, price: food.price }))
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => {
        acc.price += item.food.price * item.quantity;
        acc.count += item.quantity;
        return acc;
      },
      { price: 0, count: 0 }
    );
    setTotalPrice(total.price);
    setTotalCount(total.count);
  }, [cartItems]);

  const removeFromCart = (foodId) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.food.id !== foodId
    );
    setCartItems(filteredCartItems);
  };

  const updateQuantity = (foodId, newQuantity) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.food.id === foodId
              ? { ...item, quantity: newQuantity > 0 ? newQuantity : 0 }
              : item
          )
          .filter((item) => item.quantity > 0) // Filter out items with quantity 0
    );
  };

  const addToCart = (food, quantity) => {
    const cartItem = cartItems.find((item) => item.food.id === food.id);
    if (cartItem) {
      updateQuantity(cartItem.food.id, cartItem.quantity + quantity);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { food, quantity, price: food.price },
      ]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        removeFromCart,
        updateQuantity,
        addToCart, // Make sure addToCart is provided here
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
