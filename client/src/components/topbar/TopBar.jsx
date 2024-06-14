import { Link, useLocation, useNavigate } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate()
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/login")
  }

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/TheDummyPage/">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/_mas.ila_/">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://www.pinterest.com/fakepinterest/">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a href="https://twitter.com/_muuo11_">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
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
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div>
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
          </Link>
          <div className="Search">
            <i className="topSearchIcon fas fa-search"></i>
            <input className="searchInput" type="text" />
          </div>
          </div>
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
            </div>
          )
        )}
      </div>
    </div>
  );
}
