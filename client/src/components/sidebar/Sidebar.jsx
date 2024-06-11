import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://images.unsplash.com/photo-1716384953735-be258c0aa9e4?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iusto voluptas voluptatem corrupti dignissimos nostrum, rem sed sit ex inventore, porro aliquam deserunt atque doloremque pariatur consequuntur quasi veniam voluptatum.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListitem">Life</li>
          <li className="sidebarListitem">Music</li>
          <li className="sidebarListitem">Sport</li>
          <li className="sidebarListitem">Style</li>
          <li className="sidebarListitem">Cinema</li>
          <li className="sidebarListitem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
        <a href="https://www.facebook.com/TheDummyPage/"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/_mas.ila_/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.pinterest.com/fakepinterest/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://twitter.com/_muuo11_"><i className="topIcon fab fa-twitter-square"></i></a>
      </div>
    </div>
  )
}
