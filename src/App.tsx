import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Firebase from "./pages/auth/Firebase";
import Jwt from "./pages/auth/Jwt";

function App() {
  return (
    <div id="app" role="application" className="overflow-hidden h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/auth/jwt"} />} />
          <Route path="/auth/jwt" element={<Jwt />} />
          <Route path="/auth/firebase" element={<Firebase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
