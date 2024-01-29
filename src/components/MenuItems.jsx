import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import SubMenu from "./SubMenu";

const MenuItems = ({ items, dummy }) => {
  

  return (
    <div>
      {items.map((ele) => {
        return (
          <div className="mb-4 pb-2">
            <h1>{ele.title}</h1>
            <SubMenu items={ele.itemCards} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
