import Post from "../post/Post"
import "./posts.css"

export default function posts({posts}) {
  const allPosts = posts.map(post => {
    return <Post post={post} key={post._id} />
  })
  return (
    <div className='posts'>
      {allPosts}
    </div>
  )
}
