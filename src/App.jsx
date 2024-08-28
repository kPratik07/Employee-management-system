import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import SearchBar from "./components/SearchBar";
import GenderFilter from "./components/GenderFilter";
import SortButton from "./components/SortButton";
import { EmployeeProvider } from "./context/EmployeeContext";
import useSearch from "./hooks/useSearch";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <EmployeeProvider>
      <div className="App">
        <h1>Employee Management System</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <GenderFilter gender={gender} setGender={setGender} />
        <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <EmployeeTable
          searchTerm={searchTerm}
          gender={gender}
          sortOrder={sortOrder}
        />
      </div>
    </EmployeeProvider>
  );
};

export default App;
