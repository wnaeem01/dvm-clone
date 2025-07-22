import React from "react";
import { List, Typography, Badge } from "antd";

const { Title, Text } = Typography;

const notifications = [
  { id: 1, message: "Your order has been shipped.", read: false },
  { id: 2, message: "New subscription available.", read: true },
  { id: 3, message: "Password changed successfully.", read: true },
];

export default function Notifications() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <Title level={2} className="text-[#ab45db] mb-6 text-center">Notifications</Title>
      <List
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item>
            <Badge dot={!item.read}>
              <Text strong={!item.read}>{item.message}</Text>
            </Badge>
          </List.Item>
        )}
      />
    </div>
  );
}
