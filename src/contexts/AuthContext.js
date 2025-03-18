import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check local storage for user authentication on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    try {
      if (storedUser) {
        setIsLogin(true);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      // Optionally handle the error or clear the invalid data
      localStorage.removeItem("user");
    }
  }, []);

  const login = (userData) => {
    setIsLogin(true);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/"); // Redirect to a protected route on successful login
  };

  const logout = () => {
    setIsLogin(false);
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to the main page on logout
  };

  // Update user profile
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ isLogin, user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
