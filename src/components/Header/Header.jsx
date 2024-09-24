import { FaBars } from "react-icons/fa6"
import logo from "../../assets/TL.png"

const Header = () => {
  return (
    <header className="absolute left-12 right-12 mx-20 py-10">
      <div className="flex justify-between px-6">
        <img src={logo} alt="logo" className="w-auto h-8" />
        <FaBars className="text-white w-8 h-8" />
      </div>
    </header>
  )
}

export default Header
