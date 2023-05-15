import logo from "/images/logo.svg"
import menu from "/images/icon-hamburger.svg"
import close from "/images/icon-close.svg"
import { useState } from "react"
import TouchNavMenu from "./TouchNavMenu"

const NavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className=" h-20 w-screen shadow-sm z-50 ">
      <div className="nav-content px-5 flex h-full w-full items-center justify-between">
        <img src={logo} alt="logo" className="w-1/2" />
        {!isMenuOpen ? (
          <img
            src={menu}
            alt="menu-icon"
            className="h-4"
            onClick={toggleMenu}
          />
        ) : (
          <img
            src={close}
            alt="close-icon"
            className="h-6 w-6"
            onClick={toggleMenu}
          />
        )}
      </div>
      <TouchNavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default NavMobile
