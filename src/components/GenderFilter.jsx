import React from "react";

const GenderFilter = ({ gender, setGender }) => {
  return (
    <select value={gender} onChange={(e) => setGender(e.target.value)}>
      <option value="">All</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  );
};

export default GenderFilter;
