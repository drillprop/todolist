import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { fireBaseApp } from "../base";
import { Form, Label, StyledInput } from "./Elements/Forms";
import { SubmitButton } from "./Elements/Button";
import { CSSTransition } from "react-transition-group";
import { injectGlobal } from "styled-components";

injectGlobal`
.fade-appear {
  position:absolute;
  transform:translate(-50%, -1000%);
  opacity:0;
  animation:slideIn 700ms;
}
.fade-appear.fade-appear-active{
  position:absolute;
  transform:translate(-50%, -50%);
  opacity:1;
   }

   @keyframes slideIn {
     0% {transform:translate(-50%, -1000%);
     opacity:0}
     80% {transform: translate(-50%, -45%) scale(0.5) }
     100% {
       transform:translate(-50%, -50%) scale(1);
     opacity:1;}
   } 
  `;

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
        {this.props.children}
        <CSSTransition in={true} appear={true} timeout={700} classNames="fade">
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
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default Login;
