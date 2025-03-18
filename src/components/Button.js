import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/button");
  }

  return (
    <div className="flex w-full h-auto justify-end align-baseline">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mr-4 mt-4"
      >
        Dash Board
      </button>
    </div>
  );
};

export default Button;
