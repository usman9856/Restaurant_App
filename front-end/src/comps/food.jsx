import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import DataTable from 'react-data-table-component';
import "./css/food.css"
import EditForm from './edit_menu';

function OrderDetail() {

  const navigate = useNavigate(); // Initialize the useNavigate hook for navigation
  const [data_db, setDataDb] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // Initialize as an empty array

  const handleRowClick = (selectedRows) => {
    setSelectedRows(selectedRows.selectedRows);
    console.log(selectedRows.selectedRows)
  };
  
  
  async function fetchData() {
    try {
      const result = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(result.json());
      return await result.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array or handle the error appropriately.
    }
  }

  const columns = [
    {
      name: 'Sr.',
      selector: row => row.sr_no,
      sortable: false,
      width: '50px', // Set a fixed width for Sr. No. column

    },
    {
      name: 'Item',
      selector: row => row.name,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
      width: '600px',
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
      width: '125px',
    },
    {
      name: 'Spiceness',
      selector: row => row.spiciness_level,
      sortable: true,
      width: '100px',

    },
    {
      name: 'Vegan',
      selector: row => row.vegan,
      sortable: true,
      cell: (row) => (
        <div>{row.vegan ? 'Yes' : 'No'}</div>
      ),
      width: '100px',
    },
    {
      name: 'Popular',
      selector: row => row.popular,
      sortable: true,
      cell: (row) => (
        <div>{row.popular ? 'Yes' : 'No'}</div>
      ),
      width: '100px',
    }, {
      name: 'Special',
      selector: row => row.special,
      sortable: true,
      cell: (row) => (
        <div>{row.special ? 'Yes' : 'No'}</div>
      ),
      width: '100px',
    },
    // {
    //   name: 'Edit',
    //   selector: row => row.edit,
    //   // selector: row => <button>Edit</button>
    // },
    // {
    //   name: 'Remove',
    //   selector: row => row.remove,
    //   // selector: row => <button>Remove</button>,
    // }
  ];

  useEffect(() => {
    fetchData().then((data) => {
      const mappedData = data.map((item, index) => ({
        id: index + 1,
        sr_no: `${index + 1}`,
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        spiciness_level: item.spiciness_level,
        vegan: item.vegan,
        popular: item.popular,
        special: item.special,
      }));
      setDataDb(mappedData);
    });
  }, []);


  return (
    <div className='fd-main'>
      <div className='head-food'>
        <p id='guide'>Items in Display</p>
        <div>
          <button className='btn-add' onClick={() => { navigate('/edit_menu') }}>➕</button>
          <button className='btn-edit' onClick={() => <EditForm dataArray={selectedRows}/>}>🧾</button>
          <button className='btn-remove' onClick={() => { navigate('/edit_menu') }}>❌</button>
        </div>
      </div>

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

export default OrderDetail;


