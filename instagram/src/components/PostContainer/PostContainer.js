import React from "react";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <div className="postContainer">
      <div className="user">
        <div className="profilePic" />
        <div className="profileName" />
      </div>
      <img />
      <div className="likes">
        <div className="likesIcon" />
        <div className="commentsIcon" />
        <p />
      </div>
      <div className="comments">
        <p />
      </div>
      <CommentSection />
    </div>
  );
}

export default PostContainer;
