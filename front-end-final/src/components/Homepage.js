import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container container text-center">
      <h1 className="my-5 homepage-title">
        Welcome to the Task Management App!
      </h1>
      <div className="d-flex flex-column align-items-center homepage-btns">
        <Link
          to="/employees"
          className="btn btn-primary btn-lg mb-3 homepage-btn"
        >
          View All Employees
        </Link>
        <Link to="/tasks" className="btn btn-primary btn-lg mb-3 homepage-btn">
          View All Tasks
        </Link>
        <Link
          to="/add-employee"
          className="btn btn-success btn-lg mb-3 homepage-btn"
        >
          Create New Employee
        </Link>
        <Link
          to="/add-task"
          className="btn btn-success btn-lg mb-3 homepage-btn"
        >
          Create New Task
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
