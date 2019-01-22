import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";

const PostsContainerWrapper = styled.div`
  height: 500px;
  width: 50%;
  margin: 5px auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </PostsContainerWrapper>
  );
};

export default PostContainer;
