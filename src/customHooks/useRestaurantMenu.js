import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setMenuList(json.data);
  };

  return menuList;
};

export default useRestaurantMenu;
