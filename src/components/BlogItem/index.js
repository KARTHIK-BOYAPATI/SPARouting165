import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList

  return (
    <div>
      <div className="BlogItemTitle">
        <h1 className="title">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default BlogItem
