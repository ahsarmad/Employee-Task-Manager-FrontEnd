import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const reloadPage = () => {
    window.location.reload();
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };
  const [navbarColor, setNavbarColor] = useState("");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-3"
      style={{
        backgroundColor: navbarColor,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          onMouseEnter={() => setNavbarColor("#001424")}
          onMouseLeave={() => setNavbarColor("")}
        >
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
                onMouseEnter={() => setNavbarColor("#001424")}
                onMouseLeave={() => setNavbarColor("")}
                onClick={reloadPage}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/employees"
                onMouseEnter={() => setNavbarColor("#001424")}
                onMouseLeave={() => setNavbarColor("")}
                onClick={reloadPage}
              >
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/tasks"
                onMouseEnter={() => setNavbarColor("#001424")}
                onMouseLeave={() => setNavbarColor("")}
                onClick={reloadPage}
              >
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-employee"
                onMouseEnter={() => setNavbarColor("#001424")}
                onMouseLeave={() => setNavbarColor("")}
                onClick={reloadPage}
              >
                Add Employee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-task"
                onMouseEnter={() => setNavbarColor("#001424")}
                onMouseLeave={() => setNavbarColor("")}
                onClick={reloadPage}
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
