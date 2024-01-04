import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Amplify from "./pages/auth/Amplify";
import Auth0 from "./pages/auth/Auth0";
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
          <Route path="/auth/amplify" element={<Amplify />} />
          <Route path="/auth/auth0" element={<Auth0 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
