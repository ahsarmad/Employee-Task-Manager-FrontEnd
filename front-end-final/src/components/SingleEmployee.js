import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Form, Col, Alert } from "react-bootstrap";
import "../styles/SingleEmployee.css";

const SingleEmployee = (props) => {
  const [employee, setEmployee] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const employeeId = props.match.params.id;
    getEmployee(employeeId);
  }, []);

  const getEmployee = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/employees/${id}`);
      setEmployee(res.data);
    } catch (err) {
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
          <p className="employee-department">
            Department: {employee.department}
          </p>
        </div>
        <div className="employee-actions">
          <Button
            as={Link}
            to={`/employees/edit/${employee.id}`}
            variant="primary"
            className="edit-btn"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(employee.id)}
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
