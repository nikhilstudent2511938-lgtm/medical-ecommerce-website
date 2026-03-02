import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";
import Login from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login.jsx" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
