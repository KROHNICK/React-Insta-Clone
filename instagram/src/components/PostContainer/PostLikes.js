import React, { Component } from "react";

class PostLikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalLikes: props.likes,
      likeCount: 0
    };
  }

  addLike = e => {
    if (this.state.likeCount < 1) {
      this.setState(prevState => ({ totalLikes: ++prevState.totalLikes }));
      this.setState(prevState => ({ likeCount: ++prevState.likeCount }));
    } else if (this.state.likeCount === 1) {
      this.setState(prevState => ({ totalLikes: --prevState.totalLikes }));
      this.setState(prevState => ({ likeCount: --prevState.likeCount }));
    }
  };
  render() {
    return (
      <div>
        {/* {console.log(this.state.totalLikes)} */}
        <div className="d-flex action-btns">
          <i onClick={this.addLike} className="far fa-heart" />
          <i className="far fa-comment" />
        </div>
        <p className="totalLikes">{this.state.totalLikes} likes</p>
      </div>
    );
  }
}

export default PostLikes;
