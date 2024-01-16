import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDNLinks } from "../utils/Links";
import { clearCart, removeItems } from "../utils/cartSlice";
import BillingDetails from "./BillingDetails";

const Cart = () => {
  const itemsInCart = useSelector((store) => store.cart.items);
  //console.log(itemsInCart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (itemID) => {
    dispatch(removeItems(itemID));
  };

  return (
    <div className="flex">
      <div className="w-4/12 p-3 mx-auto my-8 border-2 border-gray-400 rounded-lg text-center">
        <h1 className="font-bold text-2xl my-4">Cart Items</h1>
        <div className="p-4 overflow-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {itemsInCart.length === 0 ? (
            <p>Cart is empty add items to the cart!</p>
          ) : (
            itemsInCart.map((items) => {
              return (
                <div
                  key={items?.card?.info?.id}
                  className=" bg-gray-200 p-3 rounded-lg flex items-center justify-between my-8 border-b-2 border-gray-400"
                >
                  <img
                    src={CDNLinks + items?.card?.info?.imageId}
                    className="w-20 my-2 h-18 rounded-lg aspect-square object-cover"
                  />
                  <div className="w-6/12">
                    <h1 className="font-semibold text-lg truncate">
                      {items?.card?.info?.name}
                    </h1>
                    <button
                      className="px-3 py-1 my-6 text-sm font-medium text-white rounded-lg bg-red-500 hover:bg-red-400"
                      onClick={() => handleRemoveItem(items?.card?.info?.id)}
                    >
                      Remove Item
                    </button>
                  </div>

                  <p className="font-semibold text-lg my-2">
                    ₹{" "}
                    {items?.card?.info?.price
                      ? items?.card?.info?.price / 100
                      : items?.card?.info?.defaultPrice / 100}
                  </p>
                </div>
              );
            })
          )}
          <button
            className="px-5 py-2 my-4 text-lg font-medium text-white rounded-lg bg-red-500 hover:bg-red-400"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      {
        itemsInCart.length !== 0 && <BillingDetails item={itemsInCart}/>
      }
    </div>
  );
};

export default Cart;
