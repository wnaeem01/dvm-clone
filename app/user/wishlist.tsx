import React from "react";
import { List, Typography, Button } from "antd";

const { Title } = Typography;

const wishlistItems = [
  { id: 1, name: "Wireless Headphones" },
  { id: 2, name: "Smartwatch" },
];

export default function Wishlist() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <Title level={2} className="text-[#ab45db] mb-6 text-center">My Wishlist</Title>
      <List
        dataSource={wishlistItems}
        renderItem={(item) => (
          <List.Item
            actions={[<Button type="link" danger key="remove">Remove</Button>]}
          >
            {item.name}
          </List.Item>
        )}
      />
    </div>
  );
}
