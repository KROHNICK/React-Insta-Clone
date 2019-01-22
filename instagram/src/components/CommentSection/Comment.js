import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  line-height: 24px;
  margin: 15px 0 15px 10px;
`;

const User = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Comments = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;

const Comment = props => {
  return (
    <CommentText>
      <User>{props.comment.username}</User>
      <Comments> {props.comment.text}</Comments>{" "}
    </CommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
