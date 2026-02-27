import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personality from "./pages/Personality";
import Home from './pages/Hhome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Comp from './pages/Comp';
import Preference from "./pages/Preference";
import Dashboard from "./pages/Dashboard";
import Mid from "./pages/Mid";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personality" element={<Personality />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Comp" element={<Comp />} />
        <Route path="/Preference" element={<Preference />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Mid" element={<Mid />} />
      </Routes>
  );
}

export default App;