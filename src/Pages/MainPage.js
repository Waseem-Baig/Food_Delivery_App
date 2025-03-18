import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import RestaurantList from "./RestaurantPage";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <RestaurantList />
      <Footer />
    </div>
  );
};

export default MainPage;
