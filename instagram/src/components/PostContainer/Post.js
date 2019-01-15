import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="social-likes">
        <i class="far fa-heart" />
        <i class="far fa-comment" />
      </div>
      <div className="scoreLikes">
        <span className="likes">{props.post.likes} likes</span>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default Post;
