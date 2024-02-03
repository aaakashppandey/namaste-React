import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Restaurantpage from "./components/RestaurantPage";
import { useEffect, useState } from "react";
import UserContext from "./customHooks/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    // This is just a dummy data to pass a response from an API
    const data = {
      name: "Akash Pandey",
    };
    setUserName(data.name);
  }, []);
  return (
    // Import Provide from react -redux to provide the data
    <Provider store={appStore}>
    {/* // We Are providing the value to whole APP .provider is provided by the React. */}
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">

        {/* We can also use nested context apis it will only work for the Wrapped part. */}
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurantpage />,
      },
      {
        path: "/contactUs",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
