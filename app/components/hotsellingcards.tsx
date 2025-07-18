import { Card } from 'antd';

const Hotsellingcards = () => {
  const iterator = [1, 2, 3, 4];

  const cards = iterator.map((item, index) => (
    <div className="p-2 w-full sm:w-1/2 lg:w-1/4" key={item}>
      <Card
        title={`Product ${item}`}
        hoverable
        style={{ width: "100%" }}
        cover={
          <img
            className="w-full h-40 object-cover rounded-md mb-2"
            alt={`example-${index}`}
            src={`https://picsum.photos/200/300?random=${item}`}
          />
        }
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum id,
        eaque necessitatibus vero eius a cum.
      </Card>
    </div>
  ));

  return <div className="flex flex-wrap justify-center px-6">{cards}</div>;
};

export default Hotsellingcards;
