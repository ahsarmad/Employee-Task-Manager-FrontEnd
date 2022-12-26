import React, { Suspense, lazy, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  BrowserRouter,
  withRouter,
} from "react-router-dom";

const Homepage = lazy(() => import("./Homepage"));
const AllEmployees = lazy(() => import("./AllEmployees"));
const SingleEmployee = lazy(() => import("./SingleEmployee"));
const AllTasks = lazy(() => import("./AllTasks"));
const SingleTask = lazy(() => import("./SingleTask"));
const AddEmployee = lazy(() => import("./AddEmployee"));
const EditEmployee = lazy(() => import("./EditEmployee"));
const AddTask = lazy(() => import("./AddTask"));
const EditTask = lazy(() => import("./EditTask"));

const MainContent = ({ location }) => {
  return (
    <main>
      <BrowserRouter>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch location={location}>
          <Route exact path="/" component={withRouter(Homepage)} />
          <Route exact path="/employees" component={withRouter(AllEmployees)} />
          <Route
            exact
            path="/employees/:id"
            component={withRouter(SingleEmployee)}
          />
          <Route
            exact
            path="/employees/edit/:id"
            component={withRouter(EditEmployee)}
          />
          <Route
            exact
            path="/add-employee"
            component={withRouter(AddEmployee)}
          />
          <Route exact path="/tasks" component={withRouter(AllTasks)} />
          <Route exact path="/tasks/:id" component={withRouter(SingleTask)} />
          <Route
            exact
            path="/tasks/edit/:id"
            component={withRouter(EditTask)}
          />
          <Route exact path="/add-task" component={withRouter(AddTask)} />
        </Switch>
        {/* </Suspense> */}
      </BrowserRouter>
    </main>
  );
};

export default withRouter(MainContent);
