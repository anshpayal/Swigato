import ResturantCard from "./ResturantCard";
import listOfresturant from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="resturant-container">
        {listOfresturant.map((resturants) => {
          return (
            <ResturantCard
              key={resturants.info.id}
              resturantData={resturants}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;