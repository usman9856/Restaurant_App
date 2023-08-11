import "./css/display-content.css";

function Display_Content(props){
return(
    <>
    <div className="content-body">
        <span className="display"><h2>Order: {props.Dish}</h2><h3>Order ID: {props.order_id}</h3></span>
        <span className="display"><h3>Order by: {props.employee}</h3><h3>Time/Date: {props.time_date}</h3></span>
        <h3>Charge: ${props.price}</h3>
        <span>
            <label for="userComment">Customer Comment:</label><br />
            <textarea id="userComment" name="userComment" placeholder="Enter your comment here"></textarea>
        </span>

    </div>
    </>
);
    
}

export default Display_Content;