const Vetpetgrid = () => {
  return (
    <div
      className="grid gap-2 py-20 px-50"
      style={{
        gridTemplateColumns: 'repeat(5, 300px)', // each column is 200px wide
        gridTemplateRows: 'repeat(6, 100px)' // each row is 100px tall
      }}
    >
      {/* Large left container */}
      <div className="col-span-3 row-span-6 overflow-hidden p-6">
        <img
          src="assets/s5.png"
          alt=""
          className="h-full w-full object-cover rounded-4xl"
        />
      </div>

      {/* Top-right container */}
      <div className="col-start-4 col-span-2 row-span-3  overflow-hidden  px-6 py-6">
        <img
          src="assets/s6.png"
          alt=""
          className="h-full w-full object-cover rounded-4xl"
        />
      </div>

      {/* Bottom-right container */}
      <div className="col-start-4 col-span-2 row-start-4 row-span-3 overflow-hidden rounded-lg px-6 py-6">
        <img
          src="assets/s7.png"
          alt=""
          className="h-full w-full object-cover rounded-4xl"
        />
      </div>
    </div>
  );
};

export default Vetpetgrid;
