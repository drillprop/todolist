import React from "react";
import styled from "styled-components";
import Switch from "./Switch";
import EditIcon from "./Svg/EditIcon";
import InfoIcon from "./Svg/InfoIcon";

const ControlsContainer = styled.section`
  display: flex;
  span {
    cursor: pointer;
  }
`;

const DeleteX = styled.span`
  align-self: flex-start;
  font-family: Arial;
  margin-left: 6px;
  margin-right: 8px;
  line-height: 0.95;
  font-size: 25px;
  font-weight: 900;
  cursor: pointer;
  color: ${props =>
    props.isTaskDone
      ? "var(--main-bg-color); opacity:0.7"
      : "var(--accent-color)"};
`;

const TaskControls = props => {
  const { isTaskDone, removeTask, keyName, doneTask, makeTaskEditable } = props;
  return (
    <ControlsContainer>
      <Switch
        type="checkbox"
        isTaskDone={isTaskDone}
        doneTask={doneTask}
        keyName={keyName}
      />
      <span
        onClick={makeTaskEditable}
        cursor="pointer"
        style={{ height: "20px" }}
      >
        <EditIcon isTaskDone={isTaskDone} />
      </span>
      <DeleteX
        isTaskDone={isTaskDone}
        onClick={() => {
          if (window.confirm("Are u sure?")) {
            removeTask(keyName);
          }
        }}
      >
        &times;
      </DeleteX>
      <span cursor="pointer" style={{ height: "20px" }}>
        <InfoIcon isTaskDone={isTaskDone} />
      </span>
    </ControlsContainer>
  );
};

export default TaskControls;
