import React, { useEffect, useState } from "react";
import Card from "../../card"
import Loader from "../loader/loader";
import PostContext from "./postContext";

const PostView = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2525/all")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
        setLoading(false);
      });
  }, []);
  
  return (
    <PostContext.Provider value={post}>
    {loading ? (
      <Loader />
    ) : (
      <div className="post-container">
        {post.map((post, i) => {
          return <Card post={post} key={i} />;
        })}
      </div>
    )}
  </PostContext.Provider>
);
};

export default PostView;
