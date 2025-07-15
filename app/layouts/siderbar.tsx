'use client';
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-700 text-white rounded-md focus:outline-none"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {/* Sidebar */}
      <div
         className={`
            fixed top-0 left-0 h-screen bg-purple-700 text-white
            p-6
            transition-all duration-300 ease-in-out
            overflow-hidden
            ${isOpen ? "w-64 opacity-100 visible" : "w-0 opacity-0 hidden"}
        `}
      >
        {isOpen && (
          <>
            <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
            <nav className="space-y-4">
              <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Dashboard</a>
              <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Products</a>
              <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Orders</a>
              <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Settings</a>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
