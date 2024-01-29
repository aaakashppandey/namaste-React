import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const SubMenu=({items})=>{
    // Calling the useDispatch Hook to add items to the cartSlice.
  const dispatch = useDispatch();
  const handleItems = (data) => {
    dispatch(addItems(data));
  };
return (
    <div>
        {items.map((data) => {
              return (
                <div
                  key={data?.card?.info?.id}
                  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                  <div className="w-9/12">
                    <div className="py-2">
                      <span>
                        {data.card.info.name}- ₹
                        {data.card.info.price
                          ? data.card.info.price / 100
                          : data.card.info.defaultPrice / 100}
                      </span>
                    </div>
                    <p className="text-xs font-semibold">
                      {data.card.info.description}
                    </p>
                  </div>
                  <div className="w-3/12 p-4">
                    <div className="absolute">
                      <button
                        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                        onClick={() => handleItems(data)}
                      >
                        Add
                      </button>
                    </div>
                    <img
                      src={CDN_URL + data.card.info.imageId}
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
    </div>
)
}


export default SubMenu;