// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personality from "./pages/Personality";
import Home from './pages/Hhome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personality" element={<Personality />} />
      </Routes>
    </Router>
  );
}

export default App;