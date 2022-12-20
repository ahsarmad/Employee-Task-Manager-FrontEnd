import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AllEmployees from "./AllEmployees";
import SingleEmployee from "./SingleEmployee";
import AllTasks from "./AllTasks";
import SingleTask from "./SingleTask";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

const MainContent = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/employees" component={AllEmployees} />
        <Route exact path="/employees/:id" component={SingleEmployee} />
        <Route exact path="/employees/:id/edit" component={EditEmployee} />
        <Route exact path="/employees/add" component={AddEmployee} />
        <Route exact path="/tasks" component={AllTasks} />
        <Route exact path="/tasks/:id" component={SingleTask} />
        <Route exact path="/tasks/:id/edit" component={EditTask} />
        <Route exact path="/tasks/add" component={AddTask} />
      </Switch>
    </main>
  );
};

export default MainContent;
