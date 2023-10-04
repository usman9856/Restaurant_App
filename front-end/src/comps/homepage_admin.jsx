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
      selector: (row) => `${row.customer.first_name} ${row.customer.last_name}`,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Contact',
      selector: (row) => row.customer.contact,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Products',
      selector: 'products',
      sortable: false,
      cell: (row) =>
        row.products.map((product) => (
          <div key={product._id}>
            {product.product.name} - Quantity: {product.quantity}
          </div>
        )),
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
      width: '100px',
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
  
        return <div className={statusClass}>{row.status}</div>;
      },
    },
  ];
  

  useEffect(() => {
    fetchData().then((data) => {
      const mappedData = data.map((order, index) => ({
        id: index + 1,
        customer: {
          first_name: order.customer.first_name,
          last_name: order.customer.last_name,
          contact: order.customer.contact,
        },
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