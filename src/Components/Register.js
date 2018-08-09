import React, { Component } from "react";
import base, { fireBaseApp } from "../base";
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import { Label, Form, StyledInput } from "./Elements/Forms";
import { SubmitButton } from "./Elements/Button";

class Register extends Component {
  state = {
    logged: false
  };
  userNameRef = React.createRef();
  userPasswordRef = React.createRef();

  register = e => {
    e.preventDefault();
    const email = this.userNameRef.current.value;
    const password = this.userPasswordRef.current.value;
    fireBaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => data.user)
      .then(user => user.uid)
      .then(userId =>
        base.post(`users/${userId}`, {
          data: {
            email
          }
        })
      )
      .then(() => this.setState({ logged: true }))
      .then(o => console.log(o))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <Navigation />
        <Form onSubmit={this.register}>
          <h3>
            Create new
            <span>account</span>
          </h3>
          <h4>...or sign in to existing one</h4>
          <Label htmlFor="username">Username:</Label>
          <StyledInput
            id="username"
            type="text"
            placeholder="Username"
            autoComplete="Username"
            ref={this.userNameRef}
          />
          <Label htmlFor="password">Password:</Label>
          <StyledInput
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            ref={this.userPasswordRef}
          />
          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
      </React.Fragment>
    );
  }
}

export default Register;
