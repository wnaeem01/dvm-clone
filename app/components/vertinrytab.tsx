'use client';
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Vertinaryitems from './vertinaryitems';

const onChange = (key: string) => {
  console.log('Tab changed to:', key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Pharmaceuticals',
    children: <Vertinaryitems />,
  },
  {
    key: '2',
    label: 'Surgical Equipment',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Diagnostics',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Grooming',
    children: 'Content of Tab Pane 4',
  },
  {
    key: '5',
    label: 'Orthopedics',
    children: 'Content of Tab Pane 5',
  },
  {
    key: '6',
    label: 'X-Ray and Imaging',
    children: 'Content of Tab Pane 6',
  },
  {
    key: '7',
    label: 'Vaccines',
    children: 'Content of Tab Pane 7',
  },
  {
    key: '8',
    label: 'Dentistry',
    children: 'Content of Tab Pane 8',
  },
  {
    key: '9',
    label: 'Anesthesia',
    children: 'Content of Tab Pane 9',
  }
];

const Vertinarytab: React.FC = () => {
  return <div className='p-6'>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>;
};

export default Vertinarytab;
