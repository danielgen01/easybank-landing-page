import "./App.css"
import Intro from "./components/Intro/introMobile"
import NavMobile from "./components/Navbar/NavMobile"
import Testimonials from "./components/Testimonials/Testimonials"
import Articles from "./components/Articles/Articles"
import Endcard from "./components/Endcard/Endcard"
import NavDesktop from "./components/Navbar/NavDesktop"
import IntroDesktop from "./components/Intro/introDesktop"

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavMobile />
      <NavDesktop />
      <Intro />
      <IntroDesktop />
      <Testimonials />
      <Articles />
      <Endcard />
    </div>
  )
}

export default App
