import React, { useState } from "react";
import EditModal from "./EditModal";

const EmployeeRow = ({ employee }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <>
      <tr>
        <td>{employee.name}</td>
        <td>{employee.gender}</td>
        <td>{employee.salary}</td>
        <td>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </td>
      </tr>
      {isEditing && <EditModal employee={employee} onClose={handleClose} />}
    </>
  );
};

export default EmployeeRow;
