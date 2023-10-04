import React, { useState } from 'react';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate(); // Hook for navigation

  const handleUser = async (e) => {
    e.preventDefault()
    let result = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:5000/login`, {
      method: "POST",
      body: JSON.stringify({ email, password,role}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    result = await result.json();
    console.warn(result);

    if (result.message) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("isAdmin",result.role)
      // window.localStorage.removeItem("isLoggedIn");
      // alert(result.message); // Show the error message to the user
      navigate('/');
    } else if (result.error) {
      alert(result.error); // Show the success message to the user
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleUser} className="login-box">
        <h2>Login</h2>
        <input className='input-box'
        required
          type="email"
          placeholder="user@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='input-box'
        required
          type="password"
          placeholder="abc123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login-btn'>
          <span className='login-guide'><Link to={"/login_admin"}><p>Login as Admin</p></Link><Link to='./forgot_pass'><p>Forgot Password</p></Link></span>
          <button className='input-box'>Login as User</button>
          {/* <button className='input-box' onClick={handleAdmin}>Login as Admin</button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
