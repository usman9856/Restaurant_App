import React, { useState, useEffect } from 'react';
import {  NavbarComponent_detail } from './nav';
import './css/homepage_admin.css';
import DataTable from 'react-data-table-component';
 

function AdminPage() {
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // const isAdmin = window.localStorage.getItem("isAdmin");
  // // const navigate = useNavigate(); // Hook for navigation


  const [data_db, setDataDb] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // Initialize as an empty array

  const handleRowClick = (selectedRows) => {
    setSelectedRows(selectedRows.selectedRows);
    console.log(selectedRows.selectedRows)
  };
  
  
  async function fetchData() {
    try {
      const result = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:5000/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
     
      return await result.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array or handle the error appropriately.
    }
  }
  
  const columns = [
    {
      name: 'Customer Name',
      selector: (row) => `${row.customer_Id}`,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Contact',
      selector: (row) => row.customer_contact,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Products',
      selector: 'products',
      sortable: false,
      cell: (row) =>
        Array.isArray(row.products) ? (
          row.products.map((product) => (
            <div key={product._id}>
              {product.product_name} - Quantity: {product.quantity}
            </div>
          )) 
        ) : (
          <div>No Products</div>
        ),
      width: '250px',
    },
    
    {
      name: 'Order Date',
      selector: 'orderDate',
      sortable: true,
      cell: (row) => new Date(row.orderDate).toLocaleDateString(),
      width: '150px',
    },
    {
      name: 'Total Amount',
      selector: 'totalAmount',
      sortable: true,
      cell: (row) => `$${row.totalAmount.toFixed(2)}`,
      width: '150px',
    },
    {
      name: 'Shipping Address',
      selector: 'shippingAddress',
      sortable: true,
      width: '200px',
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      width: '100px',
      cell: (row) => {
        let statusClass = '';
  
        switch (row.status) {
          case 'Pending':
            statusClass = 'status-pending';
            break;
          case 'Processing':
            statusClass = 'status-processing';
            break;
          case 'Shipped':
            statusClass = 'status-shipped';
            break;
          case 'Delivered':
            statusClass = 'status-delivered';
            break;
          default:
            break;
        }
  
        return <center><div className={statusClass}>{row.status}</div></center>
      },
    },
  ];
  
  useEffect(() => {
    fetchData().then((data) => {
      const mappedData = data.map((order) => ({
        id: order._id.$oid, // Assuming the MongoDB ObjectID is provided in this format
        customer_Id: order.customer_Id,
        customer_contact: order.customer_contact,
        products: order.products,
        orderDate: order.orderDate,
        totalAmount: order.totalAmount,
        shippingAddress: order.shippingAddress,
        status: order.status,
      }));
      setDataDb(mappedData);
    });
  }, []);
  

  return (
    <div className='fd-main'>
      <p id='user-guide'>Current Status</p>
      <hr />
      <div className="tb-container">
        <DataTable
          columns={columns}
          data={data_db}
          selectableRows
          fixedHeader
          pagination
          selectableRowsHighlight={true}
          pointerOnHover={true}
          highlightOnHover={true}
          onSelectedRowsChange={handleRowClick} // Add this line
        />

      </div>
    
    </div>
  );


  }

export default AdminPage;