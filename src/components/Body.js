import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfresturant, setListOfResturant] = useState([]);
  const [filterBySearchRes, setFilterBySearchRes] = useState([]);
  //console.log(listOfresturant);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3826105&lng=78.0886934&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterBySearchRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfresturant?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Resturants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const filterBySearch = listOfresturant.filter((res) => {
              return res?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilterBySearchRes(filterBySearch);
          }}
        >
          Search
        </button>
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
        {filterBySearchRes?.map((resturants) => (
          <Link
            key={resturants.info.id}
            to={"/resturants/" + resturants.info.id}
          >
            <ResturantCard resturantData={resturants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
