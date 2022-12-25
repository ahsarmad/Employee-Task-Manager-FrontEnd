import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EditEmployee.css";

const EditEmployee = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const employeeId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${employeeId}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setDepartment(response.data.department);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [employeeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/employees/${employeeId}`, {
        firstName,
        lastName,
        department,
      });
      setSuccess("Employee updated successfully");
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(null);
    }
  };

  return (
    <div className="add-employee-container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Edit Employee</h1>
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
        <button type="submit" className="btn submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default EditEmployee;
