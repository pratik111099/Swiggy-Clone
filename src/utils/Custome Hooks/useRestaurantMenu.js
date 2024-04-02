import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json);
  }

  return [restaurant];
};

export default useRestaurantMenu;
