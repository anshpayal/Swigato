import logo from "../../logo (2).png";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("LOGIN");
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
            if(btnName==="LOGIN"){
              setbtnName("LOGOUT");
            }
            else(
              setbtnName("LOGIN")
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
