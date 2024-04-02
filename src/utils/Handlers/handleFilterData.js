export const filterdata = (searchInput, restaurant) => {
  return restaurant.filter((item) =>
    item?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
};
