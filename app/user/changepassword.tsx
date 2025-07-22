"use client";

import { Form, Input, Button, Card } from "antd";
import { LockOutlined } from "@ant-design/icons";

export default function ChangePasswordForm() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Password Updated:", values);
  };

  return (
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="mt-6"
      >
        <Form.Item
          name="currentPassword"
          label={<span className="text-lg font-medium">Current Password</span>}
          rules={[{ required: true, message: "Please enter your current password" }]}
        >
          <Input.Password
            size="large"
            placeholder="Enter your current password"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label={<span className="text-lg font-medium">New Password</span>}
          rules={[{ required: true, message: "Please enter your new password" }]}
        >
          <Input.Password
            size="large"
            placeholder="Enter your new password"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={<span className="text-lg font-medium">Confirm Password</span>}
          dependencies={['newPassword']}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords do not match");
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Re-enter your new password"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-auto h-12 text-2xl bg-[#ab45db] hover:bg-[#9338c0] p-6"
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
  );
}
