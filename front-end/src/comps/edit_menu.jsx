import React, { useState } from 'react';
import "./css/edit_menu.css"
function EditForm() {
    //   const { data, onSave } = props;

    //   Initialize state for each field separately
    //   const [srNo, setSrNo] = useState(data.sr_no);
    //   const [name, setName] = useState(data.name);
    //   const [description, setDescription] = useState(data.description);
    //   const [price, setPrice] = useState(data.price);
    //   const [category, setCategory] = useState(data.category);
    //   const [spicinessLevel, setSpicinessLevel] = useState(data.spiciness_level);
    //   const [vegan, setVegan] = useState(data.vegan);
    //   const [popular, setPopular] = useState(data.popular);
    //   const [special, setSpecial] = useState(data.special);


    // const [srNo, setSrNo] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [spicinessLevel, setSpicinessLevel] = useState('');
    const [vegan, setVegan] = useState(false);
    const [popular, setPopular] = useState(false);
    const [special, setSpecial] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Read the selected image file as a data URL
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({  name, description, price, category, spicinessLevel, vegan, popular, special, selectedImage });

    };

    const AddMenu = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('admin', selectedImage); // 'admin' should match the field name specified in your multer middleware
        
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('spicinessLevel', spicinessLevel);
        formData.append('vegan', vegan);
        formData.append('popular', popular);
        formData.append('special', special);
          
        fetch("http://localhost:5000/add-menu", {
            method: "POST",
            body: formData, // Use the FormData object instead of JSON.stringify
            headers: {
                'Content-Type': 'multipart/form-data',
              }
              
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              // Handle the response data as needed
            })
            .catch((error) => {
              console.error(error);
              // Handle errors
            });
      };

    return (
        <form onSubmit={AddMenu}>
            <div>
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
                            src={selectedImage}
                            alt="Selected"
                            style={{ maxWidth: '100%', maxHeight: '300px' }}
                        />
                    </div>
                )}
            </div>
            <hr />
            {/* <div>
                <label>Sr No:</label>
                <input
                    type="text"
                    value={srNo}
                    onChange={(e) => setSrNo(e.target.value)}
                />
            </div> */}
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
                    value={spicinessLevel}
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
