import { Carousel } from "antd";
import { Card } from "antd";
import React from "react";

const Vetproducts = () => {
  return (
    <div
      className="grid grid-cols-12 p-8 rounded-lg text-white bg-opacity-80 mt-8 gap-6 bg-[#f1e6f4] text-black p-40 mt-30"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1583337130417-3346a1f4d5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", // Direct image URL
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Left Column - Text content */}
      <div className="col-span-12 md:col-span-4 text-black">
        <h1 className="font-bold text-4xl mb-4">
          Latest Veterinary Products By Your Preferred Vendors
        </h1>
        <h3 className="text-2xl mb-4 text-[#ab45db]">
          Browse & Choose
        </h3>
        <p className="text-base">
          Explore the newest products from your trusted vendors and meet your
          vet practice's advanced needs. Discover the latest innovations in
          veterinary care, from cutting-edge medical equipment to essential
          supplies.
        </p>
      </div>

      {/* Right Column - Carousel */}
      <div className="col-span-12 md:col-span-8">
        <Carousel autoplay dotPosition="bottom" fade autoplaySpeed={4000}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4">
              <Card
                title={`Product ${item}`}
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    className="w-full h-48 object-cover rounded-md"
                    src={`https://picsum.photos/400/300?random=${item}`}
                    alt={`Product ${item}`}
                  />
                }
              >
                Discover premium veterinary products tailored for modern practices.
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Vetproducts;
