
const Dealscard = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-12 bg-[#1E3A8A] text-white rounded-lg overflow-hidden p-6 md:p-12 items-center h-[10px]">
      {/* Left section - Text */}
      <div className="md:col-span-6 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Lorem</h1>
        <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ex accusamus at sunt! Dolor qui maiores nihil impedit, nam distinctio corporis delectus provident adipisci tempore nobis dolorem. Voluptatem, earum impedit.</p>
        <button className="bg-white text-blue-700 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>

      {/* Right section - Image */}
      <div className="md:col-span-6 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9763/9763735.png" // Use your own image URL
          alt="Deals illustration"
          className="w-48 md:w-72 object-contain"
        />
      </div>
    </div>
  )
}

export default Dealscard