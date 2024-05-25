import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';


const RolePage = () => {
  const [role, setRole] = useState('');
  // const history = useHistory();
  console.log(role);

  const navigate = useNavigate();
  const handleProceed = () => {
    if (role === 'seller') {
      navigate('/seller/sign-in');
    } else if (role === 'worker') {
      navigate('/worker/sign-in');
    } else {
      alert('Please select a role before proceeding.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side image */}
      <div className="md:w-1/2 h-1/2 md:h-full bg-cover bg-center">
        <img src="/images/img1.jpg" alt="RFID Technology" className="object-cover h-full w-full" />
      </div>
      
      {/* Right side content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to RFID</h1>
          <h2 className="text-3xl font-bold mb-4">Select your role</h2>
          <p className="text-sm mb-8">Please choose what best describes you</p>
          
          <div className="space-y-4">
            <button
              className={`block w-full py-2 px-4 border rounded-lg text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 ${role === 'seller' ? 'border-blue-500' : 'border-black'} hover:bg-gray-100 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={() => setRole('seller')}
            >
              I'm a Seller
            </button>
            <button
              className={`block w-full py-2 px-4 border rounded-lg text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 ${role === 'worker' ? 'border-blue-500' : 'border-black'} hover:bg-gray-100 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={() => setRole('worker')}
            >
              I'm a Worker
            </button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button gradientDuoTone="purpleToBlue" pill onClick={handleProceed}>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
