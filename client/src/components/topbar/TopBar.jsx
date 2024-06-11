import { Link, useLocation } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/TheDummyPage/"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/_mas.ila_/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.pinterest.com/fakepinterest/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://twitter.com/_muuo11_"><i className="topIcon fab fa-twitter-square"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          currentPath !== "/login" &&
          currentPath !== "/register" && (
            <div className="topRight">
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
              <div className="Search">
                <i className="topSearchIcon fas fa-search"></i>
                <input className="searchInput" type="text"/>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
