import { FaInstagram, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa"
import FooterLogo from "../../assets/TL.png"

const Footer = () => {
  return (
    <footer className="h-[250px] bg-black text-stone-400 grid grid-rows-[1fr,1fr]">
      {/* Top section */}
      <div className="flex justify-between items-center mx-40">
        <img src={FooterLogo} alt="footer logo" className="h-10 w-auto" />
        <div className="flex list-none uppercase">
          <li className=" hover:text-white">
            <a href="#">Home</a>
          </li>
          <p className="mx-6 font-extrabold">-</p>
          <li className="hover:text-white">
            <a href="#">About</a>
          </li>
          <p className="mx-6 font-extrabold">-</p>
          <li className="hover:text-white">
            <a href="#">Contact</a>
          </li>
          <p className="mx-6 font-extrabold">-</p>
          <li className="hover:text-white">
            <a href="#">Project</a>
          </li>
        </div>
      </div>
      {/* Bottom section */}
      <div className="flex justify-between mx-40 py-12 border-t border-stone-400">
        <p className="font-sans font-thin text-sm">
          &copy; 2024 Timothy Lim Portfolio Website. All rights reserved.
        </p>
        <div className="flex list-none">
          <li className="px-2">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="px-2">
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li className="px-2">
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className="px-2">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </div>
      </div>
    </footer>
  )
}

export default Footer
