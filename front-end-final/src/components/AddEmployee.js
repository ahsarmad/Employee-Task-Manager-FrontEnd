import React, { useState } from "react";
import axios from "axios";
import "../styles/AddEmployee.css";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/employees", {
        firstName,
        lastName,
        department,
      });
      setSuccess("Employee added successfully");
      setError(null);
      setFirstName("");
      setLastName("");
      setDepartment("");
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(null);
    }
  };

  return (
    <div className="add-employee-container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Add Employee</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className="form-input">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
