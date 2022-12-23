// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const SingleEmployee = (props) => {
// //   const [employee, setEmployee] = useState({});
// //   const [tasks, setTasks] = useState([]);

// //   useEffect(() => {
// //     const fetchEmployee = async () => {
// //       const result = await axios.get(
// //         `http://localhost:3000/employees/${props.match.params.employeeId}`
// //       );
// //       setEmployee(result.data);
// //       setTasks(result.data.tasks);
// //     };
// //     fetchEmployee();
// //   }, []);

// //   const deleteEmployee = async () => {
// //     await axios.delete(
// //       `http://localhost:3000/employees/${props.match.params.employeeId}`
// //     );
// //     props.history.push("/employees");
// //   };

// //   return (
// //     <div>
// //       <h1>
// //         {employee.first_name} {employee.last_name}
// //       </h1>
// //       <p>Department: {employee.department}</p>
// //       <h2>Tasks</h2>
// //       {tasks.length > 0 ? (
// //         <ul>
// //           {tasks.map((task) => (
// //             <li key={task.id}>
// //               <Link to={`/tasks/${task.id}`}>{task.description}</Link>
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>This employee has no tasks assigned.</p>
// //       )}
// //       <Link to={`/employees/${employee.id}/edit`}>Edit</Link>
// //       <button onClick={deleteEmployee}>Delete</button>
// //     </div>
// //   );
// // };

// // export default SingleEmployee;

// import React from "react";
// import "../styles/SingleEmployee.css";
// import employeeImage from "../assets/img/worker.png";

// const SingleEmployee = ({ employee }) => {
//   return (
//     <div className="single-employee-container d-flex flex-column align-items-center mt-5">
//       <div className="employee-info d-flex flex-column align-items-center">
//         <img
//           src={employeeImage}
//           alt={`${employee.name}'s profile`}
//           className="employee-img mb-3"
//         />
//         <h1 className="employee-name mb-3">{employee.name}</h1>
//         <p className="employee-position mb-3">{employee.position}</p>
//       </div>
//       <div className="employee-tasks d-flex flex-column align-items-center mt-5">
//         <h2 className="tasks-title mb-3">Tasks</h2>
//         {employee.tasks.length === 0 ? (
//           <p className="no-tasks mb-3">This employee has no tasks</p>
//         ) : (
//           employee.tasks.map((task) => (
//             <div key={task.id} className="task d-flex align-items-center mb-3">
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 className="mr-3"
//               />
//               <p className="task-description">{task.description}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleEmployee;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const SingleEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/employees/${id}`);
        setEmployee(result.data.employee);
        setTasks(result.data.tasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/employees/${id}`, employee);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/employees/${id}/tasks`, {
        name: newTask,
      });
      setError(null);
      setNewTask("");
      setTasks([...tasks, { name: newTask }]);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await axios.delete(
        `http://localhost:3000/employees/${id}/tasks/${taskId}`
      );
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };

  // ...

  return (
    <div className="single-employee-container">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleEdit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Employee name"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Department"
            value={employee.department}
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button
          variant="danger"
          className="ml-3"
          onClick={() => handleTaskDelete()}
        >
          Delete
        </Button>
        ;
      </Form>
      {tasks.length > 0 ? (
        <>
          <h3 className="mb-3">Tasks</h3>
          <ul className="list-group mb-3">
            {tasks.map((task) => (
              <li key={task._id} className="list-group-item">
                <Link to={`/tasks/${task._id}`}>{task.name}</Link>
                <Button
                  variant="danger"
                  className="float-right"
                  onClick={() => handleTaskDelete(task._id)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>This employee has no tasks assigned.</p>
      )}
      <Form onSubmit={handleTaskSubmit}>
        <Form.Group>
          <Form.Label>Add Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Task name"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default SingleEmployee;
