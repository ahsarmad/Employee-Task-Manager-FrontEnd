// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//   return (
//     <div className="container homepage">
//       <h1 className="text-center">Welcome to the Task Management App!</h1>
//       <div className="text-center">
//         <Link className="btn btn-primary" to="/employees">
//           View All Employees
//         </Link>
//         <Link className="btn btn-primary" to="/tasks">
//           View All Tasks
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container homepage" style={{ backgroundColor: "#f5f5f5" }}>
      <h1 className="text-center mb-4 mt-4">
        Welcome to the Task Management App!
      </h1>
      <div className="text-center">
        <Link className="btn btn-primary btn-lg mr-4" to="/employees">
          View All Employees
        </Link>
        <Link className="btn btn-primary btn-lg mr-4" to="/tasks">
          View All Tasks
        </Link>
        <Link className="btn btn-success btn-lg mr-4" to="/employees/new">
          Create New Employee
        </Link>
        <Link className="btn btn-success btn-lg" to="/tasks/new">
          Create New Task
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
