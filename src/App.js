import React from "react";
import LazyLoad from "react-lazyload";
import data from "./data";

const Post = ({ id, title, body }) => (
  <div className="post">
    <LazyLoad 
      placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />}
      offset={200}
    >
    <div className="post-img">
      <img src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
    </div>
    </LazyLoad>
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
        <LazyLoad 
          placeholder={<div className="loading">Loading...</div>} key={post.id}
          offset={200}
        >
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>  
  </div>
);

export default App;
