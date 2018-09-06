import React, { Component } from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  align-self: center;
  span {
    color: var(--main-color);
    position: relative;
    bottom: 15px;
    left: 28px;
    font-size: 8px;
    font-weight: 900;
    z-index: 1;
  }
`;

const StyledSwitch = styled.input`
  position: relative;
  margin:0 35px 0 auto;
  width: 80px;
  height: 40px;
  appearance: none;
  background: var(--main-bg-color);
  outline: none;
  border-radius: 20px;
  transition:all 500ms;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  :checked  {
    background: var(--main-bg-color);
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
    background-color: var(--accent-color);
    box-shadow:2px 3px 5px rgba(0,0,0, .25);
    transition: all .5s;
    z-index:4;
  }

   :checked::before {
      left: 40px;
      background-color: var(--main-color);
    }
  }
`;

class Switch extends Component {
  render() {
    const { isTaskDone, keyName, doneTask } = this.props;
    return (
      <SwitchContainer>
        <StyledSwitch
          checked={isTaskDone}
          type="checkbox"
          onChange={() => doneTask(keyName)}
        />
      </SwitchContainer>
    );
  }
}

export default Switch;
