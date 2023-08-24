import Homepage from './comps/homepage_user';
// import ErrorPage from './comps/ErrorPage';
import Login from './comps/login';
import Signup from './comps/signup';
import './App.css';
import React,{useState,createContext} from 'react';
import {  BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import {NavbarComponent as Navbar} from "./comps/nav"
import AdminPage from './comps/homepage_admin' 
import Order_Detail from './comps/order'
import Track_Order from './comps/track-order';

function App() {


  return (
    <Router>
        <Navbar userType={0} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path="/homepage_admin" element={<AdminPage/>} />
          <Route exact path="/order" element={<Order_Detail/>} />
          <Route exact path="/track-order" element={<Track_Order/>} />
        </Routes>
    </Router>
  )
}

export default App;
