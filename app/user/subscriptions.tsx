import React from "react";
import { List, Typography, Tag } from "antd";

const { Title } = Typography;

const subscriptions = [
  { id: 1, name: "Premium Plan", status: "Active" },
  { id: 2, name: "Newsletter", status: "Inactive" },
];

export default function Subscriptions() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <Title level={2} className="text-[#ab45db] mb-6 text-center">Subscriptions</Title>
      <List
        dataSource={subscriptions}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} />
            <Tag color={item.status === "Active" ? "green" : "red"}>
              {item.status}
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
}
