import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Hamburger = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: ${props =>
    props.visible ? "var(--main-bg-color)" : "var(--main-color)"};
  font-size: 50px;
  cursor: pointer;
  z-index: 10002;
`;

const Menu = styled.section`
  position: absolute;
  top: 0;
  right: 0;
`;
const List = styled.ul`
  color: ${props =>
    props.visible ? "var(--main-bg-color)" : "var(--main-color)"};
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 500px;
  background: white;
  z-index: 10001;
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
            <li>Sign In</li>
            <li>Sign Up</li>
          </List>
        )}
      </Menu>
    );
  }
}

export default HamburgerMenu;
