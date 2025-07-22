import React from "react";
import { List, Avatar, Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    title: "John Doe",
    description: "Photographer",
    avatar: "https://joeschmoe.io/api/v1/john",
  },
  {
    title: "Jane Smith",
    description: "Web Developer",
    avatar: "https://joeschmoe.io/api/v1/jane",
  },
];

export default function Following() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <Title level={2} className="text-[#ab45db] mb-6 text-center">Following</Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
