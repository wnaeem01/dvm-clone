import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Vendoritems from './vendoritems';
const Preferredvendors = () => {
    const buttonStyle = {
    backgroundColor: '#ab45db',
    color: 'white',
    borderRadius: '50px',
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    };

  return (
     <>
      <div className='flex justify-between mb-2 px-8'>
        <div>
          <span className="text-4xl space-x-3 text-[#ab45db] font-semibold">| All</span>
          <span className="text-4xl space-x-3 text-black"> Your Veterinary Practice Needs!</span>
        </div>
        <Button
          shape="round"
          icon={<ArrowRightOutlined />}
          style={buttonStyle}
          size="large"
        >
          View All
        </Button>
      </div>

      <Vendoritems />
    </>
  )
}

export default Preferredvendors