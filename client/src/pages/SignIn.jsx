import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Make sure you have the CSS file for styles

const SignIn = () => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("mew");
    const formData={
      emailId,
      password
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      const data = await response.json();
      if(response.status === 200){
        console.log(data.user);
        console.log(data.message);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);

        // Navigate to the respective dashboard based on user role
        if(data.user.role === 1){
          navigate(`/seller/dashboard`);
        }
      }
      if(response.status === 404){
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
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
            placeholder="Email"
            className="w-full p-2 mb-4 border-2 border-gray-300 rounded"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
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
            <a href="/register" className="text-blue-500">Create your RFID account</a>
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
