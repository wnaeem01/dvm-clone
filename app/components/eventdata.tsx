import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
const Eventdata = () => {
  return (
    <div>
        <div className="col-span-12 md:col-span-6">
            <img src="assets/s4.webp" />
        </div>
        <div className="col-span-12 md:col-span-6">
            <h2>
                DVM Central Virtual Events/Expos
            </h2>
            <h4>
                Offering a Dynamic Experience
            </h4>
            <p>
                Guidance on recognizing, diagnosing, and managing BOAS in brachycephalic dogs within general practice.
            </p>
        </div>
         <Button
            shape="round"
            icon={<ArrowRightOutlined />}
            size="large"
            type="default"
            iconPosition="end"
          >
            Register Today
          </Button>
    </div>
  )
}

export default Eventdata