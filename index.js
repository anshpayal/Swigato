import React from "react";
import ReactDom from "react-dom/client";
import logo from "./logo.png";
import "./style.css";

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

const ResturantCard = (props) => {
  const{resturantData} = props;
  const {cloudinaryImageId, name, avgRating, cuisines}=resturantData?.info;
  return (
    <div className="resturant-card">
      <img
        alt="resturant-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

const listOfresturant = [
  {
    info: {
      id: "3369",
      name: "Truffles",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹450 for two",
      cuisines: ["American", "Desserts", "Continental", "Italian"],
      avgRating: 4.6,
    }
  },
  {
    info: {
      id: "503961",
      name: "Istah - The Mediterranean Way",
      cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
      locality: "Akkithimanahalli",
      areaName: "Santhi Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish",
      ],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Shanti Nagar",
      areaName: "Shanti Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
    },
  },
  {
    info: {
      id: "30531",
      name: "Hotel Empire",
      cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
      locality: "Brigade Road",
      areaName: "Church Street",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "5938",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Tasker Town",
      areaName: "Shivaji Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
    },
  },
  {
    info: {
      id: "347868",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Cunnigham road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
    },
  },
];

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="resturant-container">
        {listOfresturant.map((resturants)=>{
          return <ResturantCard key={resturants.info.id} resturantData={resturants}/>
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
