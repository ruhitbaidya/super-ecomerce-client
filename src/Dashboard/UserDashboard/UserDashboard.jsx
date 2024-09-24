// UserDashboard
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the hamburger menu

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
        {/* Hamburger icon for mobile */}
        <button
          className="text-white md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-blue-900 text-white h-auto md:h-screen p-5 fixed md:relative z-10 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <nav>
            <ul>
              <li className="mb-4">
                <a href="/" className="block p-3 rounded hover:bg-blue-700">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="/analytics" className="block p-3 rounded hover:bg-blue-700">
                  Analytics
                </a>
              </li>
              <li className="mb-4">
                <a href="/settings" className="block p-3 rounded hover:bg-blue-700">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1  p-8 transition-all duration-300 ease-in-out">
          {/* Dashboard Header */}
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Dashboard Overview</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Logout
            </button>
          </header>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Total Sales</h3>
              <p className="text-3xl font-bold">$15,200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">New Users</h3>
              <p className="text-3xl font-bold">320</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Total Orders</h3>
              <p className="text-3xl font-bold">1,200</p>
            </div>
          </div>

          {/* Sales Analytics Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sales Analytics</h3>
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">[Chart Placeholder]</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;

