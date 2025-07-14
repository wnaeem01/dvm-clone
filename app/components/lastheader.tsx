'use client';
import Categories from "./Sub-Components/categories";
import MenuArray from "../Items/MenuArray";
import MenuItems from "./Sub-Components/menuItems";
import SidebarToggle from "./Sub-Components/sidebar";
import { useState } from "react";

const Lastheader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <SidebarToggle state={sidebarOpen} setState={setSidebarOpen} />
      <div className="flex flex-row justify-between items-center bg-white px-4 py-2 shadow-md text-black px-30">
        <Categories setSidebarOpen={setSidebarOpen} />
        <MenuItems MenuItemsProps={MenuArray} />
        <svg
          className="w-6 h-6 text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 10v4H1l3 3M3 8V4h16l-3-3M9 8l2-1v4"
          />
        </svg>
      </div>
    </>
  );
};

export default Lastheader;
