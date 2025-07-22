'use client';

import React from 'react';
import { Button, Modal, Typography } from 'antd';
import { useState } from 'react';

const { Title, Paragraph } = Typography;

export default function DeleteAccount() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => {
    setIsModalVisible(false);
    // Add your delete logic here
    console.log("Account deletion confirmed");
  };
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <Title level={2} className="text-center text-[#ab45db] mb-6">
        Delete Account
      </Title>
      <Paragraph className="text-center mb-8">
        This action is <strong>irreversible</strong>. Once you delete your account, all your data will be permanently removed.
      </Paragraph>
      <div className="flex justify-center">
        <Button
          type="primary"
          danger
          size="large"
          onClick={showModal}
          className="bg-[#ab45db] border-[#ab45db] hover:bg-[#9a38c7] hover:border-[#9a38c7]"
        >
          Delete My Account
        </Button>
      </div>

      <Modal
        title="Confirm Account Deletion"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, Delete"
        okButtonProps={{ danger: true }}
        cancelText="Cancel"
      >
        <Paragraph>
          Are you sure you want to delete your account? This action cannot be undone.
        </Paragraph>
      </Modal>
    </div>
  );
}
