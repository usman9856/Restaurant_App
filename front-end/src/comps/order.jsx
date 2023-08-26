import React from 'react';
import DataTable from 'react-data-table-component';
import "./css/order.css";

function Order_Detail() {
    const columns = [
        {
            name: 'Sr.',
            selector: row => row.sr_no,
            sortable: false,
        },
        {
            name: 'Order',
            selector: row => row.order,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
        {
            name: 'Track',
            selector: row => row.track,
        }
    ];

    const data_raw = [
		["Red Lobster", 200, "something@example.com"],
		["Blue Sky", 150, "blue@example.com"],
		["Green Forest", 180, "green@example.com"],
		["Golden Sun", 220, "sun@example.com"],
		["Silver Moon", 210, "moon@example.com"],
		["Purple Rain", 190, "purple@example.com"],
		["Orange Sunset", 230, "orange@example.com"],
		// ... add more items here
	];

    const data = data_raw.map((item, index) => ({
        id: index + 1,
        sr_no: `${index + 1}`,
        order: item[0],
        price: item[1],
        email: item[2],
        action: <span><button>Review</button> <button>delete</button></span>,
        track: (
            <button type="button" className="btn btn-primary d-flex mx-auto btn-lg" data-toggle="modal" data-target="#myModal">
                Track your order
            </button>
        )
    }));

    return (
        <>
            <div className="container">
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    fixedHeader
                    pagination
                />
            </div>
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                
                  <div class="modal-header">
                    <h4 class="modal-title mx-auto">Order Status<br/>AWB Number-5335T5S</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                  <div class="modal-body">
                    <div class="progress-track">
                        <ul id="progressbar">
                            <li class="step0 active " id="step1">Order placed</li>
                            <li class="step0 active text-center" id="step2">In Transit</li>
                            <li class="step0 active text-right" id="step3"><span id="three">Out for Delivery</span></li>
                            <li class="step0 text-right" id="step4">Delivered</li>
                        </ul>
                    </div>
                    <div class="row">
                      <div class="col-9">
                        <div class="details d-table">
                          <div class="d-table-row">
                            <div class="d-table-cell">
                              Shipped with
                            </div>
                            <div class="d-table-cell">
                              UPS Expedited
                            </div>
                          </div>
                          <div class="d-table-row">
                            <div class="d-table-cell">
                              Estimated Delivery
                            </div>
                            <div class="d-table-cell">
                              02/12/2017
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="d-table-row">
                          <a href='#'><i class="fa fa-phone" aria-hidden="true"></i></a>
                        </div>
                        <div class="d-table-row">
                          <a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                      </div>
                    </div>      
                  </div>                  
              </div>
            </div>
            </div>
        </>
    );
}

export default Order_Detail;




// import React from 'react';
// import DataTable from 'react-data-table-component';
// import "./css/order.css"
// function Order_Detail() {
//     const columns = [
//         {
// 			name: 'Sr.',
//             selector: row => row.sr_no,
//             sortable: false,
//         },
//         {
//             name: 'Order',
//             selector: row => row.order,
//             sortable: true,
//         },
//         {
//             name: 'Price',
//             selector: row => row.price,
//             sortable: true,
//         },
//         {
//             name: 'Email',
//             selector: row => row.email,
//             sortable: true,
//         },
//         {
//             name: 'Action',
//             selector: row => row.action,
//         },
//         {
//             name: 'Track',
//             selector: row => row.track,
//         }
//     ];

//     const data_raw = [
//         ["Red Lobster", 200, "something@example.com"],
//         ["Red Lobster2", 200, "something@example.com"],
//         ["Red Lobster3", 200, "something@example.com"],
//         ["Red Lobster4", 200, "something@example.com"],
//         ["Red Lobster5", 200, "something@example.com"],
//         ["Red Lobster6", 200, "something@example.com"],
//         ["Red Lobster7", 200, "something@example.com"]
//         // ... (other data arrays)
//     ];

//     const data = data_raw.map((item, index) => ({
// 		id: index + 1, // Adding an ID based on the index (you can adjust this if needed)
//         sr_no: `${index+1}`,
//         order: item[0],
//         price: item[1],
//         email: item[2],
//         action: <span><button>edit</button> <button>delete</button></span>,
// 		track:<button type="button" class="btn btn-primary d-flex mx-auto btn-lg" data-toggle="modal" data-target="#myModal">Track your order</button>
	
//     }));

//     return (
// 		<>
//         <div classnameName='container'>
//             <DataTable
//                 columns={columns}
//                 data={data}
//                 selectableRows
//                 fixedHeader
//                 pagination
//             />
//         </div>
// 		<div>
// 		{/* <!-- Button to Open the Modal --> */}
//             <button type="button" class="btn btn-primary d-flex mx-auto btn-lg" data-toggle="modal" data-target="#myModal">
//               Track your order
//             </button>
          
//             {/* <!-- The Modal --> */}
//             <div class="modal fade" id="myModal">
//               <div class="modal-dialog modal-dialog-centered">
//                 <div class="modal-content">
                
//                   {/* <!-- Modal Header --> */}
//                   <div class="modal-header">
//                     <h4 class="modal-title mx-auto">Order Status<br/>AWB Number-5335T5S</h4>
//                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                   </div>
                  
//                   {/* <!-- Modal body --> */}
//                   <div class="modal-body">
//                     <div class="progress-track">
//                         <ul id="progressbar">
//                             <li class="step0 active " id="step1">Order placed</li>
//                             <li class="step0 active text-center" id="step2">In Transit</li>
//                             <li class="step0 active text-right" id="step3"><span id="three">Out for Delivery</span></li>
//                             <li class="step0 text-right" id="step4">Delivered</li>
//                         </ul>
//                     </div>
//                     <div class="row">
//                       <div class="col-9">
//                         <div class="details d-table">
//                           <div class="d-table-row">
//                             <div class="d-table-cell">
//                               Shipped with
//                             </div>
//                             <div class="d-table-cell">
//                               UPS Expedited
//                             </div>
//                           </div>
//                           <div class="d-table-row">
//                             <div class="d-table-cell">
//                               Estimated Delivery
//                             </div>
//                             <div class="d-table-cell">
//                               02/12/2017
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="col-3">
//                         <div class="d-table-row">
//                           <a href><i class="fa fa-phone" aria-hidden="true"></i></a>
//                         </div>
//                         <div class="d-table-row">
//                           <a href><i class="fa fa-envelope" aria-hidden="true"></i></a>
//                         </div>
//                       </div>
//                     </div>      
//                   </div>                  
//               </div>
//             </div>
//             </div>
// 		</div>
// 		</>
//     );
// }

// export default Order_Detail;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Make sure you have React Router for using <Link>
// import "./css/order.css"

// const ContentBody = (props) => {
// 	return (
// 		<div className="row">
// 			<div className="col-md-1"><img src="https://bootdey.com/img/Content/user_3.jpg"
// 				className="media-object img-thumbnail" /></div>
// 			<div className="col-md-11">
// 				<div className="row">
// 					<div className="col-md-12">
// 						<div className="pull-right"><label className="label label-danger">{props.status}</label></div>
// 						<span><strong>Order name</strong></span> <span className="label label-info">{props.order_name}</span><br />
// 						Quantity : {props.quantity}, cost: ${props.cost} <br />
// 						{/* <a data-placement="top" className="btn btn-success btn-xs glyphicon glyphicon-ok" href="#"
// 							title="View"></a>
// 						<a data-placement="top" className="btn btn-danger btn-xs glyphicon glyphicon-trash" href="#"
// 							title="Danger"></a>
// 						<a data-placement="top" className="btn btn-info btn-xs glyphicon glyphicon-usd" href="#"
// 							title="Danger"></a> */}
// 					</div>
// 					<div className="col-md-12">order made on: {props.date} by <Link>{props.employee} </Link></div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// const OrderHistory = () => {
//     const [filter, setFilter] = useState("All"); // Default filter

//     const handleFilterChange = (newFilter) => {
//         setFilter(newFilter);
//     };

// 	return (
// 		<div className="container bootdey">
// 			<div className="container bootdey">
// 				<div className="panel panel-default panel-order">
// 				<strong>Order history</strong>
// 					<div className="panel-body">
// 						<div className="box">
// 							<ContentBody status="Approved" order_name="red_lobster" quantity={2} cost={200 * 2} date="26/8/2023" employee="Jane Doe" />
// 						</div>
// 						<div className="box">
// 							<ContentBody status="Pending" order_name="blue_bistro" quantity={3} cost={150 * 3} date="25/8/2023" employee="John Smith" />
// 						</div>
// 						{/* Add more ContentBody instances here */}
// 					</div>				
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default OrderHistory;

