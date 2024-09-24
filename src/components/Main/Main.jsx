import { useRef } from "react"
import { FaRegSquareCaretDown } from "react-icons/fa6"
import About from "./About/About"
import MyProject from "./Project/MyProject"
import Skills from "./Skills/Skills"
import Career from "./Career/Career"
import Reviews from "./Reviews/Reviews"
import CompanyList from "./Companies/CompanyList"

const Main = () => {
  const targetRef = useRef(null)

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex-grow min-h-screen">
      <section className="h-screen flex justify-between items-center bg-[#0032ff]">
        {/* Left description */}
        <div className="-rotate-90 absolute top-1/3">
          <h1 className="text-white leading-none font-thin uppercase tracking-[0.15rem]">
            I&apos;m Timothy Lim Software Developer
          </h1>
        </div>

        {/* Right Links */}
        <div className="-rotate-90 flex items-end absolute -right-6 top-1/3">
          <div className="list-none flex text-white font-thin">
            <li className="mr-14">
              <a href="https://github.com/timothyytl">Git</a>
            </li>
            <li className="mr-14">
              <a href="#">Instagram</a>
            </li>
            <li className="mr-14">
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </div>
        </div>

        {/* Main Title and Description */}
        <div className="flex flex-col absolute top-1/3 left-1/4">
          <h6 className="text-white font-thin text-left">My Portfolio</h6>
          <h1 className="text-[80px] text-white font-extrabold text-left leading-[1] mt-6">
            Let&apos;s Talk About <br /> Your Project
          </h1>
          <div className="flex items-center mt-16">
            <h6 className="text-white">Scroll Down</h6>
            <button onClick={scrollToSection} className="cursor-pointer">
              <FaRegSquareCaretDown className="ml-10 h-8 w-8 text-white" />
            </button>
          </div>
        </div>

        <div className="w-full absolute bottom-0">
          <div className="flex justify-around text-white pb-10">
            <p className="font-thin">E: info@yourdomain.com</p>
            <p className="font-thin">T: +6011 2313 8583</p>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <About />
      {/* My Projects Section */}
      <MyProject reference={targetRef} />
      {/* Skills Section */}
      <Skills />
      {/* Career Section */}
      <Career />
      {/* Reviews Section */}
      <Reviews />
      {/* Company List Section */}
      <CompanyList />
    </main>
  )
}

export default Main
