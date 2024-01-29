import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "../utils/constants";

const useRestaurantData = () => {
  const [restaurant, setRestaurantData] = useState();
  useEffect(() => {
    fetchData();        
  }, []);
  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_API);
    const json = await response.json();
    setRestaurantData(json.data);
  };
 


  return restaurant;
};

export default useRestaurantData;
