import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoSmall from "./LogoSmall";

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
`;

const ListedItem = styled.li`
  margin-right: 50px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Navigation = () => {
  return (
    <Navbar>
      <LogoSmall />
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
