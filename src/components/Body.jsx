import { useContext, useEffect, useState } from "react";
import useRestaurantData from "../customHooks/useRestaurantData";
import Shimmer from "./Shimmer";
import RestaurantCards, { withDiscountLabel } from "./RestaurantCards";
import { Link } from "react-router-dom";
import UserContext from "../customHooks/UserContext";

const Body = () => {
  const restaurantData = useRestaurantData();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCards);
  const {loggedInUser, setUserName}=useContext(UserContext)

  const listOfRestaurant =
    restaurantData?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  useEffect(() => {
    setFilteredRestaurant(listOfRestaurant);
  }, []);

  return listOfRestaurant && listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-solid border-black rounded p-1"
      />

      <button
        className="border w-20 bg-green-100 p-1 rounded-lg mx-1"
        onClick={() => {
          const filteredRestaurants = listOfRestaurant?.filter((res) => {
            return res.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          setFilteredRestaurant(filteredRestaurants);
        }}
      >
        Search
      </button>
      <div>
        <label>User Name</label>
        <input type="text" value={loggedInUser} className="border rounded border-solid border-black  p-1" onChange={(e)=>setUserName(e.target.value)}/>


      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((card) => {
          return (
            <Link key={card?.info.id} to={"/restaurant/" + card?.info?.id}>
              {card?.info.aggregatedDiscountInfoV3 != undefined ? (
                <RestaurantCardDiscount data={card} />
              ) : (
                <RestaurantCards data={card} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
