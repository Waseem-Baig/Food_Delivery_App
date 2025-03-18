import React, { useState } from "react";
import Restaurant from "../components/Restaurant";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RestaurantDetails from "../data/restaurantDetails";

const RestaurantList = () => {
  const [data, setData] = useState(RestaurantDetails);

  return (
    <div className="max-w-[98%] mx-auto">
      <div className="flex my-3 items-center justify-center">
        <div className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          VITAP'S Top Restaurants
        </div>
        <div className="flex">
          {/* <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div> */}
        </div>
      </div>
      <div className="flex flex-wrap xs:justify-center xs:gap-10 sm-xs:justify-center sm-xs:gap-12 sm:justify-center sm:gap-12 md:justify-between lg:justify-center xl:justify-between xl:gap-4 lg:gap-7 mt-6">
        {data.map((d, i) => {
          return <Restaurant data={d} key={i} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
