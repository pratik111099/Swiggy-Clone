import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constant/config";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurantMenu from "../utils/Custome Hooks/useRestaurantMenu";
import Carousel from "../Component/Carousel";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/cartSlice";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant] = useRestaurantMenu(id);
    console.log("🚀 ~ RestaurantMenu ~ restaurant:", restaurant);
    const dispatch = useDispatch();

    const restaurantInfo = restaurant?.data?.cards[0]?.card?.card?.info;
    const restaurantMenu =
        restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
            ?.card?.card?.itemCards;
    console.log(
        "🚀 ~ RestaurantMenu ~ restaurantMenu:",
        restaurantMenu,
        restaurantInfo
    );

    const handleCart = (item) => {
        dispatch(addData(item));
    };

    return !(restaurantMenu?.length > 0) ? (
        <Shimmer />
    ) : (
        <>
            <div className="mx-72 my-10">
                <div className="flex justify-between align-middle border-b-2">
                    <div>
                        <h1 className="font-bold text-xl">
                            {restaurantInfo?.name}
                        </h1>
                        <p>{restaurantInfo?.cuisines.join(", ")}</p>
                        <h4>
                            {restaurantInfo?.areaName +
                                ", " +
                                restaurantInfo?.sla?.lastMileTravelString}
                        </h4>
                        <div className="flex gap-x-3">
                            <img
                                src={`${IMG_CDN_URL}${restaurantInfo?.feeDetails?.icon}`}
                                className="w-5"
                                alt=""
                            />
                            <p>{restaurantInfo?.feeDetails?.message}</p>
                        </div>
                        <p>{restaurantInfo.city}.</p>
                    </div>
                    <div className="border-2 h-16 mt-6 p-1">
                        <p className="text-green-700 font-bold border-b-2">
                            ⭐ {restaurantInfo.avgRating}{" "}
                        </p>
                        <p className="text-sm text-gray-900 py-2">
                            {restaurantInfo.totalRatingsString}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Carousel restaurant={restaurant} />
                </div>
                <div className="my-5">
                    <h2 className="font-bold text-xl pb-3 border-b-2">
                        Recommended Menu({restaurantMenu?.length})
                    </h2>
                    <ul className="my-5">
                        {restaurantMenu?.map((item) => (
                            <li key={item.card.info.id}>
                                <div className="flex p-3 border-b-2 gap-x-3 justify-between">
                                    <div className="w-4/5">
                                        <h3 className="font-bold text-md">
                                            {item?.card?.info?.name}
                                        </h3>
                                        <p>
                                            Price:
                                            {item?.card?.info?.variantsV2
                                                ?.variantGroups?.[0]
                                                ?.variations?.[0]?.price ||
                                                item?.card?.info?.price / 100}
                                            💸
                                        </p>
                                        <p>
                                            Rating:
                                            {item.card.info.ratings
                                                .aggregatedRating.rating || ""}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {item.card.info.description}
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                                            className="w-28 h-28 rounded-lg mt-5"
                                            alt=""
                                        />
                                        <button
                                            onClick={() => handleCart(item)}
                                            className="border-2 p-1 rounded-md bg-green-500 text-sm absolute top-28 left-2 shadow-xl text-white"
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RestaurantMenu;
