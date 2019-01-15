import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "KROHNICK",
          text: this.state.comment
        }
      ],
      text: ""
    });
    this.state.comment = "";
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <p className="time-stamp">{this.props.timestamp}</p>
        <form onSubmit={this.addComment} className="commentInput">
          <input
            onSubmit={this.addComment}
            onChange={this.handleChanges}
            name="comment"
            type="text"
            placeholder="Add comment... "
          />
          <i className="fas fa-ellipsis-h" />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
