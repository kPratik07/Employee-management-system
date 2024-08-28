import React, { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import "./EditModal.css"; // Separate CSS file for better organization

const EditModal = ({ employee, onClose }) => {
  const { editEmployee } = useContext(EmployeeContext);
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    editEmployee(editedEmployee);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Edit Employee</h2>
        <div className="modal-body">
          <label className="modal-label">
            Name:
            <input
              type="text"
              name="name"
              value={editedEmployee.name}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            Gender:
            <select
              name="gender"
              value={editedEmployee.gender}
              onChange={handleChange}
              className="modal-input"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label className="modal-label">
            Salary:
            <input
              type="number"
              name="salary"
              value={editedEmployee.salary}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button className="modal-button save" onClick={handleSave}>
            Save
          </button>
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
