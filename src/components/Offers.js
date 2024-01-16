import React from "react";
import { useEffect, useState } from "react";
import { SWIGGY_API, OFFER_IMG } from "../utils/Links";
const Offers = () => {
  const [offers, setOffers] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetchOfferData();
  }, []);
  const fetchOfferData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setOffers(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    console.log(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };
  const goToPrevSlide = () => {
    const newIndex =
      (currentIndex - 1 + (offers ? offers.length : 0)) %
      (offers ? offers.length : 1);
    setCurrentIndex(newIndex);
  };
  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % (offers ? offers.length : 1);
    setCurrentIndex(newIndex);
  };
  if (offers == null) return "Loading";
  return (
    <div>
      <div className=" p-10 flex flex-wrap justify-center ">
        {offers.map((offerImg) => {
          return (
            <img
              className="w-[450px] mx-8 my-4"
              alt="offers-img"
              src={OFFER_IMG + offerImg?.imageId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
