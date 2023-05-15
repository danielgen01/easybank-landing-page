import Mockups from "/images/image-mockups.png"
import bgIntroDesktop from "/images/bg-intro-desktop.svg"
import { RequestButton } from "../RequestButton"

const IntroDesktop = () => {
  return (
    <section className=" w-screen  hidden lg:grid grid-cols-2 relative z-10">
   
    <div className="text flex flex-col items-start gap-5 justify-center text-left px-20 -mt-52 xl:gap-7">
      {" "}
      <h1 className="text-dark-blue font-semibold text-5xl md:text-3xl">
        Next generation <br /> digital banking
      </h1>
      <p className="xl:text-xl md:text-lg">
        Take your financial life online. Your EasyBank account will be a
        one-stop-shop for spending, saving, budgeting, investing and much more
      </p>
      <RequestButton/>
    </div>

    <figure
      style={{ backgroundImage: `url(${bgIntroDesktop})` }}
      className="bg-no-repeat bg-cover relative -top-32"
    >
      <img src={Mockups} alt="Mockups-image" className="xl:pl-52 " />
    </figure>
  </section>
  )
}

export default IntroDesktop
