// import { Route, Routes, Link } from 'react-router-dom';
import MCard from "./menuCard"
import {NavbarComponent_user} from "./nav"
import "./css/homepage_user.css"
import Resdetail from "./footer"
// import Signup from './signup';
import React from "react"



export default function Homepage(){

    const display_dish = () => {
        let data = [
            ["Lobster", "Red Lobster one of our famous cuisine dish. Allows you to experience a variety of flavors in every bite.", "200"],
            ["Shrimp", "Delicious shrimp seasoned to perfection. A favorite among seafood lovers.", "150"],
            ["Salmon", "Fresh salmon fillet grilled to perfection, served with a side of vegetables.", "180"],
            ["Crab Cakes", "Homemade crab cakes made with real crab meat and secret spices.", "220"],
            ["Fish Tacos", "Tasty fish tacos topped with tangy slaw and zesty salsa.", "160"],
            ["Clam Chowder", "Creamy clam chowder loaded with tender clams and potatoes.", "120"],
            ["Seafood Paella", "A flavorful seafood paella with a mix of shrimp, mussels, and squid.", "250"],
            ["Oyster Platter", "Freshly shucked oysters served on a bed of ice, perfect for sharing.", "190"],
            ["Cajun Crawfish", "Spicy cajun-style crawfish boiled to perfection, a true Southern delight.", "210"],
            ["Grilled Octopus", "Tender grilled octopus drizzled with olive oil and herbs.", "170"],
            // Add more items here...
        ];
    
        const dishCards = data.map((dish, index) => (
            <MCard key={index} title={dish[0]} detail={dish[1]} price={`$${dish[2]}`} />
        ));
    
        return dishCards;
    }
    

    let detail = "" 
    return (
        <>
        <div id="header">
        {/* <NavbarComponent_user type={0}/> */}
        </div>
        <body>
        <div id="body">
            {display_dish()}
         {/* <MCard title="Lobster" detail={detail} price = "$200"/>  
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
         <MCard title="Lobster" detail={detail} price = "$200"/>  
         <MCard title="Lobster" detail={detail} price = "$200"/>   */}

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