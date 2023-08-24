import React from 'react';
import DataTable from 'react-data-table-component';
import "./css/order.css"
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
        }
    ];

    const data_raw = [
        ["Red Lobster", 200, "something@example.com"],
        ["Red Lobster2", 200, "something@example.com"],
        ["Red Lobster3", 200, "something@example.com"],
        ["Red Lobster4", 200, "something@example.com"],
        ["Red Lobster5", 200, "something@example.com"],
        ["Red Lobster6", 200, "something@example.com"],
        ["Red Lobster7", 200, "something@example.com"]
        // ... (other data arrays)
    ];

    const data = data_raw.map((item, index) => ({
        id: index + 1, // Adding an ID based on the index (you can adjust this if needed)
        sr_no: `${index+1}`,
        order: item[0],
        price: item[1],
        email: item[2],
        action: <span><button>edit</button> <button>delete</button></span>
    }));

    return (
        <div className='container'>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                fixedHeader
                pagination
            />
        </div>
    );
}

export default Order_Detail;


// import React, { useState, useEffect } from 'react';
// import { NavbarComponent_detail } from './nav';
// import './css/order.css';

// import DataTable from 'react-data-table-component'
// function Order_Detail() {
//     const columns = [
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
//             name: "Action",
//             selector: row => row.action,

//         },
//     ]

//     const data_raw = [
//         ["Red Lobster", 200, "something@example.com"],
//         ["Red Lobster2", 200, "something@example.com"],
//         ["Red Lobster3", 200, "something@example.com"]
      
//     ];
//     const data = [
//         {
//             id: "1",
//             order: "Red Lobster",
//             price: 200,
//             email: "something@example.com",
//             action: <button>delete</button>
//         },
//         {
//             id: "2",
//             order: "Red Lobster2",
//             price: 200,
//             email: "something@example.com",
//             action: <button>delete</button>

//         },
//         {
//             id: "3",
//             order: "Red Lobster3",
//             price: 200,
//             email: "something@example.com",
//             action: <button>delete</button>
//         },
//         {
//             id: "4",
//             order: "Red Lobster4",
//             price: 200,
//             email: "something@example.com",
//             action: <button>delete</button>
//         },
//         {
//             id: "5",
//             order: "Red Lobster5",
//             price: 200,
//             email: "something@example.com",
//             action: <button>delete</button>
//         },
//     ]

//     return (
//         <div className='container'>
//             <DataTable className='table-order'
//                 columns={columns}
//                 data={data}
//                 selectableRows
//                 fixedHeader
//             >
//             </DataTable>
//         </div>
//     );
// }

// export default Order_Detail;