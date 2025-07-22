"use client";

import { Form, Input, DatePicker, Select, Button, Row, Col, Checkbox } from "antd";

const { Option } = Select;

export default function Accountinformation() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted Values:", values);
  };

  return (
    <div>
     <div className="rounded-lg shadow-md bg-white p-10">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{
          email: "sami.khokher@devsinc.com",
          phone: "+1",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label={<span className="text-lg font-semibold">First Name</span>}
              rules={[{ required: true, message: "Please enter your first name" }]}
            >
              <Input size="large" placeholder="e.g. Sami" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="lastName"
              label={<span className="text-lg font-semibold">Last Name</span>}
              rules={[{ required: true, message: "Please enter your last name" }]}
            >
              <Input size="large" placeholder="e.g. Khokher" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label={<span className="text-lg font-semibold">Email</span>}
              rules={[{ required: true, type: "email", message: "Enter a valid email" }]}
            >
              <Input size="large" disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="phone"
              label={<span className="text-lg font-semibold">Phone Number</span>}
              rules={[{ required: true, message: "Enter a phone number" }]}
            >
              <Input size="large" placeholder="+1 123-456-7890" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="dob"
              label={<span className="text-lg font-semibold">Date of Birth</span>}
            >
              <DatePicker className="w-full" size="large" format="MM/DD/YYYY" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="gender"
              label={<span className="text-lg font-semibold">Gender</span>}
            >
              <Select size="large" placeholder="Select gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="not-specified">Don’t Want to Specify</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="address"
          label={<span className="text-lg font-semibold">Address</span>}
        >
          <Input size="large" placeholder="1234 Main St, Apartment 101" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="country"
              label={<span className="text-lg font-semibold">Country</span>}
            >
              <Input size="large" placeholder="Country" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="state"
              label={<span className="text-lg font-semibold">State</span>}
            >
              <Input size="large" placeholder="State" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="city"
              label={<span className="text-lg font-semibold">City</span>}
            >
              <Input size="large" placeholder="City" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="zip"
              label={<span className="text-lg font-semibold">Zip / Postal Code</span>}
            >
              <Input size="large" placeholder="Postal Code" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="position"
              label={<span className="text-lg font-semibold">Position</span>}
            >
              <Select size="large" placeholder="Select your position">
                <Option value="developer">Developer</Option>
                <Option value="designer">Designer</Option>
                <Option value="manager">Manager</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="program"
              label={<span className="text-lg font-semibold">Affiliate Program</span>}
            >
              <Select size="large" placeholder="Select program">
                <Option value="vt-friends">VT Friends</Option>
                <Option value="vet-and-tech">Vet and Tech</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="options" valuePropName="checked">
          <Checkbox.Group>
            <Row>
              <Col span={24}>
                <Checkbox value="abc" className="text-base">Sign up for ABC</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="43" className="text-base">Sign up for 43</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#ab45db] hover:bg-[#9a38c7] text-white text-lg w-full h-12"
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
   </div>
  );
}
