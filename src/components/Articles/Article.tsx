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
    <article className="flex flex-col bg-white rounded-md mt-10 gap-5">
      <img src={image} alt="Image" />
      <div className="text px-5 flex flex-col gap-3">
        <p className="text-grayish-blue text-sm ">{author}</p>
        <h1 className="font-semibold text-lg">{headline}</h1>
        <p className="text-sm text-grayish-blue">{description}</p>
      </div>
    </article>
  )
}

export default Article
