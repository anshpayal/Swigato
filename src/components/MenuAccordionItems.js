import React from "react";
import { CDNLinks } from "../utils/Links";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const MenuAccordionItems = (props) => {
  const { itemList } = props;
  //console.log(itemList);

  const dispatch = useDispatch();
  const handleAddItemClick = (item)=>{
    dispatch(addItems(item));
  }
  return (
    <div>
      {itemList.map((item) => 
      {
        return (
          <div
            key={item?.card?.info?.id}
            className=" flex justify-between items-center my-4 border-b-2 border-gray-400"
          >
            <div className="w-10/12">
              <p className="my-2 font-semibold">{item?.card?.info?.name}</p>
              <p className="my-2">
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </p>
              {item?.card?.info?.description ? (
                <p className=" my-8 text-sm text-gray-700">
                  {item?.card?.info?.description}
                </p>
              ) : (
                <div className="h-24"> </div>
              )}
            </div>
            <div className=" relative w-2/12 ml-4">
              {item?.card?.info?.imageId && (
                <img
                  src={CDNLinks + item?.card?.info?.imageId}
                  className="w-28 h-26 rounded-lg aspect-square object-cover"
                />
              )}
              <button
                className="absolute top-full left-[56px] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white font-semibold w-16 px-2 py-1 rounded-lg hover:bg-blue-400 "
                onClick={()=>handleAddItemClick(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuAccordionItems;
