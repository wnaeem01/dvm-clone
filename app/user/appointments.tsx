
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Upcoming Appointments',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Past Appointments',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Cancelled Appointments',
    children: 'Content of Tab Pane 3',
  },
    {
        key: '4',
        label: 'Rescheduled Appointments',
        children: 'Content of Tab Pane 4',
    },
];

const Appointments = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} 
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' ,borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}}/>
  )
}

export default Appointments