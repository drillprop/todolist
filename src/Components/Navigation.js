import React from "react";
import { fireBaseApp } from "../base";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoSmall from "./LogoSmall";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = styled.nav`
  color: var(--main-color);
  display: flex;
  justify-content: space-between;
  height: 70px;
  text-transform: uppercase;
`;

const Nav = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  align-self: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

const ListedItem = styled.li`
  margin-right: 50px;
  font-weight: 700;
  letter-spacing: 2px;
`;

class Navigation extends React.Component {
  state = {
    loggedIn: false
  };

  logOut = () => {
    fireBaseApp
      .auth()
      .signOut()
      .then(() => this.setState({ loggedIn: false }));
  };
  render() {
    const userName = fireBaseApp.auth().currentUser;
    return (
      <Navbar>
        <LogoSmall />
        <HamburgerMenu userName={userName} logOut={this.logOut} />
        <Nav>
          <Link to="/login">
            <ListedItem onClick={this.logOut}>
              {userName ? "Log Out" : "Sign in"}
            </ListedItem>
          </Link>
          <ListedItem>
            {userName ? (
              <Link to="/dashboard">{`Logged as ${userName.email}`}</Link>
            ) : (
              <Link to="/register">Sign up</Link>
            )}
          </ListedItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
