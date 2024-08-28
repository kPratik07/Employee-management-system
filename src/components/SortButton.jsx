import React from "react";

const SortButton = ({ sortOrder, setSortOrder }) => {
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <button onClick={toggleSortOrder}>Sort by Salary ({sortOrder})</button>
  );
};

export default SortButton;
