import { Navbar , Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className='border-b-2'>
    <div className='flex items-center justify-around w-full'>
    <div className=''>
        <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="text-blue-500">Company</span>
        <span className="text-gray-900">Logo</span>
      </Link>
      </div>
        <div className="" >
      <Link to={"/sign-up"}>
          <Button gradientDuoTone={"purpleToBlue"} pill outline>
            Start Selling
          </Button>
        </Link>
        
        </div>
    </div>
        
      </Navbar>
    
  )
}

export default Header