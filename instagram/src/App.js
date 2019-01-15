import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    console.log("constructor running");
    super();
    this.state = {
      posts: []
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

  render() {
    console.log("render running");
    return (
      <div className="App">
        <SearchBar posts={this.state.posts} />
        <PostsContainer
          posts={this.state.posts}
          onClick={this.state.addLike}
          onChange={this.state.handleChanges}
        />
        >
      </div>
    );
  }
}

export default App;
