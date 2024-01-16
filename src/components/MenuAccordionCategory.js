import React from "react";
import { useState } from "react";
import MenuAccordionItems from "./MenuAccordionItems";

const MenuAccordionCategory = (props) => {
  const { data, showItems, index, setShowIndex } = props;

  const handleClick = () => {
    //console.log(index);
    setShowIndex();
  };
  return (
    <div className=" bg-slate-200  m-4 p-4 border-b-2 border-slate-400 rounded-lg shadow-lg ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </div>
        <div>🔽</div>
      </div>
      <div>
        {showItems && <MenuAccordionItems itemList={data?.itemCards} />}
      </div>
    </div>
  );
};

export default MenuAccordionCategory;
