import { Carousel } from "antd";

const Mainanimator = () => {
  return (
    <Carousel autoplay dotPosition="bottom" fade autoplaySpeed={2000}>
      <div>
        <img src="assets/s1.png" alt="" />
      </div>
      <div>
        <img src="assets/s2.png" alt="" />
      </div>
    </Carousel>
  );
};

export default Mainanimator;
