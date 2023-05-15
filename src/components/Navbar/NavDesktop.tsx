import logo from "/images/logo.svg"
import { RequestButton } from "../RequestButton"
const NavDesktop = () => {
  return (
    <nav className="hidden  lg:block h-20 w-screen shadow-sm bg-white z-50 relative">
      <div className="nav-content px-20 flex items-center w-screen h-full justify-between">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="links flex items-center gap-8">
          <a href="#" className="text-grayish-blue font-semibold">
            Home
          </a>
          <a href="#" className="text-grayish-blue font-semibold">
            About
          </a>
          <a href="#" className="text-grayish-blue font-semibold">
            Contact
          </a>
          <a href="#" className="text-grayish-blue font-semibold">
            Blog
          </a>
          <a href="#" className="text-grayish-blue font-semibold">
            Careers
          </a>
        </div>
        <RequestButton />
      </div>
    </nav>
  )
}

export default NavDesktop
