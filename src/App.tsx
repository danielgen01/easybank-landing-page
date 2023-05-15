import "./App.css"
import Intro from "./components/Intro/intro"
import NavMobile from "./components/Navbar/NavMobile"
import Testimonials from "./components/Testimonials/Testimonials"
import Articles from "./components/Articles/Articles"
import Endcard from "./components/Endcard/Endcard"

function App() {
  return (
    <>
      <NavMobile />
      <Intro />
      <Testimonials />
      <Articles />
      <Endcard />
    </>
  )
}

export default App
