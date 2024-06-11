import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="woods"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            {/* try to get the author name from the username info */}
            <span className="singlePostAuthor">Author: <b>Gift</b></span>
            {/* try to get the date */}
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum sunt facere nam modi quis deleniti, necessitatibus vel hic? A ex aperiam, autem labore molestias iure cum laborum alias ipsam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum sunt facere nam modi quis deleniti, necessitatibus vel hic? A ex aperiam, autem labore molestias iure cum laborum alias ipsam!</p>
      </div>
    </div>
  )
}
