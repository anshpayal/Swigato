import { useState, useEffect } from "react";
import { MENU_API } from "./Links";

const useRestaurantMenuData = (resID)=>{
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(()=>{
        fetchRestaurantMenu();
    }, [])

    const fetchRestaurantMenu = async()=>{
        const data= await fetch(MENU_API+resID);
        const json= await data.json();

        //console.log(json?.data?.cards);
        setRestaurantMenu(json?.data?.cards);
    }
    return restaurantMenu;
}

export default useRestaurantMenuData;