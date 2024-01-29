import { Link } from "react-router-dom";
import food_logo from "../assets/foodlogo.png";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../customHooks/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onLineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  // we use useSelector to subscribe to our store and read data from the store .
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems, 'cartItems')
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={food_logo} alt="food logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <h4>Online Status: {onLineStatus ? "Online" : "Offline"}</h4>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart-{cartItems.length} items</Link>
          </li>
          <li className="px-4">
            <Link to="/product">Product</Link>
          </li>
          <li className="px-4">User: {data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
