import React from "react";
import { Navbar, Sidebar } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiChartPie, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import "./WorkerDashboard.css";

const customTheme = {
  root: {
    base: 'bg-blue-200',
    inner: 'bg-blue-200'
  }
};

const WorkerDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-full md:w-56" theme={customTheme}>
        <div className="flex items-center justify-center h-16 dark:bg-gray-800 mt-10">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="text-blue-500">Company</span>
            <span className="text-gray-900">Logo</span>
          </Link>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item active icon={HiChartPie} as="div">
                Dashboard
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item icon={MdOutlineInventory} as="div">
                Inventory
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item icon={HiPlus} as="div">
                Add Product
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=users">
              <Sidebar.Item icon={HiPlus} as="div">
                My Tasks
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=comments">
              <Sidebar.Item icon={IoSettingsOutline} as="div">
                Settings
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <Navbar className="border-b-2">
          <div className="search-wrapper w-5/6">
            <input
              type="text"
              placeholder="Search"
              className="input-text hidden lg:inline w-5/6 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <AiOutlineSearch className="search-icon hidden lg:inline" />
          </div>
        </Navbar>

        {/* Welcome Section */}
        <div className="flex justify-center items-center m-6 gap-2">
        <div>
            <h1 className="text-2xl font-bold ml-4 text-blue-700">Hi, Satwik</h1>
          
        </div>
          <div className="h-full w-16 rounded-full overflow-hidden object-cover">
            <img src="/images/Satwik.jpg" alt="Profile" />
          </div>
        </div>

        {/* Today's Task */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Today's Task</h2>
          <div>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Manage Products in inventory</span>
                </div>
                <span>10:20 AM {">"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Inventory</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-4 py-2 text-blue-700 font-bold">Product ID</th>
                  <th className="px-4 py-2 text-blue-700 font-bold">Product</th>
                  <th className="px-4 py-2 text-blue-700 font-bold">Price</th>
                  <th className="px-4 py-2 text-blue-700 font-bold">Description</th>
                  <th className="px-4 py-2 text-blue-700 font-bold">Type</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(2)].map((_, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-4 py-2">#85</td>
                    <td className="px-4 py-2">
                      <img
                        src="product-placeholder.png"
                        alt="Product"
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">$20</td>
                    <td className="px-4 py-2">Versatile and comfortable round neck t-shirt</td>
                    <td className="px-4 py-2">M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Task Activity and Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Task Activity</h2>
            <div className="w-full">
              {/* Flowbite Pie Chart */}
              <div className="flex justify-center items-center">
                <div className="w-40 h-40">
                  <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="40%" className="fill-blue-500" />
                    <circle cx="50%" cy="50%" r="30%" className="fill-red-500" />
                    <circle cx="50%" cy="50%" r="20%" className="fill-orange-500" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500"></div>
                  <span>In Progress</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500"></div>
                  <span>To-Do</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500"></div>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">June 2024</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Mon</th>
                    <th className="px-4 py-2">Tue</th>
                    <th className="px-4 py-2">Wed</th>
                    <th className="px-4 py-2">Thu</th>
                    <th className="px-4 py-2">Fri</th>
                    <th className="px-4 py-2">Sat</th>
                    <th className="px-4 py-2">Sun</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Calendar rows */}
                  {[...Array(5)].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                      {[...Array(7)].map((_, dayIndex) => (
                        <td key={dayIndex} className="px-4 py-2 border text-center">
                          {weekIndex * 7 + dayIndex + 1}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
