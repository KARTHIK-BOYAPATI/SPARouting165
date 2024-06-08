import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsListDetails} = props

  return (
    <div>
      {blogsListDetails.map(each => (
        <BlogItem key={each.id} blogsList={each} />
      ))}
    </div>
  )
}

export default BlogList
