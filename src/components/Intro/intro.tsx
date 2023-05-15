import Mockups from "/images/image-mockups.png"
import bgintroMobile from "/images/bg-intro-mobile.svg"

const Intro = () => {
  return (
    <section className=" w-screen pb-10 ">
      <figure
        style={{ backgroundImage: `url(${bgintroMobile})` }}
        className="bg-no-repeat bg-cover"
      >
        <img src={Mockups} alt="Mockups-image" className="" />
      </figure>
      <div className="text flex flex-col items-center gap-5 justify-center px-5 text-left">
        {" "}
        <h1 className="text-dark-blue font-semibold text-3xl leading-10">
          Next generation <br /> digital banking
        </h1>
        <p className="text-md">
          Take your financial life online. Your EasyBank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much more
        </p>
        <button className="px-7 py-2 bg-gradient-to-r from-lime-green to-bright-cyan rounded-full text-white font-bold text-sm">
          Request Invite
        </button>
      </div>
    </section>
  )
}

export default Intro
