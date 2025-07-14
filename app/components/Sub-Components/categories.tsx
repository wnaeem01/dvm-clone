'use client';
import { useState } from 'react';
const Categories = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  return (
     <div className="flex items-center space-x-2">
            <span>
                <button
                onClick={() => setSidebarOpen(true)}
                >
                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                    </svg>
                </button>
            </span>
            <span className="text-lg">Categories</span>
        </div>
  )
}

export default Categories