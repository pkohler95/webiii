import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Dashboard } from "./components/Dashboard";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { ResetPassword } from "./components/ResetPassword";

function App() {
  return (
    <div className=" bg-[#FFF1E5] w-full h-screen font-mont">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
