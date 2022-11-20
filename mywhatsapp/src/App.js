import React from "react";
import Section from "./components/section";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Section/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
