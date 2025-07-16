import Features from './components/features'
import Mainanimator from './components/mainanimator'
import Bottomheader from './layouts/bottomheader'
import Header from './layouts/header'
import Sidebar from './layouts/siderbar'
import Topheader from './layouts/topheader'
import { getCategories } from '../app/api/sidebar'; 
import Hotsellingproducts from './components/hotsellingproducts'
import Dealsbanner from './components/dealsbanner'
import Featuredproducts from './components/featuredproducts'

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
      <div className="container mx-auto px-6">
        <Hotsellingproducts />
      </div>
      <div className='px-62 py-20'>
        <Dealsbanner />
      </div>
      <div className="container mx-auto px-6 mt-20">
        <Featuredproducts/>
      </div>
        <div className="my-40 mx-65">
          <img
            src="assets/s3.png"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
    </div>
  )
}

export default page