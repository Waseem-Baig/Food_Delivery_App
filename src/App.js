import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import MenuPage from "./Pages/MenuPage";
import CartPage from "./Pages/CartPage";
import Orders from "./Pages/OrdersPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
