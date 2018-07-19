import React, { Component } from "react";
import base, { fireBaseApp } from "../base";
import { Redirect } from "react-router-dom";

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
      <form onSubmit={this.register}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          autoComplete="Username"
          ref={this.userNameRef}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          ref={this.userPasswordRef}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
