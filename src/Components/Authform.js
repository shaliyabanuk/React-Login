import React from 'react';
import './Authform.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate(); 
  return (
    <div className="login-form-container">
      <h2 className="logo">Logo Here</h2>
      <p>Welcome back !!!</p>
      <h1>Log In</h1>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <div className="forgot-password">
      
        <Link to="/forgot-password">Forgot Password ?</Link>
      </div>

      <button className="login-btn"  >LOGIN IN →</button>

      <div className="divider">or continue with</div>

      <div className="social-login">
        <button className="google">G</button>
        <button className="github">🐙</button>
        <button className="facebook">f</button>
      </div>

      <div className="signup-link">
        Don’t have an account yet? 
        <button
  className="register-btn"
  onClick={() => navigate('/register')}
  style={{
    background: 'none',
    border: 'none',
    color: '#d573c1',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: 0
  }}
>
  Sign up for free
</button>
      </div>
    </div>
  );
}

export default LoginForm;
