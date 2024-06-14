import Post from "../../post/Post"
import "./posts.css"

export default function posts({posts}) {
  //come later to map over the post according from post where it will be stored
  const allPosts = posts.map(post => {
    return <Post post={post} key={post._id} />
  })
  return (
    <div className='posts'>
      {allPosts}
    </div>
  )
}
