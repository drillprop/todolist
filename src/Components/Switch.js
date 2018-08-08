import React, { Component } from "react";
import styled from "styled-components";

const StyledSwitch = styled.input`
  position: relative;
  width: 80px;
  height: 40px;
  appearance: none;
  background: grey;
  outline: none;
  border-radius: 20px;
  transition:all 500ms;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  :checked  {
    background: blue;
  }
  ::before {
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transform: scale(1.5);
    background-color: black;
    transition: all .5s;
  }

   :checked::before {
      left: 40px;
    }
  }
`;

class Switch extends Component {
  render() {
    const { keyName, doneTask } = this.props;

    return (
      <div>
        <StyledSwitch type="checkbox" onChange={() => doneTask(keyName)} />
      </div>
    );
  }
}

export default Switch;
