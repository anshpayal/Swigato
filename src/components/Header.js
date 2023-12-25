import logo from "../../logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header-container">
      <img className="logo" alt="Logo" src={logo} />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CART</li>
        <button
          className="login-btn"
          onClick={() => {
            if(btnName==="Login"){
              setbtnName("Logout");
            }
            else(
              setbtnName("Login")
            )
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
