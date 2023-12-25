import CDNLinks from "../utils/links";

const ResturantCard = (props) => {
  const { resturantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = resturantData?.info;
  return (
    <div className="resturant-card">
      <img className="resturantcard-img" alt="resturant-img" src={CDNLinks + cloudinaryImageId} />
      <p>{name}</p>
      <p>{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default ResturantCard;
