import React, { useState } from 'react';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleUser = () => {
    // Implement your login logic here
    // Then navigate to the user's home page
    navigate('/');
  };

  const handleAdmin = () => {
    // Implement your admin login logic here
    // Then navigate to the admin page

    navigate('/homepage_admin');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login-btn'>
          <button onClick={handleUser}>Login as User</button>
          <button onClick={handleAdmin}>Login as Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
