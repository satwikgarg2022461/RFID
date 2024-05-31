import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category] = useState('Mens fashion');
    const [subCategory, setSubCategory] = useState('T-shirt');
    const [style, setStyle] = useState('Short Sleeve');
    const [brandName, setBrandName] = useState('');
    const [rfid, setRfid] = useState('');
    const [country, setCountry] = useState('India');
    const [stockAmount, setStockAmount] = useState(2000);
    const [price, setPrice] = useState(50);
    const [currency, setCurrency] = useState('USD');
    const [images, setImages] = useState([null, null, null]);

    const handleImageChange = (index, event) => {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
    };

    return (
        <div className="form-container">
            <h2>Add Product</h2>
            <form>
                <div className="form-sections">
                    <div className="left-section">
                        <div>
                            <label>Product name</label>
                            <input 
                                type="text" 
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Category</label>
                            <input 
                                type="text" 
                                value={category}
                                readOnly
                            />
                        </div>
                        <div className="side-by-side">
                            <div>
                                <label>Sub-Category</label>
                                <select 
                                    value={subCategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                >
                                    <option value="T-shirt">T-shirt</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <label>Style</label>
                                <select 
                                    value={style}
                                    onChange={(e) => setStyle(e.target.value)}
                                >
                                    <option value="Short Sleeve">Short Sleeve</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>Brand name</label>
                            <input 
                                type="text" 
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                            />
                        </div>
                        <div className="side-by-side">
                            <div>
                                <label>RFID no.</label>
                                <input 
                                    type="text" 
                                    value={rfid}
                                    onChange={(e) => setRfid(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Country of origin</label>
                                <select 
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="India">India</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <label>Stock amount</label>
                                <input 
                                    type="number" 
                                    value={stockAmount}
                                    onChange={(e) => setStockAmount(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="image-container">
                            {images[0] && <img src={images[0]} alt="Product" />}
                            <input 
                                type="file" 
                                onChange={(e) => handleImageChange(0, e)}
                            />
                            {/* <button type="button">Add Image</button> */}
                        </div>
                        <div className="price-container">
                            <input 
                                type="number" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <select 
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="USD">USD</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="buttons-container">
                    <button type="button">Back</button>
                    <button type="submit">Continue</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
