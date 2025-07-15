import Features from './components/features'
import Mainanimator from './components/mainanimator'
import Bottomheader from './layouts/bottomheader'
import Header from './layouts/header'
import Sidebar from './layouts/siderbar'
import Topheader from './layouts/topheader'

const page = () => {
  return (
    <div>
      <Sidebar/>
      <Topheader/>
      <Header/>
      <Bottomheader/>
      <Mainanimator/>
      <Features/>
    </div>
  )
}

export default page