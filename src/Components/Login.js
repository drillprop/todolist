import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { fireBaseApp } from "../base";
import { Form, Label, StyledInput } from "./Elements/Forms";
import Navigation from "./Navigation";
import { SubmitButton } from "./Elements/Button";
import firebase from "firebase/app";

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
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return fireBaseApp.auth().signInWithEmailAndPassword(email, password);
      })
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
          <h3>
            Log in to your <span>account</span>
          </h3>
          <h4>
            ...or <Link to="/register">create new one</Link>
          </h4>
          <Label htmlFor="username">Username:</Label>
          <StyledInput
            id="username"
            type="text"
            placeholder="Username"
            autoComplete="Username"
            innerRef={this.userNameRef}
          />
          <Label htmlFor="password">Password:</Label>
          <StyledInput
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            innerRef={this.userPasswordRef}
            // refs dont work with styled-components!
            // Use innerRef instead!
          />
          <SubmitButton type="submit"> Log In</SubmitButton>
        </Form>
      </React.Fragment>
    );
  }
}

export default Login;
