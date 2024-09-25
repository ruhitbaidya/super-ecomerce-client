// UserDashboard
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the hamburger menu
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let roole = 'seller';

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
          className={`${isSidebarOpen ? "block" : "hidden"
            } md:block w-full md:w-64 bg-blue-900 text-white h-auto md:h-screen p-5 fixed md:relative z-10 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
        >
          <nav>
            <ul>

              {
                roole === 'admin' ? <>
                  <li className="mb-4"><Link className="block p-3 rounded hover:bg-blue-700" to='/dashboard/admin/procutControl'>Control Product</Link></li>
                  <li className="mb-4"><Link className="block p-3 rounded hover:bg-blue-700" to='/dashboard/admin/usercontrol'>Role Checker</Link></li>
                  <li className="mb-4"><Link className="block p-3 rounded hover:bg-blue-700" to='/dashboard/admin/productAproved'>Product Aproved</Link></li>
                </> : <></>
              }
              {
                roole === 'user' ? <>
                  <li className="mb-4"><Link className="block p-3 rounded hover:bg-blue-700" to='/dashboard/user/byeHistory'>View history</Link></li>

                </> : <></>
              }
              {
                roole === 'seller' ? <>
                  <li className="mb-4"><Link className="block p-3 rounded hover:bg-blue-700" to='/dashboard/seller/controlproduct'>Control Product</Link></li>
                  <li className="mb-4"><Link className="block p-3 rounded hover:bg-blue-700" to='/dashboard/seller/CreateProcut'>Create Product</Link></li>
                </> : <></>
              }
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

          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;

