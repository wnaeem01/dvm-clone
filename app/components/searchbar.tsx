import React from 'react'

const Searchbar = () => {
  return (
    <div className="relative w-[650px] pt-3 justify-around">
     <input
        type="text"
        placeholder="Search something..."
        className="w-full pl-4 pr-10 py-2 border border-[#ab45db] rounded-md focus:outline-none h-full placeholder-gray-500 transition duration-300 ease-in-out"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 top-9 transform -translate-y-1/2 h-7 w-7 text-[#ab45db] pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z"
        />
      </svg>
    </div>
  )
}

export default Searchbar