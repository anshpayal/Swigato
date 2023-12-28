import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MenuLinks } from "../utils/links";
const ResturantMenu = () => {
  const [menuDetails, setMenuDetails] = useState(null);
    const {resID}= useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MenuLinks+resID);
    const json = await data.json();
    console.log(json.data);
    setMenuDetails(json.data);
  };

  if (menuDetails === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = menuDetails?.cards[0]?.card?.card?.info;
  const { itemCards } = menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>{
            return <li key={item.card.info.id}>{item.card.info.name} : Rs {item.card.info.price/100}</li>
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
