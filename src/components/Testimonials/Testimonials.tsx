import Testimonial from "./Testimonial"
import iconbudget from "/images/icon-budgeting.svg"
import icononboarding from "/images/icon-onboarding.svg"
import icononline from "/images/icon-online.svg"
import iconapi from "/images/icon-api.svg"

const Testimonials = () => {
  return (
    <section className="bg-light-grayish-blue min-h-[200px] py-10 flex flex-col items-center gap-5">
      <h1 className="text-3xl text-dark-blue font-semibold leading-10">
        Why choose <br />
        Easybank?
      </h1>
      <p className="text-center">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before
      </p>
      <Testimonial
        icon={icononline}
        text={
          "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        }
        title="Online Banking"
      />
      <Testimonial
        icon={iconbudget}
        text={
          "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        }
        title="Simple Budgeting"
      />
      <Testimonial
        icon={icononboarding}
        text={
          "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        }
        title="Fast Onboarding"
      />
      <Testimonial
        icon={iconapi}
        text={
          "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
        title="Open API"
      />
    </section>
  )
}

export default Testimonials
