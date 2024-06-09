import React, { useState } from 'react';
import './AddProductForm.css';
import Sidebar from './../components/Sidebar';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Mens fashion');
    const [subCategory, setSubCategory] = useState('T-shirt');
    const [style, setStyle] = useState('Short Sleeve');
    const [brandName, setBrandName] = useState('');
    const [rfid, setRfid] = useState('');
    const [barcode] = useState('');
    const [stockAmount, setStockAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [currency, setCurrency] = useState('USD');
    const [images, setImages] = useState([null, null, null]);

    const handleImageChange = (index, event) => {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
    };

    return (
        <div className="dashboard-container">
        <Sidebar></Sidebar>
        <div className="form-container">
            <h1>Add Product</h1>
            
            <form>
                <div className="form-sections">
                    <div className="left-section">
                        <div className='Product-name-div'>
                            <label>Product name</label>
                            <input 
                                type="text" 
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)} 
                                placeholder='Enter product name'
                            />
                        </div>
                        <div className='description-div'>
                            <label>Description</label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='Enter product description'
                            />
                        </div>
                        <div className='category-div'>
                            <label>Category</label>
                            <select 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Mens fashion">Men's fashion</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="side-by-side">
                            <div className='sub-category-div'>
                                <label>Sub-Category</label>
                                <select 
                                    value={subCategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                >
                                    <option value="T-shirt">T-shirt</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className='style-div'>
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
                        <div className='brand-div'>
                            <label>Brand name</label>
                            <input 
                                type="text" 
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                placeholder='Enter brand name'
                            />
                        </div>
                        <div className="side-by-side">
                            <div className='rfid-div'>
                                <label>RFID no.</label>
                                <input 
                                    type="text" 
                                    value={rfid}
                                    onChange={(e) => setRfid(e.target.value)}
                                    placeholder='Enter RFID no.'
                                />
                            </div>
                            <div className='barcode-div'>
                                <label>Barcode</label>
                                <input 
                                    type="text" 
                                    value={barcode}
                                    onChange={(e) => setRfid(e.target.value)}
                                    placeholder='Enter barcode'
                                />
                            </div>
                            <div className='stock-div'>
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
                            <label>Price:</label>
                            <input 
                                type="number" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="buttons-container">
                    <button type="button">Cancel</button>
                    <button type="submit">Continue</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddProductForm;
