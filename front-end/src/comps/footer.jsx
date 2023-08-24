import "./css/footer.css"
import facebook from "./icons/facebook.png"
import instagram from "./icons/instagram.png"
import twitter from "./icons/twitter.png"
import React from "react"

export default function Resdetail(){
return (
    <>
    <div className="fbody">
    <div className="info1">
        <ul>
            <li>Restaurant Name</li>
            <li>Facebook</li>
            <li>Twiiter</li>
            <li>Instagram</li>
        </ul>
    </div>
    <div className="info1">
        <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Store Locator</li>
            <li>Track Order</li>
            <li>Terms & Condition</li>
        </ul>
    </div>
    </div>
    <div className="icons">
        <img src={facebook} alt="facebook logo" className="icon"/>  
        <img src={instagram} alt="instagram logo" className="icon"/>
        <img src={twitter} alt="twitter" className="icon"/>         
    </div>
   </>
)
}

// export default footer1;