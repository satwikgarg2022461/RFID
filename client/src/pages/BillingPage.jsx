import React from 'react';

const BillPage = () => {
    return (
        <div className="p-10 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-6 text-left">Billing</h2>
                <div className="mb-6 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className=" bg-blue-200">
                                <th className="px-4 py-2 text-blue-700 font-bold">Product name</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">ID</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">Product code</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">Picture</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">Size</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">Type</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">Price</th>
                                <th className="px-4 py-2 text-blue-700 font-bold">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(6)].map((_, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <td className="px-4 py-2">Cropped T-shirt</td>
                                    <td className="px-4 py-2">#85</td>
                                    <td className="px-4 py-2">
                                        <img src="barcode-placeholder.png" alt="Barcode" />
                                    </td>
                                    <td className="px-4 py-2">
                                        <img src="product-placeholder.png" alt="Product" className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="px-4 py-2 text-center">L</td>
                                    <td className="px-4 py-2 text-center">F</td>
                                    <td className="px-4 py-2 text-center">$25</td>
                                    <td className="px-4 py-2 text-center">1</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end items-center mb-6">
                    <div>
                        <p className='text-blue-700'>Total Amount: $500</p>
                        <p className='text-blue-700'>Discount: $50</p>
                        <p className="font-bold text-blue-700">Final Amount: $450</p>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-4 text-left">Customer Details</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter customer's name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter customer's email-id" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Card details</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1234 5678 9124 3424" />
                        <div className="flex mt-2">
                            <input type="text" className="w-1/2 mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/YY" />
                            <input type="text" className="w-1/2 ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="CVV" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Billing address</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter address" />
                        <div className="flex mt-2">
                            <input type="text" className="w-1/2 mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Zipcode" />
                            <input type="text" className="w-1/2 ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="State" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Back</button>
                        <div>
                            <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-blue-500 rounded-lg font-bold">Checkout</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BillPage;
