"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../stores/userSlice";
import { Typography, Spin } from "antd";
import { signOut } from "next-auth/react";

const { Title, Paragraph } = Typography;

export default function Signout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const performLogout = async () => {
      // Clear Redux user state
      dispatch(clearUser());

      // Sign out via NextAuth (clears cookies/session)
      await signOut({ redirect: false });

      // Manually clear any custom cookies if needed
      document.cookie = "accessToken=; Max-Age=0; path=/;";
      document.cookie = "refreshToken=; Max-Age=0; path=/;";

      // Redirect after full sign-out
      window.location.href = "/";
    };

    performLogout();
  }, [dispatch]);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-xl mx-auto text-center">
      <Title level={2} className="text-[#ab45db] mb-4">Signing you out...</Title>
      <Paragraph>Please wait while we log you out.</Paragraph>
      <Spin size="large" />
    </div>
  );
}
