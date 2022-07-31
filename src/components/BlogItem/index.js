import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="item-container">
      <div className="blog-name">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="date">{description}</p>
    </li>
  )
}
export default BlogItem
