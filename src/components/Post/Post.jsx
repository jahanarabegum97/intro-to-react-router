import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  console.log(post);
  const { id, title, body } = post;
  const navigate = useNavigate()


  const handleNavigation = ()=>{
    navigate(`/post/${id}`)
  }
  return (
    <div className="post">
      <h5>ID: {id}</h5>
      <h4>{title}</h4>
      {/* <p>{body}</p> */}
      <Link to={`/post/${id}`}>Show Details</Link>

      {/* <button>Show Post Details</button>  */}
      {/* nicer eita ekta system button dia dynamic korar syste... button dei dynamic korar arekta system ace seta nice..... */}
      <Link to={`/post/${id}`}>
        <button>Show Post Details</button>
      </Link>

      {/*  arek ta   use navigate dia... eita hocce route e patai dei.*/}
      <button onClick={handleNavigation}>With Button Handler</button>

    </div>
  );
};

export default Post;
