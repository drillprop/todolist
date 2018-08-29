import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hamburger = styled.h3`
  font-family: Arial;
  margin-top: 8px;
  margin-right: 50px;
  position: absolute;
  top: 0;
  right: 0;
  color: ${props =>
    props.visible ? "var(--main-bg-color)" : "var(--main-color)"};
  font-size: 37px;
  font-weight: 900;
  cursor: pointer;
  z-index: 10002;
  @media (min-width: 500px) {
    display: none;
  }
`;

const Menu = styled.section`
  position: absolute;
  top: 0;
  right: 0;
`;
const List = styled.div`
  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.5);
  padding: 0;
  color: var(--main-bg-color);
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  background: var(--main-color);
  z-index: 10001;
  ul {
    margin-top: 100px;
  }
  li {
    margin-bottom: 20px;
    color: var(--main-bg-color);
    font-weight: 900;
    text-align: right;
    margin-right: 50px;
  }
`;

class HamburgerMenu extends Component {
  state = {
    menuVisible: false
  };
  makeVisible = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  };

  render() {
    return (
      <Menu>
        <Hamburger visible={this.state.menuVisible} onClick={this.makeVisible}>
          &#9776;
        </Hamburger>
        {this.state.menuVisible && (
          <List visible={this.state.menuVisible}>
            <ul>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/register"> Sign Up</Link>
              </li>
            </ul>
          </List>
        )}
      </Menu>
    );
  }
}

export default HamburgerMenu;
