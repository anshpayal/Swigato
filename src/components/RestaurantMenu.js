import React from "react";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import MenuAccordionCategory from "./MenuAccordionCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const restaurantMenu = useRestaurantMenuData(resID);
  //console.log(restaurantMenu);

  if (restaurantMenu === null) return "Loading...";

  const { name, cuisines, avgRating, totalRatingsString } =
    restaurantMenu[0]?.card?.card?.info;
  const cards =
    restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (category) =>
        category?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //.filter((category)=>{category?.card?.card?.["@type"]})
  // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
  //console.log(cards);
  return (
    <div className="p-10 h-screen">
      <div className=" bg-gray-100 border-2 border-gray-500 w-3/6 mx-auto p-3 rounded-xl ">
        <h1 className="my-1 text-center text-4xl font-bold">Menu 📜</h1>
        <div className=" p-3  flex justify-between items-center border-b-2 border-gray-400 ">
          {/*Restaurant Information */}
          <div>
            <h1 className=" my-1 text-2xl font-semibold">{name} </h1>
            <p className=" my-1 text-lg">{cuisines.join(", ")}</p>
          </div>
          <div className=" p-1 my-2 text-center border-2 border-gray-500 rounded-lg">
            <p className="text-lg border-b-2 border-gray-400">⭐ {avgRating}</p>
            <p className="text-sm my-2">{totalRatingsString}</p>
          </div>
        </div>
        <div className="p-3 my-2">
          {cards.map((category, index) => {
            return (
              <MenuAccordionCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                index={showIndex}
                setShowIndex={
                  index === showIndex
                    ? () => {
                        setShowIndex(null);
                      }
                    : () => {
                        setShowIndex(index);
                      }
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
