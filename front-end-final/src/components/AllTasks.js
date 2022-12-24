import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AllEmployees.css";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [location.pathname]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">All Tasks</h1>
      <div className="card-columns">
        {tasks.map((task) => (
          <div key={task.id} className="card text-center shadow-lg">
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>
              <Link
                to={`/tasks/${task.id}`}
                className="btn btn-primary view-details-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
