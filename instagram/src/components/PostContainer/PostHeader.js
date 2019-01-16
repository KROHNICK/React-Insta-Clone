import React, { Component } from "react";
import "./Posts.css";

class PostHeader extends Component {
  render() {
    return (
      <div className="post-header">
        <div className="post-thumb-wrapper">
          <img
            alt="post header"
            className="post-thumb"
            src={this.props.thumbnailUrl}
          />
        </div>
        <div className="userName">{this.props.username}</div>
      </div>
    );
  }
}

export default PostHeader;
