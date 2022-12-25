import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; // Add this line to import your custom CSS

const Navbar = () => {
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1); // delay of 10 milliseconds
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Task Manager
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-nav ml-auto">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" onClick={reloadPage}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/employees"
                onClick={reloadPage}
              >
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tasks" onClick={reloadPage}>
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-employee"
                onClick={reloadPage}
              >
                Add Employee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-task" onClick={reloadPage}>
                Add Task
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
