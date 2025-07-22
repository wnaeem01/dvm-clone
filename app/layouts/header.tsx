import Searchbar from "../components/searchbar"
import Signupbutton from "../components/signupbutton"

const Header = () => {
  return (
    <header className="flex justify-around px-40">
        <img src="/assets/Screenshot.png" alt="Logo" className="h-17 w-70 mt-1"/>
        <Searchbar />
        <Signupbutton />
    </header>
  )
}

export default Header