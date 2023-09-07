import "./css/nav.css";
import user from "./icons/user_.png";
import cart from "./icons/cart.png";
import React, { useState } from "react";
import Login from './login';
import Signup from './signup';
import { Link, useNavigate } from 'react-router-dom';

function NavbarComponent() {
    const loggedIn = window.localStorage.getItem("isLoggedIn");
    const isAdmin = window.localStorage.getItem("isAdmin");
    const navigate = useNavigate(); // Hook for navigation

    const handleSignout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.setItem("isAdmin", 'user');
        
        navigate('/');
    }

    const userNavDetails = [
        { label: "Home", path: "/" },
        { label: "Order", path: "/order" },
        { label: "Contact", path: "/contact" }
    ];

    const adminNavDetails = [
        { label: "Home", path: "/homepage_admin" },
        { label: "Food", path: "/food" },
        { label: "Employee", path: "/employee" },
    ];

    return (
        <nav className="navigationWrapper">
            <ul className="logo-list">
                <li>
                    <div className="logoWrapper">
                        <span className="stylish">Stylish</span>
                        <span className="logo">Logo</span>
                    </div>
                </li>
            </ul>
            <ul className="navigation1">
                {(isAdmin === "user" ? userNavDetails : adminNavDetails).map((item, index) => (
                    <li key={index} className="parent">
                        <Link to={item.path} className="link">{item.label}</Link>
                    </li>
                ))}
            </ul>
            {loggedIn ? (
                // className="navigation" 
                <ul className="navigation" >
                <li  >
                  <button className="btn-ca" onClick={handleSignout} onTer>Sign out</button>
                </li>
                <li >
                  <button className="btn-c" ><img className="cart-icon" src={cart} alt="user cart" /></button>
                </li>
              </ul>
            ) : (
                <ul className="navigation1">
                    <li>
                        <button className="btn-u"><Link to="/login" element={<Login />}>Login</Link></button>
                    </li>
                    <li>
                        <button className="btn-u"><Link to="/signup" element={<Signup />}>Signup</Link></button>
                    </li>
                </ul>
            )}
        </nav>
    );
}

function NavbarComponent_detail({ selectedOption, handleOptionChange }) {
    return (
        <nav className='admin_detail'>
            <ul id='admin-func'>
                <li className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionChange('Restaurant')}>Restaurant</li>
                <li className={selectedOption === 'Takeaway' ? 'active' : ''} onClick={() => handleOptionChange('Takeaway')}>Takeaway</li>
                <li className={selectedOption === 'Delivery' ? 'active' : ''} onClick={() => handleOptionChange('Delivery')}>Delivery</li>
            </ul>
        </nav>
    );
}

export { NavbarComponent, NavbarComponent_detail };
