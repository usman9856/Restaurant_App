// import { Route, Routes, Link } from 'react-router-dom';
import MCard from "./menuCard"
import {NavbarComponent_user} from "./nav"
import "./css/homepage_user.css"
import Resdetail from "./footer"
// import Signup from './signup';
import React from "react"



export default function Homepage(){
    //for now let it be. but we are going to change the lenth to not allow more than 100 letters for detail.
    // {/* <p>Pending: Items for front end user:</p>
    // <ul>
    //     <li>user icon menu options</li>
    //     <li>js functionalities</li>
    // </ul> */}
    let detail = "Red Lobster one of our famour cusine dish. Allows you to experience a variety of flavors in every bites" 
    return (
        <>
        <div id="header">
        <NavbarComponent_user type={0}/>
        </div>
        <body>
        <div id="body">
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>  
        </div>
        </body>        
        <footer>
        <div id="footer">
           <Resdetail/>
        </div>
        </footer>
        </>
    )
}