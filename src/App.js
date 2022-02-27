import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route index element={<Register />} /> */}
          {/* <Route index element={<Login />} /> */}
          <Route index element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
