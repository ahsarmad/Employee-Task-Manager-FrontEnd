import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Form, Col, Alert } from "react-bootstrap";
import "../styles/SingleTask.css";

const SingleTask = (props) => {
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const taskId = props.match.params.id;
    getTask(taskId);
  }, []);

  const getTask = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/tasks/${id}`);
      setTask(res.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      props.history.push("/tasks");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Card className="task-card">
      <Card.Body>
        <Card.Title className="task-description">{task.description}</Card.Title>
        <Card.Subtitle className="task-priority">
          Priority: {task.priorityLevel}
        </Card.Subtitle>
        <Card.Text className="task-completion">
          Completed: {task.completionStatus ? "Yes" : "No"}
        </Card.Text>
        <Button
          as={Link}
          to={`/tasks/edit/${task.id}`}
          variant="primary"
          className="edit-btn"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(task.id)}
          variant="danger"
          className="delete-btn"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleTask;
