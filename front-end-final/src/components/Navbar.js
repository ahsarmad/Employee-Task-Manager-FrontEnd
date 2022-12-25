import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-3"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          Task Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                to="/"
                onMouseEnter={() => setNavbarColor("#2980b9")}
                onMouseLeave={() => setNavbarColor("")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/employees"
                onMouseEnter={() => setNavbarColor("#3498db")}
                onMouseLeave={() => setNavbarColor("")}
              >
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/tasks"
                onMouseEnter={() => setNavbarColor("#5dade2")}
                onMouseLeave={() => setNavbarColor("")}
              >
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-employee"
                onMouseEnter={() => setNavbarColor("#85c1e9")}
                onMouseLeave={() => setNavbarColor("")}
              >
                Add Employee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-task"
                onMouseEnter={() => setNavbarColor("#a5d6e7")}
                onMouseLeave={() => setNavbarColor("")}
              >
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
