import Post from "../../post/Post"
import "./posts.css"

export default function posts() {
  //come later to map over the post according from post where it will be stored
  return (
    <div className='posts'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
