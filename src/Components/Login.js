import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fireBaseApp } from "../base";
import { Form, Label } from "./Elements/Forms";
import Navigation from "./Navigation";
class Login extends Component {
  state = {
    logged: false
  };
  userNameRef = React.createRef();
  userPasswordRef = React.createRef();

  loginMethod = e => {
    e.preventDefault();
    const email = this.userNameRef.current.value;
    const password = this.userPasswordRef.current.value;

    fireBaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.setState({ logged: true }))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <Navigation />
        <Form onSubmit={this.loginMethod}>
          <Label htmlFor="username">Username:</Label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            autoComplete="Username"
            ref={this.userNameRef}
          />
          <Label htmlFor="password">Password:</Label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            ref={this.userPasswordRef}
          />
          <button type="submit"> Log In</button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Login;
