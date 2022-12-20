import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  Col,
  Alert, // Add this line to import Alert
} from "react-bootstrap";

const AllEmployees = (props) => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3000/employees");
      setEmployees(res.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      {error && <Alert variant="danger">{error.message}</Alert>}
      <h1>All Employees</h1>
      {employees.map((employee) => (
        <Card key={employee.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              {employee.firstName} {employee.lastName}
            </Card.Title>
            <Card.Subtitle>{employee.department}</Card.Subtitle>
            <Link to={`/employees/${employee.id}`}>
              <Button variant="primary">View</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllEmployees;
