import { Navbar, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const  SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      fullName,
      shopName,
      address,
      pincode,
      gstNumber,
      contactNumber,
      emailId,
      password,
    };
    // Submit the data to your backend here
    console.log("Form submitted:", {
      fullName,
      shopName,
      address,
      pincode,
      gstNumber,
      contactNumber,
      emailId,
      password,
    });

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      const data = await response.json();
      if(response.status === 201){
        console.log(data.user);
        console.log(data.message);
        navigate('/');
      }
      if(response.status === 200){
        console.log(data.message);
        navigate('/login');
      }
      if(response.status === 500){
        console.log(data.message);
        console.log(data.error);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar className="border-b-2">
        <div className="flex items-center justify-around w-full">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
              <span className="text-blue-500">Company</span>
              <span className="text-gray-900">Logo</span>
            </Link>
          </div>
        </div>
      </Navbar>

      {/* ------form */}
      <div className="create-account">
        <div className="container-signup">
          <div className="image-container">
            <img
              src="https://imprint-e.com/wp-content/uploads/2015/07/rfid-icon-01a-400x250.jpg"
              alt="Company Logo"
            />
          </div>
          <div className="form-container">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </label>
              <label>
                Shop Name:
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
              <label>
                Pincode:
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </label>
              <label>
                GST Number:
                <input
                  type="text"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  required
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </label>
              <label>
                Email Id:
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <Button gradientDuoTone={"purpleToBlue"} pill outline onClick={handleSubmit}>
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
