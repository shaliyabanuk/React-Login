import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Authform from './Components/Authform';
import ForgotPassword from'./Components/forgotoassword';
import  Register from './Components/register';
import illustration from './assets/girlwithlaptop.jpg'; // add your image here

function App() {
  return (
    <Router>
    <div className="login-wrapper">
      <div className="form-side">
      <Routes>
            <Route path="/" element={<Authform />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </div>
      <div className="image-side">
        <img src={illustration} alt="Login Illustration" />
      </div>
    </div>
    </Router>
  );
}

export default App;
