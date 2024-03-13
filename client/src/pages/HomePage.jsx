import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import GridComponent from './GridComponent';

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-3">
        <div className="flex flex-col items-center md:items-start md:flex-grow">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl">Become a RFID seller</h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-300 md:text-2xl">Start selling your RFID products</h2>
          <Link to={"/"}>
            <Button className='mt-5' gradientDuoTone={"purpleToBlue"} pill outline>
              Start Selling
            </Button>
          </Link>
        </div>
        <div className="md:flex md:justify-end md:flex-grow">
          <img className="w-96 h-96 md:w-96 md:h-auto" src="/images/RFID.jpg" alt="RFID" />
        </div>
      </div>
      
      <section className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-3">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl">Why Sellers Choose us?</h2>
          {/* Add additional content here if needed */}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <img className="w-full md:w-96 h-auto" src="/images/istockphoto-1169530992-612x612.png" alt="RFID Technology" />
        </div>
      </section>

       {/* GridComponent placed below the "Why Sellers Choose Us?" heading */}
       <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-3">
        <GridComponent />
      </div>
    </div>
  );
};

export default HomePage;