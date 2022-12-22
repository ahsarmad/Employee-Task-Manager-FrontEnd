import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Task Management App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li
            className={
              "nav-item" + (location.pathname === "/employees" ? " active" : "")
            }
          >
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
          <li
            className={
              "nav-item" + (location.pathname === "/tasks" ? " active" : "")
            }
          >
            <Link className="nav-link" to="/tasks">
              Tasks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
