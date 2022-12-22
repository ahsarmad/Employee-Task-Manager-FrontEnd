import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleEmployee = (props) => {
  const [employee, setEmployee] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      const result = await axios.get(
        `http://localhost:3000/employees/${props.match.params.employeeId}`
      );
      setEmployee(result.data);
      setTasks(result.data.tasks);
    };
    fetchEmployee();
  }, []);

  const deleteEmployee = async () => {
    await axios.delete(
      `http://localhost:3000/employees/${props.match.params.employeeId}`
    );
    props.history.push("/employees");
  };

  return (
    <div>
      <h1>
        {employee.first_name} {employee.last_name}
      </h1>
      <p>Department: {employee.department}</p>
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.description}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>This employee has no tasks assigned.</p>
      )}
      <Link to={`/employees/${employee.id}/edit`}>Edit</Link>
      <button onClick={deleteEmployee}>Delete</button>
    </div>
  );
};

export default SingleEmployee;
