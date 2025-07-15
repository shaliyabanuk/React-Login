import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Authform'; // reuse same styling

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Registered Successfully: ${formData.email}`);
  };

  return (
    <div className="login-form-container">
      <h2 className="logo">Logo Here</h2>
      <p>Welcome to our platform!</p>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <button className="login-btn" type="submit">Create Account →</button>
      </form>

      <div className="divider">or continue with</div>

      <div className="social-login">
        <button className="google">G</button>
        <button className="github">🐙</button>
        <button className="facebook">f</button>
      </div>

      <div className="signup-link">
        Already have an account? <Link to="/">Log in</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
