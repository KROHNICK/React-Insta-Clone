import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import IGLogo from "../../assets/iglogo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

class Login extends Component {
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

  logIn = e => {
    e.preventDefault();
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    console.log(localStorage);
    return (
      <Form className="logInForm">
        <img className="login-logo" alt="Insta Logo" src={IGLogo} />
        <FormGroup>
          <Label for="loginUsername">Username</Label>
          <Input
            onChange={this.handleChanges}
            type="username"
            name="username"
            value={this.state.username}
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Password</Label>
          <Input
            onChange={this.handleChanges}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
        </FormGroup>
        <Button className="btn" onClick={this.logIn}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
