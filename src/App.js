import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import About from "./pages/about";
import Services from "./pages/Services";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/about_us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
