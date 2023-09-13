import React, { useState } from 'react';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login_Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const navigate = useNavigate(); // Hook for navigation
  const handleAdmin = async (e) => {
    e.preventDefault()
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password,role}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    result = await result.json();
    console.log(result);

    if (result.message) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("isAdmin",result.role)
      navigate('/homepage_admin');

      // alert(result.message); // Show the error message to the user
    } else if (result.error) {
      alert(result.error); // Show the success message to the user
    }
    
  };

  return (
    <div className="login-container">
      <form onSubmit={handleAdmin} className="login-box">
        <h2>Login as Admin</h2>
        <input className='input-box'
        required
          type="email"
          placeholder="admin@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='input-box'
          type="password"
          required
          placeholder="abc123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login-btn'>
        <span className='login-guide'><Link to={"/login"}><p>Login as User</p></Link><Link to='./forgot_pass'><p>Forgot Password</p></Link></span>

          {/* <button className='input-box' onClick={handleUser}>Login as User</button> */}
          <button className='input-box'>Login as Admin</button>
        </div>
      </form>
    </div>
  );
};

export default Login_Admin;
