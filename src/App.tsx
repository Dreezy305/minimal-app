import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Jwt from "./pages/auth/Jwt";

function App() {
  return (
    <div id="app" role="application" className="overflow-hidden h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/auth/jwt"} />} />
          <Route path="/auth/jwt" element={<Jwt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
