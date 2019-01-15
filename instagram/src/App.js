import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBarContainer";

class App extends Component {
  constructor() {
    console.log("constructor running");
    super();
    this.state = {
      posts: dummyData
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addLike = e => {
    e.preventDefault();
    this.setState({
      likes: [...this.state.likes, {}]
    });
  };

  componentDidMount() {
    console.log("CDM running");
    fetch(dummyData)
      .then(this.setState({}))
      .catch(err => console.log("nein"));
  }

  render() {
    console.log("render running");
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
