import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfresturant, setListOfResturant] = useState(resList);
  return (
    <div className="body-container">
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const topRated = listOfresturant.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfResturant(topRated);
        }}
      >
        Top rated
      </button>
      <div className="resturant-container">
        {listOfresturant.map((resturants) => (
          <ResturantCard key={resturants.info.id} resturantData={resturants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
