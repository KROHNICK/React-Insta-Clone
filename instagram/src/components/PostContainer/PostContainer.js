import React, { Component } from "react";
import Post from "./Post";
import "./Posts.css";

class PostContainer extends Component {
  render() {
    return (
      <div className="posts-container-wrapper">
        {this.props.posts.map(p => (
          <Post key={p.imageUrl} post={p} />
        ))}
      </div>
    );
  }
}

export default PostContainer;
