import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Authform'; // reuse styles

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="login-form-container">
      <h2 className="logo">Reset Password</h2>
      <p>Enter your email address to reset your password</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Send Reset Link</button>
      </form>

      <div className="signup-link" style={{ marginTop: '20px' }}>
        Back to <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
