import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Experiences from "./routes/Experiences";
import About from "./routes/About";
import Project from "./routes/Project";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
