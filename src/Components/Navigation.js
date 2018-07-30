import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  color: #303a44;
  display: flex;
  justify-content: space-between;
  height: 70px;
  text-transform: uppercase;
`;
const SmallLogo = styled.div`
  flex-basis: 30px;
  align-self: center;
  h3 {
    margin-left: 50px;
  }
`;

const Nav = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  align-self: center;
`;

const ListedItem = styled.li`
  margin-right: 50px;
`;

const Navigation = () => {
  return (
    <Navbar>
      <SmallLogo>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </SmallLogo>
      <Nav>
        <Link to="/login">
          <ListedItem>Login</ListedItem>
        </Link>
        <Link to="/register">
          <ListedItem>Register</ListedItem>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
