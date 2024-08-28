import React, { useContext } from "react";
import EmployeeRow from "./EmployeeRow";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeTable = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
