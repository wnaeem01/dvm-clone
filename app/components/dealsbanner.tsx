import Dealscard from "./dealscard";
import { Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Dealsbanner = () => {
  return (
    <div
      className="grid grid-cols-12 p-8 rounded-lg text-white bg-[#ab45db] bg-opacity-80"
      style={{
        backgroundImage: "url('https://unsplash.com/photos/person-holding-light-bulb-fIq0tET6llw')", // Transparent cat-themed background
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Left Column - Text content */}
      <div className="col-span-12 md:col-span-4">
        <h1 className="font-bold text-5xl mb-2">Enjoy Deals & Discounts</h1>
        <p>
          Get your hands on multiple offers, limited-time discounts, and savings
          from top animal health product vendors.
        </p>
      </div>

      {/* Right Column - Carousel */}
      <div className="col-span-12 md:col-span-8">
        <Carousel autoplay dotPosition="bottom" fade autoplaySpeed={4000}>
          <div>
            <Dealscard />
          </div>
          <div>
            <Dealscard />
          </div>
        </Carousel>

        <div className="flex mt-5 justify-center">
          <Button
            shape="round"
            icon={<ArrowRightOutlined />}
            size="large"
            type="default"
            iconPosition="end"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dealsbanner;
