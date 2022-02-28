import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
