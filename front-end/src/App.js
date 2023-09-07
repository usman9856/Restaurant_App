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
import Login_Admin from './comps/login_admin';
import Food_page from './comps/food';
import EditForm from './comps/edit_menu';

function App() {

  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // console.log("login",loggedIn);
  // var login_state=0
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path="/homepage_admin" element={<AdminPage/>} />
          <Route exact path="/order" element={<Order_Detail/>} />
          <Route exact path="/track-order" element={<Track_Order/>} />
          <Route exact path="/login_admin" element={<Login_Admin/>} />
          <Route exact path="/food" element={<Food_page/>} />
          <Route exact path="/edit_menu" element={<EditForm/>} />
        </Routes>
    </Router>
  )
}

export default App;
