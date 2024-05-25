import React from 'react';
import { Button } from 'flowbite-react';

const RolePage = () => {
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
            <button className="block w-full py-2 px-4 border border-black rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              I'm a Seller
            </button>
            <button className="block w-full py-2 px-4 border border-black rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              I'm a Worker
            </button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button gradientDuoTone="purpleToBlue" pill>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
