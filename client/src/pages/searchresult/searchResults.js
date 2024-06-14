import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Post from "../../components/post/Post";
import "./searchresults.css";

export default function SearchResults() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/search?query=${query}`);
      setPosts(res.data);
    };
    if (query) {
      fetchPosts();
    }
  }, [query]);

  return (
    <div className="searchResults">
      <h2>Search Results for: {query}</h2>
      <div className="searchResultsPosts">
        {posts.length > 0 ? (
          posts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
