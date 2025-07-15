'use client';
import { useSelector } from "react-redux";
const Sidebar = ({categories}:any) => {
  console.log('Categories:', categories);
  
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
      <div>
        <h2>Categories</h2>
          <ul>
            {
              categories.map((category: any) => (
                <li key={category._id} className="py-2">
                  <a href={`/categories/${category._id}`} className="text-white hover:text-purple-300">
                    {category.name}
                  </a>
                </li>
              ))
            }
          </ul>
    </div>
    </div>
  );
};

export default Sidebar;
