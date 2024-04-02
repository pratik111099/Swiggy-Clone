import { useEffect, useState } from "react";
import RestaurantCart from "../Component/RestaurantCart";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/Handlers/handleFilterData";
import useNetwork from "../utils/Custome Hooks/useNetwork";
import { SWIGGY_API_URL } from "../utils/Constant/config";
import Wrapper from "../Component/Wrapper";
import WhatOnYourMind from "../Component/WhatOnYourMind";
import TopRestaurant from "../Component/TopRestaurant";
import AllRestaurant from "../Component/AllRestaurant";

const Body = () => {
    const [whatOnYourMind, setWhatOnYourMind] = useState("");
    const [topBrandForYou, setTopBrandForYou] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [isOffline] = useNetwork();

    useEffect(() => {
        getApiData();
    }, []);

    async function getApiData() {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();

        json?.data?.cards.map((item) => {
            if (item?.card?.card?.id === "whats_on_your_mind") {
                setWhatOnYourMind(item?.card?.card?.imageGridCards?.info);
            }
            if (item?.card?.card?.id === "top_brands_for_you") {
                setTopBrandForYou(
                    item?.card?.card?.gridElements?.infoWithStyle?.restaurants
                );
            }
            if (item?.card?.card?.id === "restaurant_grid_listing") {
                setAllRestaurant(
                    item?.card?.card?.gridElements?.infoWithStyle?.restaurants
                );
                setFilterRestaurant(
                    json?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants
                );
            }
        });
    }

    if (isOffline) {
        return <h1>⛔ Opps!!! You are offline Plz.. check your Internate</h1>;
    }

    return allRestaurant?.length === 0 ? (
        <Shimmer />
    ) : (
        <Wrapper>
            <WhatOnYourMind whatOnYourMind={whatOnYourMind} />
            <TopRestaurant />
            <AllRestaurant />
            <>
                <div className="mx-auto my-8 w-2/5 flex justify-between rounded-3xl border-2">
                    <input
                        type="text"
                        className="outline-none p-2 w-80 rounded-s-3xl px-4"
                        placeholder="Enter Your Restraurant Name"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                            setFilterRestaurant(allRestaurant);
                        }}
                    />
                    <button
                        className="py-2 px-4 bg-red-400 text-white font-semibold rounded-e-3xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                        onClick={() => {
                            let filter = filterdata(searchInput, allRestaurant);
                            setFilterRestaurant(filter);
                        }}
                    >
                        Search
                    </button>
                </div>
                {filterRestaurant?.length === 0 ? (
                    <h1>No Result Found</h1>
                ) : (
                    <>
                        <h2 className="font-bold text-3xl m-3">
                            Top Restaurant in Pune:{" "}
                        </h2>
                        <div className="flex flex-wrap justify-between m-4">
                            {filterRestaurant?.map((item) => (
                                <Link
                                    key={item.info.id}
                                    to={`/menu/${item.info.id}`}
                                >
                                    <RestaurantCart {...item.info} />
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default Body;
