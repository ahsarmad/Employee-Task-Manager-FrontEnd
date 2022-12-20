import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const EditEmployee = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const employeeId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${employeeId}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setDepartment(response.data.department);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [employeeId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/employees/${employeeId}`, {
        firstName,
        lastName,
        department,
      })
      .then(() => {
        props.history.push(`/employees/${employeeId}`);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Edit Employee</h1>
      {error && <p className="text-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">Save Changes</Button>
      </Form>
    </div>
  );
};

export default EditEmployee;
