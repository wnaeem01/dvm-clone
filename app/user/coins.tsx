"use client";

import { FaCoins } from "react-icons/fa";
import { Tabs } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: (
      <span className="px-4 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ab45db] transition-all">
        Profile
      </span>
    ),
    children: <div>Profile content</div>,
  },
  {
    key: "2",
    label: (
      <span className="px-4 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ab45db] transition-all">
        Settings
      </span>
    ),
    children: <div>Settings content</div>,
  },
  {
    key: "3",
    label: (
      <span className="px-4 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ab45db] transition-all">
        Coins
      </span>
    ),
    children: <div>Coins content</div>,
  },
];

export default function Coins() {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex items-center space-x-4 text-[#f59e0b]">
          <FaCoins size={40} />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">80 Coins</h2>
            <p className="text-gray-500 text-sm">Equivalent to $0.08</p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-gray-700">
          <p className="text-sm">
            <span className="font-medium text-red-500">40 coins</span> are going to expire on{" "}
            <span className="font-semibold">Jan 18, 2026</span>
          </p>
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',borderRadius: '8px'}}/>
    </div>
  );
};
