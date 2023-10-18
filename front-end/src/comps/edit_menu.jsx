import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditForm() {

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


    const handleMenu = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('spiceness_level', spiceness_level);
            formData.append('vegan', vegan);
            formData.append('popular', popular);
            formData.append('special', special);

            if (selectedImage) {
                formData.append('image', selectedImage); // Use 'image' instead of 'admin'
            }

            const response=axios.put(`http://${process.env.REACT_APP_PUBLIC_IP}:5000/menu-edit/${name}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log(response)

            if (response) {

                alert("Item updated successfully");
            }
            else {
                alert("Item couldn't be updated.");

            }
        } catch (error) {
            console.error(error);
            alert("Item couldn't be updated.");
        }
    };



    return (
        <form onSubmit={handleMenu} enctype="multipart/form-data" method='POST'>
            <div className='form-container'>
                <h2>Upload Image</h2>
                <input
                    type="file"
                    accept="image/*" // Allow only image files
                    onChange={handleImageSelect}

                />
                {selectedImage && (
                    <div>
                        <h3>Selected Image:</h3>
                        <img
                            src={`http://${process.env.REACT_APP_PUBLIC_IP}:5000/${selectedImage}`}
                            alt="Selected"
                            style={{ maxWidth: '100%', maxHeight: '300px' }}

                        />
                    </div>
                )}
            </div>
            <hr />
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div>
                <label>Spiciness Level:</label>
                <input
                    type="text"
                    value={spiceness_level}
                    onChange={(e) => setSpicinessLevel(e.target.value)}
                />
            </div>
            <div>
                <label>Vegan:</label>
                <input
                    type="checkbox"
                    checked={vegan}
                    onChange={(e) => setVegan(e.target.checked)}
                />
            </div>
            <div>
                <label>Popular:</label>
                <input
                    type="checkbox"
                    checked={popular}
                    onChange={(e) => setPopular(e.target.checked)}
                />
            </div>
            <div>
                <label>Special:</label>
                <input
                    type="checkbox"
                    checked={special}
                    onChange={(e) => setSpecial(e.target.checked)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );




}
export default EditForm;