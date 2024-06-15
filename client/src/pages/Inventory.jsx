import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import "./inventory.css";
import Sidebar from "./../components/Sidebar";

const Inventory = () => {
  const items = [
    { id: '#85', imgSrc: '/images/product1.jpg', price: '$20', description: 'Versatile and comfortable round neck t-shirt', type: 'M', stockSold: 100, stockLeft: 75, sales: '$2000' },
    { id: '#32', imgSrc: '/images/product2.jpg', price: '$25', description: 'Versatile and comfortable round neck t-shirt', type: 'M', stockSold: 100, stockLeft: 75, sales: '$2000' },
    { id: '#85', imgSrc: '/images/product3.jpg', price: '$20', description: 'Versatile and comfortable round neck t-shirt', type: 'M', stockSold: 100, stockLeft: 75, sales: '$2000' },
  ];

  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
    <div className="min-h-screen bg-white">
      {/* Centered Navigation */}
      <div className = "inventory-heading"> <h1>Inventory</h1></div>
     

      {/* Table */}
      <div className="p-8 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Headers */}
          <thead>
            <tr>
              <th className="border-b p-2 text-blue-700">Product ID</th>
              <th className="border-b p-2 text-blue-700">Product</th>
              <th className="border-b p-2 text-blue-700">Price</th>
              <th className="border-b p-2 text-blue-700">Description</th>
              <th className="border-b p-2 text-blue-700">Type</th>
              <th className="border-b p-2 text-blue-700">Stock sold</th>
              <th className="border-b p-2 text-blue-700">Stock left</th>
              <th className="border-b p-2 text-blue-700">Sales</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border-b p-2">{item.id}</td>
                <td className="border-b p-2">
                  <img src={item.imgSrc} alt="Product" className="w-24 h-24 object-cover" />
                </td>
                <td className="border-b p-2">{item.price}</td>
                <td className="border-b p-2">{item.description}</td>
                <td className="border-b p-2">{item.type}</td>
                <td className="border-b p-2">{item.stockSold}</td>
                <td className="border-b p-2">{item.stockLeft}</td>
                <td className="border-b p-2">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <a href="#1" className="mx-1 px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200">1</a>
          <a href="#2" className="mx-1 px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200">2</a>
          <a href="#3" className="mx-1 px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200">3</a>
          <a href="#4" className="mx-1 px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200">4</a>
          <span className="mx-1 px-3 py-1 text-gray-700">...</span>
          <a href="#next" className="mx-1 px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200">Next &gt;</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Inventory;