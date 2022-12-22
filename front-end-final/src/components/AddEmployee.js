import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AddEmployee = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/employees", data)
      .then((res) => {
        history.push("/employees");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add New Employee</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <div className="text-danger">This field is required</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <div className="text-danger">This field is required</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            ref={register({ required: true })}
          />
          {errors.department && (
            <div className="text-danger">This field is required</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
