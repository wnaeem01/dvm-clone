'use client';

import React from 'react';
import { Table, Tag, Space, Row, Col, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DocumentType {
  key: string;
  productLevel: number;
  description: string;
}

const columns: ColumnsType<DocumentType> = [
  {
    title: 'Product Level',
    dataIndex: 'productLevel',
    key: 'productLevel',
    width: 120,
    render: (level) => <b>{level}</b>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const data: DocumentType[] = [
  {
    key: '1',
    productLevel: 1,
    description: 'Normally everyone can buy this product',
  },
  {
    key: '2',
    productLevel: 2,
    description: 'Only available for physicians/technicians and practice',
  },
  {
    key: '3',
    productLevel: 3,
    description: 'Just for a practice they can buy this product. For proper and professional look',
  },
];

export default function Documents() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <h1 className="text-2xl font-semibold mb-6">
            Your current level is <span className="text-[#ab45db]">1</span>. You can upgrade your level by providing us your documents.
          </h1>
          <Button
            type="primary"
            className="bg-[#ab45db] border-[#ab45db] hover:bg-[#9a38c7] hover:border-[#9a38c7] text-lg"
          >
            Add New Document(s) +
          </Button>
        </Col>

        <Col xs={24} md={12}>
          <Table<DocumentType>
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            rowKey="key"
          />
        </Col>
      </Row>
    </div>
  );
}
