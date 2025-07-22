"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import { Divider } from "antd";
import { FaUserEdit } from "react-icons/fa";

import Accountinformation from "./accountinformation";
import Appointments from "./appointments";
import Formheader from "./formheader";
import Changepassword from "./changepassword";
import Coins from "./coins";
import Courses from "./courses";
import DeliveryAddress from "./deliveryaddress";
import Documents from "./documents";
import Following from "./following";
import Messages from "./messages";
import Wishlist from "./wishlist";
import Notifications from "./notifications";
import Orders from "./orders";
import Subscriptions from "./subscriptions";
import Help from "./help";
import Signout from "./signout";
import DeleteAccount from "./deleteaccount";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
const { Sider, Content } = Layout;

// Dummy components for each screen

const ComponentsMap: { [key: string]: React.ReactNode } = {
  "Account Information": <Accountinformation />,
  "Appointments": <Appointments />,
  "Password": <Changepassword />,
  "Coins": <Coins />,
  "Courses": <Courses />,
  "Delivery Address": <DeliveryAddress />,
  Documents: <Documents />,
  Following: <Following />,
  Messages: <Messages />,
  Wishlist: <Wishlist />,
  Notifications: <Notifications />,
  Orders: <Orders />,
  Subscriptions: <Subscriptions />,
  Help: <Help />,
  Signout: <Signout />,
  Delete: <DeleteAccount />,
};

const items = Object.keys(ComponentsMap).map((key) => ({
  key,
  label: ComponentsMap[key]?.props?.children || key,
}));

export default function UserDashboard() {

   const router = useRouter();
    useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      console.log('session is',session);
      
      if (!session) {
        router.push("/auth");
      }
    };

    checkSession();
  }, []);
  const [selectedKey, setSelectedKey] = useState("account");

  return (
    <div className="px-75 py-20 bg-[#f5f5f5] w-full">
      <Layout className="min-h-screen w-[1500px]" style={{ background: "#f5f5f5" }}>
        <Sider
        defaultValue={2}
         width={300}
          style={{ background: "white",border: "1px solid #eaeaea",borderRadius: "8px",padding:"10px",overflow:"hidden" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => console.log("Breakpoint:", broken)}
          onCollapse={(collapsed, type) =>
            console.log("Collapsed:", collapsed, type)
          }
        >
          <div className="demo-logo-vertical p-4 font-bold text-3xl text-[#ab45db] flex flex-row">
            <FaUserEdit className="text-[#ab45db] mr-3" />
            Sami Khokher
          </div>
          <div className="demo-logo-vertical p-1 text-l text-gray-600">
            Edit your personal information  ....
         </div> 
          <Divider dashed/>
          <Menu
            className="h-max"
            style={{ height: "100%", borderRight: 0,fontSize: "16px" }}
            theme="light"
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={(e) => setSelectedKey(e.key)}
            items={items}
          />
        </Sider>
        <Layout>
          <Content 
          style={{ margin: "0px 16px 0", background: "linear-gradient(to bottom,rgb(232, 207, 243) 0%, #ffffff 30%)", }} className=" rounded-lg shadow-md w-[950px]">
            <Formheader heading={selectedKey} />
            <div style={{ padding: 24, minHeight: 360 }}>
              {ComponentsMap[selectedKey]}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
