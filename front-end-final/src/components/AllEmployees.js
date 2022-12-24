import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AllEmployees.css";
import employeeImage from "../assets/img/worker.png";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, [location.pathname]);

  const handleDelete = (id) => {
    // Make a DELETE request to delete the employee with the specified id
    fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Remove the deleted employee from the list of employees
        setEmployees(employees.filter((employee) => employee.id !== id));
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">All Employees</h1>
      <div className="card-columns">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="card text-center shadow-lg employee-card"
          >
            <img src={employeeImage} className="card-img" alt="Employee" />
            <div className="card-body">
              <h5 className="card-title">
                {employee.firstName} {employee.lastName}
              </h5>
              <p className="card-text">{employee.department}</p>
              <div className="btn-group">
                <div>
                  <Link
                    to={`/employees/${employee.id}`}
                    className="btn btn-primary view-details-btn"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployees;
