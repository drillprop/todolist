import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  color: var(--main-color);
  display: flex;
  justify-content: space-between;
  height: 70px;
  text-transform: uppercase;
`;
const SmallLogo = styled.div`
  align-self: center;
  h3 {
    margin-left: 50px;
    font-size: 15px;
  }
  span {
    text-align: center;
    display: block;
    color: var(--accent-color);
    letter-spacing: 6px;
  }
  :hover {
    h3 {
      transition: all 300ms 500ms;
      color: var(--accent-color);
    }
    span {
      transition: all 300ms 500ms;
      color: var(--main-color);
    }
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
  font-weight: 700;
  letter-spacing: 2px;
`;

const Navigation = () => {
  return (
    <Navbar>
      <SmallLogo>
        <Link to="/">
          <h3>
            To Do <span id="list">List</span>
          </h3>
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
