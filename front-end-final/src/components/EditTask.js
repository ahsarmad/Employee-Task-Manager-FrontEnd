import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const EditTask = (props) => {
  const [task, setTask] = useState({
    id: "",
    description: "",
    priorityLevel: "",
    completionStatus: "",
  });

  useEffect(() => {
    const taskId = props.match.params.id;
    axios
      .get(`http://localhost:3000/tasks/${taskId}`)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.match.params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/tasks/${task.id}`, task)
      .then((res) => {
        props.history.push(`/tasks/${task.id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority Level</Form.Label>
        <Form.Control
          type="number"
          name="priorityLevel"
          value={task.priorityLevel}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Completion Status</Form.Label>
        <Form.Control
          type="checkbox"
          name="completionStatus"
          checked={task.completionStatus}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EditTask;
