import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import "./css/staff.css"

function Staff() {
    const navigate = useNavigate();
    const [data_db, setDataDb] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowClick = (selectedRows) => {
        setSelectedRows(selectedRows.selectedRows);
        console.log(selectedRows.selectedRows);
    };

    async function fetchData() {
        try {
            const result = await fetch("http://localhost:5000/staff", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return await result.json();
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    const columns = [
        {
            name: 'First Name',
            selector: 'first_name',
            sortable: true,
            width: '150px',
        },
        {
            name: 'Last Name',
            selector: 'last_name',
            sortable: true,
            width: '150px',
        },
        {
            name: 'Role',
            selector: 'role',
            sortable: true,
            width: '150px',
        },
        {
            name: 'Email',
            selector: 'contact.email',
            sortable: true,
            width: '200px',
        },
        {
            name: 'Phone',
            selector: 'contact.phone',
            sortable: true,
            width: '150px',
        },
        {
            name: 'Start Date',
            selector: 'start_date',
            sortable: true,
            width: '250px',
        },
        {
            name: 'Shift',
            selector: 'shift',
            sortable: true,
            width: '100px',
        },
        {
            name: 'Salary',
            selector: 'salary',
            sortable: true,
            width: '100px',
        },
    ];

    useEffect(() => {
        fetchData().then((data) => {
            setDataDb(data);
        });
    }, []);

    return (
        <div className='fd-main'>
            <div className='head-food'>
                <p id='guide'>Staff List</p>
                <div>
                    <button className='btn-add' onClick={() => {}} >➕</button>
                    <button className='btn-edit' onClick={() => {}}>🧾</button>
                    <button className='btn-remove' onClick={() => {}}>❌</button>
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
                    onSelectedRowsChange={handleRowClick}
                />
            </div>
        </div>
    );
}

export default Staff;
