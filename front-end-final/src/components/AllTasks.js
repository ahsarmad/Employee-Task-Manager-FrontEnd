import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Form, Col, Alert } from "react-bootstrap";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tasks");
      setTasks(res.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      getTasks();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Card>
        <Card.Header>All Tasks</Card.Header>
        <Card.Body>
          <Card.Title>Task List</Card.Title>
          <Card.Text>
            {tasks.map((task) => (
              <div key={task.id}>
                <Link to={`/tasks/${task.id}`}>{task.description}</Link>
                <Button
                  variant="danger"
                  onClick={() => deleteTask(task.id)}
                  className="float-right"
                >
                  Delete
                </Button>
              </div>
            ))}
          </Card.Text>
          <Button variant="primary" as={Link} to="/tasks/add">
            Add Task
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AllTasks;
