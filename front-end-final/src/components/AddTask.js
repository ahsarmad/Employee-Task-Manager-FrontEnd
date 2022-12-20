import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddTask(props) {
  const [description, setDescription] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [completionStatus, setCompletionStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/tasks", {
        description,
        priorityLevel,
        completionStatus,
      });
      props.history.push("/all-tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority Level</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter priority level (1-5)"
          value={priorityLevel}
          onChange={(event) => setPriorityLevel(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Completion Status</Form.Label>
        <Form.Control
          type="checkbox"
          checked={completionStatus}
          onChange={(event) => setCompletionStatus(event.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
}

export default withRouter(AddTask);
