import Features from './components/features'
import Mainanimator from './components/mainanimator'
import Bottomheader from './layouts/bottomheader'
import Header from './layouts/header'
import Sidebar from './layouts/siderbar'
import Topheader from './layouts/topheader'
import { getCategories } from '../app/api/sidebar'; 

const categories = await getCategories();
const page = () => {
  return (
    <div>
      <Sidebar categories={categories}/>
      <Topheader/>
      <Header/>
      <Bottomheader/>
      <Mainanimator/>
      <Features/>
    </div>
  )
}

export default page