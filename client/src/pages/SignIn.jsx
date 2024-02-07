import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Make sure you have the CSS file for styles

const SignIn = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the login logic
    navigate('/'); // Redirect to home page or dashboard after login
  };

  return (
    <div className="flex justify-between items-center h-screen bg-gray-100">
      {/* Left-aligned form */}
      <div className="w-1/2 p-10">
        <div className="text-center mb-6">
          <span className="text-lg font-bold text-blue-500">Company</span>
          <span className="text-lg font-bold text-gray-900">Logo</span>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-10 shadow-xl rounded">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome to RFID</h1>
          <p className="text-center mb-8">Sign-in to your account</p>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full p-2 mb-4 border-2 border-gray-300 rounded"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border-2 border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between items-center mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Start Selling
            </button>
            <a href="#" className="text-blue-500">Forgot Password</a>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="keepSignedIn"
              className="mr-2"
            />
            <label htmlFor="keepSignedIn" className="text-sm">Keep me signed in</label>
          </div>
          <hr className="mb-6" />
          <div className="text-center">
            <a href="#" className="text-blue-500">Create your RFID account</a>
          </div>
        </form>
      </div>
      {/* Right-aligned image */}
      <div className="w-1/2">
        <img src="\images\360_F_641662303_K1359Rf8mJwiHI5mxg17O5l533OlCF2g.jpg" alt="RFID Technology" className="object-cover h-full" />
      </div>
    </div>
  );
};

export default SignIn;
