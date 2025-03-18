import React from "react";
import menuData from "../data/MenuData";
import MenuItem from "../components/MenuItem";

const MenuPage = () => {
  return (
    <div>
      <MenuItem meals={menuData} />
    </div>
  );
};

export default MenuPage;
