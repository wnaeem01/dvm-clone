'use client';

import { Form, Input, Button, Row, Col, Switch } from 'antd';
import { useState } from 'react';

export default function DeliveryAddress() {
  const [form] = Form.useForm();
  const [manualAddress, setManualAddress] = useState(true);

  const onFinish = (values: any) => {
    console.log('Submitted Address:', values);
  };

  return (
    <div className="rounded-lg shadow-md bg-white p-10">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{ phone: '+1' }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label={<span className="text-lg font-semibold">First Name</span>}
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input size="large" placeholder="e.g. John" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="lastName"
              label={<span className="text-lg font-semibold">Last Name</span>}
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input size="large" placeholder="e.g. Doe" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="phone"
          label={<span className="text-lg font-semibold">Phone Number</span>}
          rules={[{ required: true, message: 'Enter a phone number' }]}
        >
          <Input size="large" addonBefore="+1" placeholder="123-456-7890" />
        </Form.Item>

        <Form.Item
          name="company"
          label={<span className="text-lg font-semibold">Company Name</span>}
        >
          <Input size="large" placeholder="Company (Optional)" />
        </Form.Item>

        <Row gutter={16} align="middle" className="mb-4">
          <Col span={18}>
            <Form.Item
              name="address"
              label={<span className="text-lg font-semibold">Address</span>}
              rules={[{ required: true, message: 'Please enter your address' }]}
            >
              <Input
                size="large"
                placeholder="1234 Main St, Apartment 101"
                disabled={!manualAddress}
              />
            </Form.Item>
          </Col>

          <Col span={6} className="pt-6 flex items-center justify-end">
            <div className="text-sm text-gray-600">
              Add manually{' '}
              <Switch
                checked={manualAddress}
                onChange={setManualAddress}
                className="ml-2"
              />
            </div>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#ab45db] hover:bg-[#9a38c7] text-white text-lg w-full h-12"
          >
            Save Address
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
