import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import "./Posts.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }
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
