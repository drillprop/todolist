import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../base";
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
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.setState({ logged: true }))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form onSubmit={this.loginMethod}>
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
        <button type="submit"> Log In</button>
      </form>
    );
  }
}

export default Login;
