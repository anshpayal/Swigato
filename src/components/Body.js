import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfresturant, setListOfResturant] = useState([]);
  //console.log(listOfresturant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfresturant.length==0 ){
    return <Shimmer/>;
  }

  return(
    <div className="body-container">
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const topRated = listOfresturant?.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfResturant(topRated);
        }}
      >
        Top rated
      </button>
      <div className="resturant-container">
        {listOfresturant?.map((resturants) => (
          <ResturantCard key={resturants.info.id} resturantData={resturants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
