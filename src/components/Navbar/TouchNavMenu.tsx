type touchnavmenuprops = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const TouchNavMenu: React.FC<touchnavmenuprops> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <section style={{ display: isMenuOpen ? "block" : "none" }}>
      <div
        className="overlay fixed bg-black/30 top-20 left-0 h-screen w-screen"
        onClick={toggleMenu}
      ></div>
      <div className="menu bg bg-white h-72 w-[90%] absolute rounded-md -translate-x-1/2 top-24 left-1/2 py-8 flex flex-col items-center justify-evenly">
        <a href="#" className="text-lg font-semibold">
          Home
        </a>
        <a href="#" className="text-lg font-semibold">
          About
        </a>
        <a href="#" className="text-lg font-semibold">
          Contact
        </a>
        <a href="#" className="text-lg font-semibold">
          Blog
        </a>
        <a href="#" className="text-lg font-semibold">
          Careers
        </a>
      </div>
    </section>
  )
}

export default TouchNavMenu
