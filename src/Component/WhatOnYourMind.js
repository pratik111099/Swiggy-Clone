import React, { useRef } from "react";
import { IMG_CDN_URL } from "../utils/Constant/config";
import { useNavigate } from "react-router-dom";

const WhatOnYourMind = ({ whatOnYourMind }) => {
    console.log("🚀 ~ WhatOnYourMind ~ whatOnYourMind:", whatOnYourMind);
    const carouselRef = useRef();
    const navigate = useNavigate();

    const navigateCarousel = (direction) => {
        const carousel = carouselRef.current;
        const scroll =
            direction === "left"
                ? carousel.scrollLeft - carousel.offsetWidth - 35
                : carousel.scrollLeft + carousel.offsetWidth + 30;

        carousel.scrollTo({
            left: scroll,
            behavior: "smooth",
        });
    };
    return (
        <div className="">
            <div className="flex justify-between">
                <h1>WhatOnYourMind</h1>
                <div className="flex gap-2">
                    <p onClick={() => navigateCarousel("left")}>left</p>
                    <p onClick={() => navigateCarousel("right")}>right</p>
                </div>
            </div>
            <div className="flex gap-12 overflow-hidden" ref={carouselRef}>
                {whatOnYourMind?.map((item) => {
                    const link = item.action.link;
                    const collectionId = link.slice(35, 40);

                    return (
                        <div key={item?.id} className="w-36 flex-shrink-0">
                            <img
                                src={IMG_CDN_URL + item?.imageId}
                                alt={item?.action?.text}
                                className="cursor-pointer"
                                onClick={() =>
                                    navigate(`/details/${collectionId}`)
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhatOnYourMind;
