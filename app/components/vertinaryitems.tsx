let iterator=[1,2,3,4,5,6,7,8];
const Vertinaryitems = () => {
     const cards=iterator.map((item, index) => (
        <div className="flex flex-col">
            <div key={index} className="p-3 border border-gray-200 rounded-lg shadow-md h-60 w-80 flex space-between">
                <img className="w-full h-40 w-36 object-cover rounded-md mb-2 justify-center items-center ml-9
                my-6
                "
                    alt={`example-${index}`}
                    src={`https://picsum.photos/200/300?random=${item}`} // Example image URL
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ab45db" className="w-7 h-7 ml-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>

            </div>
            <div className="max-w-[150px] ml-4">
                <h2 className="text-black text-md font-semibold my-2">
                    Cooling Metal Bowl dpuble wall
                </h2>
                <h2 className="text-lg font-semibold text-[#ab45db]"> 
                    $24000
                </h2>
            </div>
        </div>
    ));
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
            {cards}
        </div>
    </>
  )
}

export default Vertinaryitems