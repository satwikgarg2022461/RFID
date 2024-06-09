import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkerLogin = () => {
  const [workerId, setWorkerId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      workerId,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/worker-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 200) {
        console.log(data.user);
        console.log(data.message);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        if(data.user.role === 0){
          navigate(`/dashboard/worker`);
        }
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-100">
          <div className="w-full flex justify-start mb-6">
            <img src="/path/to/logo.png" alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Welcome to RFID</h1>
          <p className="text-center text-gray-600 mb-6">Sign-in to your Worker's account</p>
          <form className="w-full mb-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="worker-id">
                Enter Your Worker ID
              </label>
              <input
                id="worker-id"
                type="text"
                placeholder="Worker ID"
                value={workerId}
                onChange={(e) => setWorkerId(e.target.value)}
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="flex justify-end">
                <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign-in
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Keep me signed in</span>
              </label>
            </div>
          </form>
        </div>
        <div className="ml-0 w-50 h-100">
          <img src="/images/worker-sign-in.png" alt="Workers" className="object-contain h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default WorkerLogin;
