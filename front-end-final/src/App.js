import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContent />
    </Router>
  );
};

export default App;
