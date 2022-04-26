const FilterByCategory = (data, selectedCategory) => {
  if (selectedCategory !== "ALL") {
    return [...data].filter(
      (dat) => dat.Category.toUpperCase() === selectedCategory.toUpperCase()
    );
  }

  return data;
};
export { FilterByCategory };
