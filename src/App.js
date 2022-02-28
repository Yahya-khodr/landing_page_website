import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import About from "./pages/about";
import Services from "./pages/services";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
