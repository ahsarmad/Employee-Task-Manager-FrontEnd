import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Form, Col, Alert } from "react-bootstrap";
import "../styles/SingleEmployee.css";
import { useParams } from "react-router-dom";

const SingleEmployee = (props) => {
  const reloadPageEdit = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };
  const reloadPageDelete = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  const [employee, setEmployee] = useState({});
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getEmployee(id);
    getTasks(id);
  }, []);

  const getEmployee = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/employees/${id}`);
      setEmployee(res.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const getTasks = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/tasks/employees/${id}/tasks`
      );
      console.log(res.data); // Log the response data
      setTasks(res.data);
    } catch (err) {
      console.log(err.response.data.message); // Log the error message
      setError(err.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      props.history.push("/employees");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Card className="employee-card">
      <Card.Body>
        <div className="employee-info">
          <h1 className="employee-name">
            {employee.firstName} {employee.lastName}
          </h1>
          <p
            className="employee-department"
            style={{ fontSize: 24, fontWeight: 300 }}
          >
            Department: {employee.department}
          </p>
          <h2 className="tasks-title">Tasks</h2>
          {tasks.length > 0 ? (
            <div className="card-columns">
              {tasks.map((task) => (
                <Card className="task-card" key={task.id}>
                  <Link
                    to={`/tasks/${task.id}`}
                    onClick={reloadPageEdit}
                    className="task-link"
                  >
                    <Card.Body>
                      <Card.Title
                        className="task-description"
                        style={{ fontSize: 24, fontWeight: "bold" }}
                      >
                        {task.description}
                      </Card.Title>
                      <Card.Subtitle
                        className="task-priority"
                        style={{ fontSize: 22, fontWeight: 400 }}
                      >
                        Priority: {task.priorityLevel}
                      </Card.Subtitle>
                      <Card.Text
                        className="task-completion"
                        style={{ fontSize: 22, fontWeight: 400 }}
                      >
                        Completed: {task.completionStatus ? "Yes" : "No"}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div
              className="no-tasks"
              style={{ fontSize: 22, fontWeight: "250" }}
            >
              No tasks assigned
            </div>
          )}
        </div>

        <div className="employee-actions">
          <Button
            as={Link}
            to={`/employees/edit/${employee.id}`}
            variant="primary"
            className="edit-btn"
            onClick={reloadPageEdit}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              handleDelete(employee.id);
              reloadPageDelete();
            }}
            variant="danger"
            className="delete-btn"
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleEmployee;
