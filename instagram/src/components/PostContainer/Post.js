import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import styled from "styled-components";

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 20px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Post = props => {
  return (
    <PostBorder>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <PostImageWrapper>
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </PostImageWrapper>
      {/* {console.log("post", this.props.post.likes)}
        {console.log("Post", this.props.post.timestamp)} */}
      <CommentSection
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.timestamp}
      />
    </PostBorder>
  );
};

export default Post;
