import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostsContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBarContainer";

class PostsPage extends Component {
  constructor() {
    console.log("constructor running");
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
    console.log(this.state.posts);
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log("CDM running");
    this.setState({
      posts: dummyData
    });
  }

  searchPosts = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    console.log("render running");
    return (
      <div className="PostsPage">
        <SearchBar
          posts={this.state.posts}
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPosts}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
          onClick={this.state.addLike}
          onChange={this.state.handleChanges}
        />
      </div>
    );
  }
}

export default PostsPage;
