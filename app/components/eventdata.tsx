import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const buttonS = {
  backgroundColor: '#ab45db',
  color: 'white',
  borderRadius: '50px',
  fontSize: '16px',
  padding: '10px 20px',
  border: 'none',
  margin: '20px'
}
const Eventdata = () => {
  return (
    <div className="flex flex-col md:flex-row px-70">
        <div className="col-span-12 md:col-span-6">
            <img src="assets/s4.webp" />
        </div>
        <div className="col-span-12 md:col-span-6 text-gray-700 align-middle flex flex-col justify-center items-start p-8">
            <h2 className="text-4xl font-bold text-[#ab45db] mb-2">
                DVM Central Virtual Events/Expos
            </h2>
            <h4 className="text-2xl font-semibold mb-4">
                Offering a Dynamic Experience
            </h4>
            <p>
                Guidance on recognizing, diagnosing, and managing BOAS in brachycephalic dogs within general practice.
            </p>
            <Button
                shape="round"
                style={buttonS}
                icon={<ArrowRightOutlined />}
                size="large"
                type="default"
                iconPosition="end"
            >
                Register Today
          </Button>
        </div>
    </div>
  )
}

export default Eventdata