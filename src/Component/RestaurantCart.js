import { IMG_CDN_URL } from "../utils/Constant/config";

const RestaurantCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
        <div className="border-2 w-60 my-4 rounded-2xl overflow-hidden">
            <img
                className="w-60 h-44 object-cover rounded-t-2xl hover:scale-110 transition-all"
                src={`${IMG_CDN_URL}${cloudinaryImageId}`}
                alt=""
            />
            <div>
                <h3 className="font-bold text-lg m-2">{name}</h3>
                <hr />
                <p className="mx-2">⭐ {avgRating}</p>
                <p className="m-2">{cuisines.join(", ")}</p>
            </div>
        </div>
    );
};

export default RestaurantCart;
