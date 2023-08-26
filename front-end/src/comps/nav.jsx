import "./css/nav.css";
import user from "./icons/user_.png";
import React, { useState } from "react";
import Login from './login';
import Signup from './signup';
import { Link } from 'react-router-dom';


function NavbarComponent({userType}) {
    const userNavDetails = [
        { label: "Home", path: "/" },
        { label: "Order", path: "/order" },
        // { label: "Track", path: "/track-order" },
        { label: "Contact", path: "/contact" }
    ];

    const adminNavDetails = [
        { label: "Food", path: "/food" },
        { label: "Employee", path: "/employee" },
        { label: "Finance", path: "/finance" }
    ];

    return (
        <nav className="navigationWrapper">
            <ul>
                <li>
                    <div className="logoWrapper">
                        <span className="stylish">Stylish</span>
                        <span className="logo">Logo</span>
                    </div>
                </li>
            </ul>
            <ul className="navigation">
                {(userType === 0 ? userNavDetails : adminNavDetails).map((item, index) => (
                    <li key={index} className="parent">
                        <Link to={item.path} className="link">{item.label}</Link>
                    </li>
                ))}
            </ul>
            {userType === 0 ? (
                <ul className="navigation">
                    <li>
                        <button><Link to="/login" element={<Login />}>Login</Link></button>
                    </li>
                    <li>
                        <button><Link to="/signup" element={<Signup />}>Signup</Link></button>
                    </li>
                </ul>
            ) : (
                <ul className="navigation">
                    <li className="icon">
                        <a className="link" href="#">
                            <img src={user} alt="user icon" />
                        </a>
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


export { NavbarComponent, NavbarComponent_detail}