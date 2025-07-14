import Bottomheader from "./components/bottomheader"
import Lastheader from "./components/lastheader"
import Topheader from "./components/topheader"

const page = () => {
  return (
    <div>
      <Topheader/>
      <Bottomheader/>
      <Lastheader/>
    </div>
  )
}

export default page