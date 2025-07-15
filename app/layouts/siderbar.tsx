'use client';
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state: any) => state.sidebar.value);

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen w-64 bg-purple-700 text-white p-6 z-40
        transition-transform duration-500 ease-in-out
        transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
      `}
      style={{ boxShadow: isOpen ? '4px 0 15px rgba(0,0,0,0.3)' : 'none' }}
    >
      <div className="transition-opacity duration-500">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Dashboard</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Products</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Orders</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-purple-600">Settings</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
