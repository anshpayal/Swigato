import React from "react";

const BillingDetails = (props) => {
  const { item } = props;

  const totalPrice = item.reduce((total, items) => {
    const price = items.card.info.price || items?.card?.info?.defaultPrice;
    return total + price;
  }, 0);
  const gstAndCharges =
    (totalPrice.toFixed(2) / 100) * 0.05 + (totalPrice.toFixed(2) / 100) * 0.1;
  console.log(totalPrice);
  return (
    <div className="w-3/12 h-52 p-3 mx-auto my-8 border-2 border-gray-400 rounded-lg">
      <h1 className="font-semibold text-xl my-4">Bill Details</h1>
      <div className="mt-4">
        <div className="flex justify-between my-1">
          <span>Item Total</span>
          <span>₹ {totalPrice.toFixed(2) / 100}</span>
        </div>
        <div className="flex justify-between my-1">
          <span>Platform fee</span>
          <span>₹ 5</span>
        </div>
        <div className="flex justify-between border-b-2 border-gray-700 mt-1 mb-4">
          <span>GST and Restaurant Charges</span>
          <span>₹ {gstAndCharges.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-md">
          <span>To Pay </span>
          <span>
            ₹ {(totalPrice.toFixed(2) / 100 + gstAndCharges).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
