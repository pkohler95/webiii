import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { LandingPage } from './components/LandingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Dashboard } from './components/Dashboard';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { FirebaseContext } from './context/firebase';

function App() {
  const [user, setUser] = useState('Hello');
  return (
    <div className=" bg-[#FFF1E5] w-full h-screen font-mont">
      <FirebaseContext.Provider value={{ user, setUser }}>
        <Router>
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
        </Router>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
