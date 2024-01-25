import React from "react";
import { CDNLinks } from "../utils/Links";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, avgRating, cuisines, cloudinaryImageId, locality } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  const discount  = resData?.info?.aggregatedDiscountInfoV3
  return (
    <div className=" relative z-0 w-[300px] h-96 mx-4 p-2 bg-gray-200 border border-gray-300 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700  hover:scale-95 ease-in duration-400 cursor-pointer">
      <img
        className=" w-full rounded-2xl h-2/4"
        src={CDNLinks + cloudinaryImageId}
        alt="resturant-img"
      ></img>
      <h1 className="font-bold text-lg truncate my-2">{name}</h1>
      <span className="mr-3 font-bold">{avgRating}</span>
      <span className="font-bold">{slaString}</span>
      <p className="truncate my-2">{cuisines.join(", ")}</p>
      <p>{locality}</p>
      {discount && <p className="my-2 font-semibold text-orange-500">{discount.header + " " + discount.subHeader}</p> }
    </div>
  );
};

export const withVegLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div className="relative hover:scale-95 ease-in duration-400 cursor-pointer">
        <label className="absolute z-10 bg-green-600 text-white text-sm mx-4 p-2 rounded-lg opacity-95">Pure Veg</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
