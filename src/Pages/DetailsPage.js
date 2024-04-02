import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { id } = useParams();
    const [restrantList, setRestrantList] = useState();
    console.log("🚀 ~ DetailsPage ~ restrantList:", restrantList);
    const fetchData = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=${id}&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        );
        const json = await data.json();
        setRestrantList(json);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <div>DetailsPage </div>;
};

export default DetailsPage;
