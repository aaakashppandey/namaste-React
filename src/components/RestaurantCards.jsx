import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../customHooks/UserContext";

const RestaurantCards = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props.data.info;
    const data=useContext(UserContext);
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img src={CDN_URL + cloudinaryImageId} className="w-30 rounded-lg" />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>User name:{data.loggedInUser}</h4>
    </div>
  );
};

// HigherOrder Components WithDiscountLabel

export const withDiscountLabel = (RestaurantCards) => {
  return (props) => {
    const discountInfo = props.data.info.aggregatedDiscountInfoV3;

    return (<div>
      <label className="bg-pink-100">
        {discountInfo.discountTag && discountInfo.discountTag}  {discountInfo.header}, { discountInfo.subHeader}
        <RestaurantCards {...props} />
      </label>
      </div>
    );
  };
};

export default RestaurantCards;
