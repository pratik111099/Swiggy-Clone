import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
    const { cartItem } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="mx-auto w-2/5 m-10">
            <div className="flex justify-between border-b-2">
                <h1 className="font-bold text-lg mx-3 pt-2">Cart</h1>
                <button
                    onClick={handleClearCart}
                    className="bg-red-500 border-2 p-2 rounded-md text-white"
                >
                    Clear Cart
                </button>
            </div>
            <ul className="flex-col justify-center w-5/5">
                {cartItem?.map((item, i) => (
                    <li key={i} className="border-2 m-3 p-2">
                        {item?.card?.info?.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
