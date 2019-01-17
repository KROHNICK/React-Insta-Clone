import React, { Component } from "react";
import "../SearchBar/SearchBar.css";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logOut = e => {
    e.preventDefault();
    const user = this.state.username;
    localStorage.removeItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div
        className="social"
        onChange={this.handleChanges}
        value={this.state.username}
        onClick={this.logOut}
      >
        <i className="far fa-user" />
      </div>
    );
  }
}

export default Logout;
