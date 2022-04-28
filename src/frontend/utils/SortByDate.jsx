function sortByDate(data, value) {
  if (value === "oldesttolatest") {
    return [...data].sort((a, b) => {
      return new Date(a.PublishDate) - new Date(b.PublishDate);
    });
  }
  if (value === "latesttooldest") {
    return [...data].sort((a, b) => {
      return new Date(b.PublishDate) - new Date(a.PublishDate);
    });
  }
  return data;
}
export { sortByDate };
