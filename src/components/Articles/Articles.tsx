import currency from "/images/image-currency.jpg"
import restaurant from "/images/image-restaurant.jpg"
import plane from "/images/image-plane.jpg"
import confetti from "/images/image-confetti.jpg"
import Article from "./Article"

const Articles = () => {
  return (
    <section className="articles flex flex-col items-center min-[200px] py-10 px-5 bg-very-light-gray">
      <h1 className="text-2xl text-dark-blue font-semibold">Latest Articles</h1>
      <Article
        image={currency}
        headline="Receive money in any currency with no fees"
        description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        author="By Claire Robinson"
      />
      <Article
        image={restaurant}
        headline="Treat yourself without worrying about money"
        description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        author="By Wilson Hutton"
      />
      <Article
        image={plane}
        headline="Take your Easybank card wherever you go"
        description="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        author="By Wilson Hutton"
      />
      <Article
        image={confetti}
        headline="Our invite-only Beta accounts are now live!"
        description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        author="By Claire Robinson"
      />
    </section>
  )
}

export default Articles
