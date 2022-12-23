// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// const AddTask = ({ employeeId }) => {
//   const [description, setDescription] = useState("");
//   const [priorityLevel, setPriorityLevel] = useState("");
//   const [completionStatus, setCompletionStatus] = useState(false);
//   const history = useHistory();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(`/employees/${employeeId}/tasks`, {
//         description,
//         priorityLevel,
//         completionStatus,
//       });
//       history.push(`/employees/${employeeId}`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Description:
//         <input
//           type="text"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Priority Level:
//         <input
//           type="text"
//           value={priorityLevel}
//           onChange={(event) => setPriorityLevel(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Completion Status:
//         <input
//           type="checkbox"
//           checked={completionStatus}
//           onChange={(event) => setCompletionStatus(event.target.checked)}
//         />
//       </label>
//       <br />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AddTask.css";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [completionStatus, setCompletionStatus] = useState("");
  const [assignToEmployee, setAssignToEmployee] = useState("");
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/tasks", {
        description,
        priorityLevel,
        completionStatus,
        assignToEmployee,
      });
      setSuccess(res.data.message);
      setError(null);
      setDescription("");
      setPriorityLevel("");
      setCompletionStatus("");
      setAssignToEmployee("");
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(null);
    }
  };
  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Add Task</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className="form-input">
          <label htmlFor="assignToEmployee">Assign To Employee</label>
          <select
            name="assignToEmployee"
            id="assignToEmployee"
            value={assignToEmployee}
            onChange={(e) => setAssignToEmployee(e.target.value)}
            required
          >
            <option value="" disabled>
              Select an employee
            </option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.firstName} {employee.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-input">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-input">
          <label htmlFor="priorityLevel">Priority Level</label>
          <input
            type="number"
            name="priorityLevel"
            id="priorityLevel"
            min="1"
            max="10"
            value={priorityLevel}
            onChange={(e) => setPriorityLevel(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="completionStatus">Completion Status</label>
          <input
            type="checkbox"
            name="completionStatus"
            id="completionStatus"
            checked={completionStatus}
            onChange={(e) => setCompletionStatus(e.target.checked)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
