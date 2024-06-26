import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://travel-blog-mern-1.onrender.com/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>  
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
