import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newEmployee = {
        firstName,
        lastName,
        department,
      };
      await axios.post("http://localhost:3000/employees", newEmployee);
      setFirstName("");
      setLastName("");
      setDepartment("");
      // navigate to the all-employees view here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          required
        />
      </Form.Group>
      {error && <p>{error}</p>}
      <Button type="submit">Add Employee</Button>
    </form>
  );
};

export default AddEmployee;
