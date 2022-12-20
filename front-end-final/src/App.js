import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <MainContent />
      <Footer />
    </Router>
  );
}

export default App;
