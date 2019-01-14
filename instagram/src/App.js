import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PostContainer />
      </div>
    );
  }
}

export default App;
