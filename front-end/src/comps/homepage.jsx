import MCard from "./menuCard"
import NavbarComponent from "./nav"
import "./homepage.css"

export default function Homepage(){
    //for now let it be. but we are going to change the lenth to not allow more than 100 letters for detail.
    let detail = "Red Lobster one of our famour cusine dish. Allows you to experience a variety of flavors in every bites" 
    return (
        <>

        <div id="header">
        <NavbarComponent/>
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

        </div>
        </footer>
        </>
    )
}