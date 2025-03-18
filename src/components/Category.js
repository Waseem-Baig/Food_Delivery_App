import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import category from "../data/categoryList";

const Category = () => {
  const [categories, setCategories] = useState(category);
  const [translate, setTranslate] = useState(0);

  function handleTranslateRight() {
    if (categories.length - 8 === translate) {
      return;
    }
    setTranslate((t) => t + 3);
  }

  function handleTranslateLeft() {
    if (translate === 0) {
      return;
    }
    setTranslate((t) => t - 3);
  }

  return (
    <div className="max-w-[98%] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          What's on your mind?
        </div>
        <div className="flex">
          <div
            className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${
              translate === 0 ? "bg-[rgba(2, 6, 12, 0.15)]" : ""
            }`}
            onClick={() => {
              handleTranslateLeft();
            }}
          >
            <FaArrowLeft
              className={`${translate === 0 ? "text-black opacity-40" : ""}`}
            />
          </div>
          <div
            className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${
              categories.length - 8 === translate ? "bg-gray-100" : ""
            }`}
            onClick={() => {
              handleTranslateRight();
            }}
          >
            <FaArrowRight
              className={`${
                categories.length - 8 === translate
                  ? "text-black opacity-40"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{ transform: `translateX(${-translate * 100}%)` }}
              key={index}
              className="flex-grow-1 shrink-0 w-12 sm:w-12 md:w-24 lg:w-36 duration-500 group"
            >
              <img
                src={`/images/${cat.image}`}
                alt=""
                className="cursor-pointer group-hover:scale-110 duration-150"
              />
            </div>
          );
        })}
      </div>
      <hr className="mt-6 border-[3px]"></hr>
    </div>
  );
};

export default Category;
