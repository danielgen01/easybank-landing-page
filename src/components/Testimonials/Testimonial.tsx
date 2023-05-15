type TestimonialProps = {
  icon: any
  text: string
  title:string
}

const Testimonial: React.FC<TestimonialProps> = ({ icon, text ,title}) => {
  return (
    <figure className="flex flex-col items-center mt-10 gap-5 px-5">
      <img src={icon} alt="" />
      <h1 className="text-dark-blue font-semibold whitespace-nowrap">{title}</h1>
      <p className="text-sm text-center">
        {text}
      </p>
    </figure>
  )
}

export default Testimonial
