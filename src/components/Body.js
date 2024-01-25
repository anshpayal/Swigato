import React from "react";
import ResturantCard,{withVegLabel} from "./ResturantCard";
import Shimmer from "./Shimmer";
import useRestaurantsData from "../utils/useRestaurantsData";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const intialrestaurantsData = useRestaurantsData();
  //console.log(intialrestaurantsData);

  const [searchText, setSearchText] = useState();
  const [filterBySearch, setFilterBySearch] = useState();

  const [filterRestaurants, setFilterRestaurants] = useState(null);

  const RestaurantsWithVegLable = withVegLabel(ResturantCard); 

  const handleInputText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchBtnClick = () => {
    const SearchedRestaurant = intialrestaurantsData.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterBySearch(SearchedRestaurant);
  };

  const handleTopRatedClick = () => {
    const topRated = intialrestaurantsData.filter(
      (res) => res.info.avgRating > 4.2
    );
    setFilterRestaurants(topRated);
  };
  const handleFastDeliveryClick = () => {
    const fastDelivery = intialrestaurantsData.filter(
      (res) => res.info.sla.deliveryTime < 30
    );
    setFilterRestaurants(fastDelivery);
  };

  if (intialrestaurantsData === null) {
    return <Shimmer />;
  }
  const restaurantsToDisplay =
    filterBySearch || filterRestaurants || intialrestaurantsData;
    //console.log(restaurantsToDisplay)
  return (
    <div>
      <div className=" py-7 font-medium ">
        <div className=" mx-auto w-3/6  flex ">
          <input
            className="
            focus:outline-none 
            border border-solid border-gray-300 
            w-full 
            px-4 py-2 
            rounded-l-full"
            placeholder="Search Restuarants"
            value={searchText}
            onChange={handleInputText}
          ></input>
          <button
            className="
          bg-gray-300 
          hover:bg-gray-200 
          px-4 
          rounded-r-full"
            onClick={handleSearchBtnClick}
          >
            Search
          </button>
        </div>
        <div className=" mx-auto w-3/6 my-5 ">
          <button
            className=" 
            text-orange-500 
            px-4 py-2 
            mr-4 
            border border-solid border-orange-500 
            rounded-full 
            hover:bg-gray-100"
            onClick={() => {
              setFilterRestaurants(intialrestaurantsData);
            }}
          >
            All Restaurants
          </button>
          <button
            className=" 
            text-orange-500 
            px-4 py-2 
            mr-4 
            border border-solid border-orange-500 
            rounded-full 
            hover:bg-gray-100"
            onClick={handleTopRatedClick}
          >
            Top Rated
          </button>
          <button
            className=" 
            text-orange-500 
            px-4 py-2 
            mr-4 
            border border-solid border-orange-500 
            rounded-full 
            hover:bg-gray-100"
            onClick={handleFastDeliveryClick}
          >
            Fast Delivery
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 m-auto w-11/12">
        {restaurantsToDisplay?.map((res) => (
          <Link to={"/restaurants/"+ res.info.id} key={res.info.id} >
            {res.info.veg ? <RestaurantsWithVegLable resData={res}/> : <ResturantCard resData={res} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
