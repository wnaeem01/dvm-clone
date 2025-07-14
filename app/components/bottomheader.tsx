import Searchbar from "./Sub-Components/searchbar"
import SigninButton from "./Sub-Components/signinButton"
const Bottomheader = () => {
  return (
    <>
        <div className="flex bg-white sm:flex  justify-between  flex px-25 pt-2">
            <img src="/assets/Screenshot.png" className="  h-[30px] sm:flex sm:h-[55px] mt-2" alt="logo" />
            <Searchbar />
            <SigninButton />
        </div>
    </>
  )
}

export default Bottomheader