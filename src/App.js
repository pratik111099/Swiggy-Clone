import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Pages/Body";
import Services from "./Pages/Services";
import ErrorRoute from "./Component/ErrorRoute";
import RestaurantMenu from "./Pages/RestaurantMenu";
import Shimmer from "./Shimmer/Shimmer";

import "./Index.css";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import store from "./Redux/store";
import DetailsPage from "./Pages/DetailsPage";

const About = lazy(() => import("./Pages/About"));
const Instamart = lazy(() => import("./Pages/Instamart"));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading.......</h1>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/menu/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/details/:id",
                element: <DetailsPage />,
            },
        ],
    },
]);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);
