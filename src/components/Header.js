import logo from "../../logo (2).png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("LOGIN");
  return (
    <div className="header-container">
      <img className="logo" alt="Logo" src={logo} />
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <button
          className="login-btn"
          onClick={() => {
            if (btnName === "LOGIN") {
              setbtnName("LOGOUT");
            } else setbtnName("LOGIN");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
