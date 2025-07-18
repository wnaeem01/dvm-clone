import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Featureproductscards from './featureproductscards';

const buttonS = {
  backgroundColor: '#ab45db',
  color: 'white',
  borderRadius: '50px',
  fontSize: '16px',
  padding: '10px 20px',
  border: 'none',
};
const Featuredproducts = () => {
  return (
     <>
        <div className='flex justify-between mb-8 px-8'>
            <div>
                <span className="text-4xl space-x-3 text-[#ab45db] font-semibold">| Featured</span>
                <span className="text-4xl space-x-3 text-black"> Products</span>
            </div>
            <Button shape="round" icon={<ArrowRightOutlined/>} style={buttonS} iconPosition='end' size='large'>
                View All
            </Button>
        </div>
        <Featureproductscards/>
    </>
  )
}

export default Featuredproducts