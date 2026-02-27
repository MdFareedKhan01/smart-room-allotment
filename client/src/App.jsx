import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personality from "./pages/Personality";
import Home from './pages/Hhome';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personality" element={<Personality />} />
      </Routes>
  );
}

export default App;