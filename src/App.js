import React from "react";
import LazyLoad from "react-lazyload";
import data from "./data";

const Post = ({ id, title, body }) => (
  <div className="post">
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

const  App = () => (
  <div className="App">
    <h2>LazyLoad Demo</h2>
    <div className="post-container">
      {data.map(post => (
        <LazyLoad height={200} placeholder={<div className="loading">Loading...</div>}>
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>  
  </div>
);

export default App;
