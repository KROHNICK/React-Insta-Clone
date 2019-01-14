import React from "react";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <div className="postContainer">
      <div className="user">
        <div className="profilePic">.</div>
        <div className="profileName">
          <strong>philzcoffee</strong>
        </div>
      </div>
      <div className="photo">
        {/* <img
        src=""
        alt="Toast Img"
      /> */}
      </div>
      <CommentSection />
    </div>
  );
}

export default PostContainer;
