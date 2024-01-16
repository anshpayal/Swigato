import { useEffect, useState } from "react";
import { SWIGGY_API } from "./Links";
// This is custom hook to fetch the data of restuarants from Swiggy API

const useRestaurantsData = () => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resData;
};

export default useRestaurantsData;
