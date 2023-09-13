import React, { useState, useEffect } from 'react';
import "./css/add_menu.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function AddForm() {
    const navigate = useNavigate(null)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [spiceness_level, setSpicinessLevel] = useState('');
    const [vegan, setVegan] = useState(false);
    const [popular, setPopular] = useState(false);
    const [special, setSpecial] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    useEffect(() => {
        console.log("This is selected Image \n:",selectedImage);
    }, [selectedImage]);


    const AddMenu = async (e) => {
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
                formData.append('admin', selectedImage);
            }
    
            const response = await axios.post('http://localhost:5000/add-menu', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log(response.data);
            navigate('/food')
            alert("Item added successfully")
        } catch (error) {
            console.error(error);
            alert("Item couldn't be added.")
        }
    };
    
      

    return (
        <form onSubmit={AddMenu} enctype="multipart/form-data" method='POST'>
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
                            src={URL.createObjectURL(selectedImage)}
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

export default AddForm;
