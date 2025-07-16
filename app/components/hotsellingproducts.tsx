import { ArrowRightOutlined } from '@ant-design/icons';
import Hotsellingcards from './hotsellingcards';
import { Button } from 'antd';

const buttonS = {
  backgroundColor: '#ab45db',
  color: 'white',
  borderRadius: '50px',
  fontSize: '16px',
  padding: '10px 20px',
  border: 'none',
};
const Hotsellingproducts = () => {
  return (
    <>
        <div className='flex justify-between mb-8 px-8'>
            <div>
                <span className="text-4xl space-x-3 text-[#ab45db] font-semibold">| Hot Selling Products</span>
                <span className="text-4xl space-x-3 text-black"> | Explore & Choose!</span>
            </div>
            <Button shape="round" icon={<ArrowRightOutlined/>} style={buttonS} iconPosition='end' size='large'>
                View All
            </Button>
        </div>
        <Hotsellingcards/>
    </>
  )
}

export default Hotsellingproducts