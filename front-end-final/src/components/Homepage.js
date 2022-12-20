import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Employees</Card.Header>
        <Card.Body>
          <Card.Title>Manage Your Employees</Card.Title>
          <Card.Text>
            View, add, edit, and delete your employees using the buttons below.
          </Card.Text>
          <Button variant="primary" as={Link} to="/employees">
            View Employees
          </Button>
          <Button variant="secondary" as={Link} to="/add-employee">
            Add Employee
          </Button>
        </Card.Body>
      </Card>
      <br />
      <Card className="text-center">
        <Card.Header>Tasks</Card.Header>
        <Card.Body>
          <Card.Title>Manage Your Tasks</Card.Title>
          <Card.Text>
            View, add, edit, and delete your tasks using the buttons below.
          </Card.Text>
          <Button variant="primary" as={Link} to="/tasks">
            View Tasks
          </Button>
          <Button variant="secondary" as={Link} to="/add-task">
            Add Task
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomePage;
