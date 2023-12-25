import CDNLinks from "../utils/links";

const ResturantCard = (props) => {
  const { resturantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = resturantData?.info;
  return (
    <div className="resturant-card">
      <img className="resturantcard-img" alt="resturant-img" src={CDNLinks + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default ResturantCard;
