import { NavbarComponent_admin,NavbarComponent_admin_detail } from './nav'
import './css/homepage_admin.css';
import Display_Content from './display-content';
function AdminPage(){
    // let date = Date().toLocalDateString();
    // let time = Date().toLocalTimeString();
    // console.log("Date: ",date, "Time: ",time);
    return(
        <>
        <div className='admin_head'>
            <NavbarComponent_admin type={1}/>         
        </div>
        <div className='admin_body'>
            <center>
            <NavbarComponent_admin_detail/>
            <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
            <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
            <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
            <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
            <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
            <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
            </center>

        </div>
        <div className='admin_foot'>

        </div>
        </>
    )

}

export default AdminPage