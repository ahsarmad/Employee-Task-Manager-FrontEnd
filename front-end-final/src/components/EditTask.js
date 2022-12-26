import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EditTask.css";

const EditTask = ({ match }) => {
  const [task, setTask] = useState({});
  const [description, setDescription] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [completionStatus, setCompletionStatus] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/tasks/${match.params.id}`)
      .then((response) => {
        setTask(response.data);
        setDescription(response.data.description);
        setPriorityLevel(response.data.priorityLevel);
        setCompletionStatus(response.data.completionStatus);
      })

      .catch((error) => console.error(error));
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = {
        description,
        priorityLevel,
        completionStatus,
      };
      axios.put(`http://localhost:3000/tasks/${match.params.id}`, updatedTask);
      setSuccess("Task updated successfully");

      setError(null);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(null);
    }
  };

  return (
    <div className="edit-task-container">
      <div className="container mt-5">
        <h1 className="text-center mb-5 form-title">Edit Task</h1>
        {error && (
          <p className="error" style={{ textAlign: "center" }}>
            {error}
          </p>
        )}
        {success && (
          <p className="success" style={{ textAlign: "center" }}>
            {success}
          </p>
        )}
        <form onSubmit={handleSubmit}>
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
          <div className="form-input form-check">
            <input
              type="checkbox"
              style={{ width: 30, height: 30 }}
              className="form-check-input"
              id="completionStatus"
              checked={completionStatus}
              onChange={(event) => setCompletionStatus(event.target.checked)}
            />
            <label
              className="form-check-label"
              htmlFor="completionStatus"
              style={{ marginTop: -10 }}
            >
              Completed
            </label>
          </div>
          <button type="submit" className="btn submit-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
