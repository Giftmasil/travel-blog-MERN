import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import Post from "../../components/post/Post";  // Assuming Post component is reused for displaying posts

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(`/posts?user=${user.username}`);
        setUserPosts(res.data);
      } catch (err) {
        console.error("Error fetching user posts:", err);
      }
    };

    fetchUserPosts();
  }, [user.username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      ...(password && { password }), // Update password only if it's not empty
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ marginBottom: "1rem" }}>My Profile</h1>
        {notification ? (
          <i className="fa-solid fa-bell" style={{ fontSize: "2rem", color: "green" }}></i>
        ) : (
          <i className="fa-regular fa-bell" style={{ fontSize: "2rem" }}></i>
        )}
      </div>
      <div className="settingsIntro" style={{ marginBottom: "1rem" }}>
        <img
          className="topMostImage"
          src={file ? URL.createObjectURL(file) : PF + user.profilePic}
          alt="user"
        />
        <div style={{ margin: "20px" }}>
          <p><strong>@{username}</strong></p>
          <p><strong>Conquering the great heights</strong></p>
        </div>
      </div>
      <h2 style={{ fontSize: "2rem" }}>Overview</h2>
      <div className="userPosts">
        {userPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Leave blank if not changing"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
