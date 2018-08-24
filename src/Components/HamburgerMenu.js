import React from "react";
import styled from "styled-components";

const Hamburger = styled.span`
  color: var(--main-color);
  height: 25px;
`;

class HamburgerMenu extends Component {
  state = {};
  render() {
    return <Hamburger> &#9776</Hamburger>;
  }
}

export default HamburgerMenu;
