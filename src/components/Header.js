import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../Logo.png";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(removeUser());
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  if (location.pathname === "/login") {
    return null; // Don't render the header on the login page
  }

  return (
    <div className=" flex justify-between shadow-lg ">
      <Link to="/">
        <img
          className="logo w-[85px] h-[100px] mx-20 my-4 rounded-2xl "
          alt="Logo"
          src={Logo}
        />
      </Link>
      <div className="nav-container flex items-center ">
        <ul className="nav-items flex text-lg font-medium text-gray-700">
          <li className="mx-6">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-6">
            <Link to="/offers">Offers</Link>
          </li>
          <li className="relative  mx-6 mr-9">
            <Link to="/cart">
              🛒 Cart
              {cartItems.length !== 0 && (
                <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs absolute -top-3 -right-5">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
        {user ? (
          <button
            className="ml-4 mr-20 px-5 py-2 text-lg font-medium text-white rounded-lg bg-orange-500 hover:bg-orange-400"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="ml-4 mr-20 px-5 py-2 text-lg font-medium text-white rounded-lg bg-orange-500 hover:bg-orange-400">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
