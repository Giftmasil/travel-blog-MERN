import { useContext, useState } from "react";
import "./write.css";
import axios from "axios"
import { Context } from "../../context/Context";
import {useNavigate} from "react-router-dom"

export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = window.confirm("Are you sure you want to post this?");
    if (!confirm) {
      return;
    }

    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch(err) {
        alert(`Cannot upload the image because ${err}`)
      } 
    }
    try {
      const res = await axios.post("/posts", newPost)
      navigate("/post/" + res.data._id)
    } catch (err) {
      alert("Failed to create post")
      console.log(err)
    }
  }
  return (
    <div className="write">
      {file ? (
        <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt="dummy"
      />) 
        :
      (<img 
        className="writeImg"
        src="https://images.unsplash.com/photo-1718110190589-a97fb4143663?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="uploaded"
      />
      )}
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
