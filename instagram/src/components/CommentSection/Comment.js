import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Comment.css";

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comment-text">
        <span className="user">{this.props.comment.username} </span>
        <span className="comment"> {this.props.comment.text}</span>{" "}
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
