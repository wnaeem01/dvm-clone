import Bottomheader from "../layouts/bottomheader"
import Topheader from "../layouts/topheader"
import Header from "../layouts/header"
import Sidebar from "../layouts/siderbar"
import Footer from "../layouts/footer"
import { getCategories } from "../api/sidebar"
import SignIn from "./page"

const categories = await getCategories() || [];
const Layout = () => {
    
  return (
    <>
        <Sidebar categories={categories} />
        <Topheader />
        <Header />
        <Bottomheader />
        <SignIn />
        <Footer />
    </>
  )
}

export default Layout