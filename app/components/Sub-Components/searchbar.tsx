const Searchbar = () => {
  return (
    <>
        <div className="hidden sm:flex items-center bg-white rounded-md shadow-md px-4 py-2 my-2 border border-[#ab45db] sm:w-[700px]">
            <input
            type="text"
            placeholder="Search Something..."
            className="w-full outline-none text-md text-gray-700"
            />
            <button className="ml-2 text-gray-500 hover:text-gray-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10.5 3a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM16.293 16.293a1 1 0 011.414-1.414l4.586 4.586a1 1 0 01-1.414 1.414l-4.586-4.586z"
                clipRule="evenodd"
                />
            </svg>
            </button>
        </div>
    </>
  )
}

export default Searchbar