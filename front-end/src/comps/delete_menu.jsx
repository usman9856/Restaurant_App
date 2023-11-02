import React, { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteForm() {

  const [Id, setId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [spiceness_level, setSpicinessLevel] = useState('');
  const [vegan, setVegan] = useState(false);
  const [popular, setPopular] = useState(false);
  const [special, setSpecial] = useState(false);

  useEffect(() => {
    const toEdit = window.localStorage.getItem("toEdit");
    async function loadData() {
      try {
        console.log("Sending request with toEdit data:", toEdit);

        const response = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:5000/menu-edit`, {
          method: "POST",
          body: JSON.stringify({ toEdit }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const result = responseData.result;

        console.log("Received data:", result);

        if (result.length > 0) {
          const firstItem = result[0];
          // console.log(firstItem)
          setId(firstItem._id);
          setName(firstItem.name);
          setDescription(firstItem.description);
          setPrice(firstItem.price);
          setCategory(firstItem.category);
          setSpicinessLevel(firstItem.spiciness_level);
          setVegan(firstItem.vegan);
          setPopular(firstItem.popular);
          setSpecial(firstItem.special);
          setSelectedImage(firstItem.image_url);
          console.log("Image Name:", firstItem.image_url);
        } else {
          console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    // Load data only when the component mounts
    loadData();
  }, []);



  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  useEffect(() => {
    console.log("This is selected Image \n:", selectedImage);
  }, [selectedImage]);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://${process.env.REACT_APP_PUBLIC_IP}:5000/delete_menu`, {
        data: { Id }, // Include your data as an object
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.status === 200) {
        const data = response.data;
        alert(response.message)
        navigate('/food')
      } else {
        alert('An error occurred inside');
        // console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred:', error);
      // navigate('/food')

    }
    
    
    
  };

  return (
    <div className="container m*-auto">
      <button className="btn btn-danger float-right" onClick={handleDelete}>Confirm Delete</button><br />
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div>
            {selectedImage && (
              <div>
                <h3>Image:</h3>
                <img
                  src={`http://${process.env.REACT_APP_PUBLIC_IP}:5000/${selectedImage}`}
                  alt="Selected"
                  className="img-fluid"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              </div>
            )}
          </div>
          <hr />
          <div>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Spiciness Level:</strong> {spiceness_level}</p>
            <p><strong>Vegan:</strong> {vegan ? 'Yes' : 'No'}</p>
            <p><strong>Popular:</strong> {popular ? 'Yes' : 'No'}</p>
            <p><strong>Special:</strong> {special ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>


  );


}

export default DeleteForm;