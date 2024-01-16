import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import { Provider } from "react-redux";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";

const Offers = lazy(() => import("./components/Offers"));

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(<App/>);
root.render(<RouterProvider router={appRouter} />);
