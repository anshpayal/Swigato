import logo from "../../logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" alt="Logo" src={logo} />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Header;