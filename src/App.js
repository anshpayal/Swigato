import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy } from "react";
import { Provider, useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import LoginBtnContext from "./utils/LoginBtnContext";

const Offers = lazy(() => import("./components/Offers"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  const hideHeader = location.pathname === '/login';
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
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(<App/>);
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
