import React, { useState, useEffect } from "react";
import MCard from "./menuCard";
// import { NavbarComponent_user } from "./nav";
import "./css/homepage_user.css";
import Resdetail from "./footer";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    displayDish();
  }, []); // Run this effect only once, on component mount

  const displayDish = async () => {
    try {
      const result = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await result.json();
      setMenuData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const dishCards = menuData.map((dish, index) => (
    <MCard
      key={index}
      name={dish.name}
      description={dish.description}
      // detail={dish.detail} // You need to have the detail field in your menu data
      price={`$${dish.price}`}
      category={dish.category}
      image_url={`${dish.image_url}`}
      spiceness_level={dish.spiceness_level}
      vegetarian={dish.vegetarian}
      vegan={dish.vegan}
      popular={dish.popular}
    />
  ));

  return (
    <>
      {/* <NavbarComponent_user /> */}
      <div id="body">
        {isLoading ? <p>Loading...</p> : dishCards}
      </div>
      <footer>
        <div id="footer">
          <Resdetail />
        </div>
      </footer>
    </>
  );
}








// // import { Route, Routes, Link } from 'react-router-dom';
// import MCard from "./menuCard"
// import {NavbarComponent_user} from "./nav"
// import "./css/homepage_user.css"
// import Resdetail from "./footer"
// // import Signup from './signup';
// import React from "react"



// export default function Homepage(e){


    
//     const display_dish = async () => {
//         e.preventDefault()
//         let result = await fetch("http://localhost:5000/", {
//           method: "GET",
//           body: JSON.stringify({}),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
    
//         let data= await result.json();
//         console.warn(data);


//         // let data = [
//         //     ["Lobster", "Red Lobster one of our famous cuisine dish. Allows you to experience a variety of flavors in every bite.", "200"],
//         //     ["Shrimp", "Delicious shrimp seasoned to perfection. A favorite among seafood lovers.", "150"],
//         //     ["Salmon", "Fresh salmon fillet grilled to perfection, served with a side of vegetables.", "180"],
//         //     ["Crab Cakes", "Homemade crab cakes made with real crab meat and secret spices.", "220"],
//         //     ["Fish Tacos", "Tasty fish tacos topped with tangy slaw and zesty salsa.", "160"],
//         //     ["Clam Chowder", "Creamy clam chowder loaded with tender clams and potatoes.", "120"],
//         //     ["Seafood Paella", "A flavorful seafood paella with a mix of shrimp, mussels, and squid.", "250"],
//         //     ["Oyster Platter", "Freshly shucked oysters served on a bed of ice, perfect for sharing.", "190"],
//         //     ["Cajun Crawfish", "Spicy cajun-style crawfish boiled to perfection, a true Southern delight.", "210"],
//         //     ["Grilled Octopus", "Tender grilled octopus drizzled with olive oil and herbs.", "170"],
//         //     // Add more items here...
//         // ];
    
//         const dishCards = data.map((dish, index) => (
//             <MCard key={index} title={dish[0]} detail={dish[1]} price={`$${dish[2]}`} />
//         ));
    
//         return dishCards;
//     }
    

//     let detail = "" 
//     return (
//         <>
//         <div id="header">
//         {/* <NavbarComponent_user type={0}/> */}
//         </div>
//         <body>
//         <div id="body">
//             {display_dish()}

//         </div>
//         </body>        
//         <footer>
//         <div id="footer">
//            <Resdetail/>
//         </div>
//         </footer>
//         </>
//     )
// }