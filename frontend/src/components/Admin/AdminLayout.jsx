import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
        {/* Mobile Toggle Button */}
        <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
            <button onClick={toggleSidebar}>
                <FaBars size={24} />
            </button>
                <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
            <div className="fixed inset-0 bg-black/50 md:hidden" onClick={toggleSidebar}></div>
        )}


        {/* Sidebar */}
        <div className={`bg-gray-900 min-h-screen text-white w-64  absolute  md:block md:relative z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:static `}>
        {/* Sidebar Content */}
        <AdminSidebar />

        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 overflow-auto">
            <Outlet />

        </div>
    </div>
  )
}

export default AdminLayout