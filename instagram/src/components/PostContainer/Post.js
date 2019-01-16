import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import PostLikes from "./PostLikes";

import "./Posts.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        {console.log("post", this.props.post.likes)}
        {console.log("Post", this.props.post.timestamp)}
        <CommentSection
          comments={this.props.post.comments}
          likes={this.props.post.likes}
          timestamp={this.props.timestamp}
        />
      </div>
    );
  }
}

export default Post;
