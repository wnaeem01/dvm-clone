import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const columns = [
  { title: "Order ID", dataIndex: "orderId", key: "orderId" },
  { title: "Product", dataIndex: "product", key: "product" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Status", dataIndex: "status", key: "status" },
];

const data = [
  { key: "1", orderId: "1001", product: "Product A", date: "2024-07-15", status: "Shipped" },
  { key: "2", orderId: "1002", product: "Product B", date: "2024-07-10", status: "Processing" },
];

export default function Orders() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <Title level={2} className="text-[#ab45db] mb-6 text-center">Orders</Title>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}
