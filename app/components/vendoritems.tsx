const iterator=[1,2,3,4];
const Vendoritems = () => {
    const cards=iterator.map((item, index) => (
        <div className="flex flex-col">
            <div key={index} className="p-3 border border-gray-200 rounded-lg shadow-md h-60 w-80 flex
            font-bold text-black text-3xl items-center justify-center">
                <h3>
                    Some Text
                </h3>
            </div>
            <div className="max-w-[150px] ml-4">
                <h2 className="text-black text-md  my-2">
                    GerVetUSA
                </h2>
            </div>
        </div>
    ));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 mt-8">
            {cards}
        </div>
  )
}

export default Vendoritems