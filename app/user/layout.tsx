"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import { Divider } from "antd";
import { FaUserEdit } from "react-icons/fa";

const { Sider, Content } = Layout;

// Dummy components for each screen
const ComponentsMap: { [key: string]: React.ReactNode } = {
  "edit-profile": <div>Edit your profile image</div>,
  account: <div>Account Information</div>,
  appointments: <div>Appointments</div>,
  password: <div>Change Password</div>,
  coins: <div>Coins</div>,
  courses: <div>Courses</div>,
  "delivery-address": <div>Delivery Address</div>,
  documents: <div>Documents</div>,
  following: <div>Following</div>,
  messages: <div>Messages</div>,
  addresses: <div>My Addresses</div>,
  wishlist: <div>My Wishlist</div>,
  notifications: <div>Notifications</div>,
  orders: <div>Orders</div>,
  subscriptions: <div>Subscriptions</div>,
  help: <div>Help</div>,
  signout: <div>Signing you out...</div>, // You can trigger a logout here
  delete: <div>Confirm account deletion</div>,
};

const items = Object.keys(ComponentsMap).map((key) => ({
  key,
  label: ComponentsMap[key]?.props?.children || key,
}));

export default function UserDashboard() {
  const [selectedKey, setSelectedKey] = useState("account");

  return (
    <div className="px-65 py-20 bg-[#f5f5f5]">
      <Layout className="min-h-screen w-[1300px]" style={{ background: "#f5f5f5" }}>
        <Sider
         width={300}
          style={{ background: "white",border: "1px solid #eaeaea",borderRadius: "8px",padding:"10px",overflow:"hidden" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => console.log("Breakpoint:", broken)}
          onCollapse={(collapsed, type) =>
            console.log("Collapsed:", collapsed, type)
          }
        >
          <div className="demo-logo-vertical p-4 font-bold text-xl text-[#ab45db] flex flex-row">
            <FaUserEdit className="text-[#ab45db] mr-3" />
            Sami Khokher
          </div>
          <div className="demo-logo-vertical p-1 font-semibold text-l text-gray-600">
            Edit your personal information
          </div>
          <Divider dashed/>
          <Menu
            className="h-max"
            style={{ height: "100%", borderRight: 0 }}
            theme="light"
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={(e) => setSelectedKey(e.key)}
            items={items}
          />
        </Sider>
        <Layout>
          <Content 
          style={{ margin: "0px 16px 0", background: "linear-gradient(to bottom,rgb(218, 167, 242), #ffffff)", }} className=" rounded-lg shadow-md w-[850px]">
            <div style={{ padding: 24, minHeight: 360 }}>
              {ComponentsMap[selectedKey]}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
