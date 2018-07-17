import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Password" />
        <Link to="/dashboard">
          <button type="submit"> Log In</button>
        </Link>
      </form>
    );
  }
}

export default Login;
