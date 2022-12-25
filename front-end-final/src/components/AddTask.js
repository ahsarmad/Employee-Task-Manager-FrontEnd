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
      await axios.post(`http://localhost:3000/tasks`, {
        employeeId: assignToEmployee,
        description,
        priorityLevel,
        completionStatus,
      });

      setSuccess("Task added successfully");
      setError(null);
      setDescription("");
      setPriorityLevel("");
      setCompletionStatus("");
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
          <p className="priority-level-note">
            (1 being the lowest, 5 being the highest)
          </p>
          <select
            name="priorityLevel"
            id="priorityLevel"
            value={priorityLevel}
            onChange={(e) => setPriorityLevel(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a priority level
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="completionStatus">Completion Status</label>
          <select
            name="completionStatus"
            id="completionStatus"
            value={completionStatus}
            onChange={(e) => setCompletionStatus(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a completion status
            </option>
            <option value="false">Not Complete</option>
            <option value="true">Complete</option>
          </select>
        </div>
        <button type="submit" className="btn submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};
export default AddTask;
