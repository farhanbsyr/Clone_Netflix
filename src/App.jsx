import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </Router>
  );
};

export default App;
