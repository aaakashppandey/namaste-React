import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Restaurantpage = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [menuList, setMenuList] = useState(null);
  const { resId } = useParams();

  const dummy = "Dummy Data";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);

    const json = await response.json();
    setMenuList(json.data);
  };


  const { name, cuisines, costForTwoMessage } =
    menuList != null && menuList.cards[0]?.card?.card?.info;

  const categories =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  if (menuList === null) return <Shimmer />;
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">{name && name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
        {categories &&
          categories.map((data, index) => {
            return (
              <RestaurantCategory
                key={data?.card?.card?.title}
                data={data?.card?.card}
                showItems={index == showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}
              />
            );
          })}
      </p>
    </div>
  );
};

export default Restaurantpage;
