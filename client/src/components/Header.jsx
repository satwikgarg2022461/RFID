import { Navbar, Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='border-b-2'>
      <div className='flex items-center justify-between w-full'>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="text-blue-500">Company</span>
          <span className="text-gray-900">Logo</span>
        </Link>
        <div className="flex"> {/* Flex container for buttons */}
          {/* Start Selling Button */}
          <Link to={"/"}>
            <Button gradientDuoTone={"purpleToBlue"} pill outline>
              Start Selling
            </Button>
          </Link>
          {/* Login Button */}
          <Link to={"/sign-in"} className="ml-4">
            <Button gradientDuoTone={"greenToBlue"} pill outline>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  )
}

export default Header;
