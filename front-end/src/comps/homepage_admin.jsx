import  { React,useState } from 'react';
import { NavbarComponent_admin, NavbarComponent_admin_detail } from './nav';
import './css/homepage_admin.css';
import Display_Content from './display-content';

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('Restaurant');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const restaurantData = [
      { Dish: 'Red Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
      { Dish: 'Red Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
      { Dish: 'Red Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
      // Add more data items as needed
  ];

  const pickupData = [
    { Dish: 'Yellow Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
    { Dish: 'Yellow Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
    
    // Define pickup data items similarly
  ];

  const deliveryData = [
    { Dish: 'Blue Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
    { Dish: 'Blue Lobster', order_id: 'R0010', employee: 'Adam', time_date: '8/11/2023-6:19PM', price: 200 },
    
    // Define delivery data items similarly
  ];

  const getDataForSelectedOption = () => {
    if (selectedOption === 'Restaurant') {
      return restaurantData;
    } else if (selectedOption === 'Pickup') {
      return pickupData;
    } else if (selectedOption === 'Delivery') {
      return deliveryData;
    }
    return [];
  };

  return (
    <>
      <div className='admin_head'>
        <NavbarComponent_admin type={1} />
      </div>
      <div className='admin_body'>
        <center>
          <NavbarComponent_admin_detail
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          {getDataForSelectedOption().map((data, index) => (
            <Display_Content
              key={index}
              Dish={data.Dish}
              order_id={data.order_id}
              employee={data.employee}
              time_date={data.time_date}
              price={data.price}
            />
          ))}
        </center>
      </div>
      <div className='admin_foot'></div>
    </>
  );
}

export default AdminPage;



// import React, { useState } from 'react';
// import { NavbarComponent_admin, NavbarComponent_admin_detail } from './nav';
// import './css/homepage_admin.css';
// import Display_Content from './display-content';
// function AdminPage() {
//   const [selectedOption, setSelectedOption] = useState('Restaurant');
//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };
//   return (
//     <>
//       <div className='admin_head'>
//         <NavbarComponent_admin type={1} />
//       </div>
//       <div className='admin_body'>
//         <center>
//           <NavbarComponent_admin_detail
//             selectedOption={selectedOption}
//             handleOptionChange={handleOptionChange}
//           />
//           {selectedOption === 'Restaurant' && (
//             <Display_Content
//               Dish="Red Lobster"
//               order_id="R0010"
//               employee="Adam"
//               time_date="8/11/2023-6:19PM"
//               price={200}
//             />   
//             )}
//         </center>
//       </div>
//       <div className='admin_foot'></div>
//     </>
//   );
// }
// export default AdminPage;





// import { NavbarComponent_admin,NavbarComponent_admin_detail } from './nav'
// import './css/homepage_admin.css';
// import Display_Content from './display-content';
// function AdminPage(){
//     return(
//         <>
//         <div className='admin_head'>
//             <NavbarComponent_admin type={1}/>         
//         </div>
//         <div className='admin_body'>
//             <center>
//             <NavbarComponent_admin_detail/>
//             <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
//             <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
//             <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
//             <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
//             <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
//             <Display_Content Dish="Red Lobster" order_id="R0010" employee="Adam" time_date="8/11/2023-6:19PM" price={200}/>
//             </center>

//         </div>
//         <div className='admin_foot'>
//         </div>
//         </>
//     )
// }
// export default AdminPage