type ArticleProps = {
  image: any
  author: string
  headline: string
  description: string
}
const Article: React.FC<ArticleProps> = ({
  author,
  image,
  headline,
  description,
}) => {
  return (
    <article className="flex flex-col bg-white rounded-md mt-10 gap-5 h-[500px]">
      <img src={image} alt="Image" className="h-1/2"/>
      <div className="text px-5 flex flex-col gap-3 h-1/2">
        <p className="text-grayish-blue text-sm ">{author}</p>
        <h1 className="font-semibold text-lg">{headline}</h1>
        <p className="text-sm text-grayish-blue">{description}</p>
      </div>
    </article>
  )
}

export default Article
