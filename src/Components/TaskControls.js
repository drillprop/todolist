import React from "react";
import styled from "styled-components";
import Switch from "./Switch";
import EditIcon from "./Svg/EditIcon";
import InfoIcon from "./Svg/InfoIcon";

const ControlsContainer = styled.section`
  display: flex;
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
      : "var(--accent-color); opacity:1"};
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
      <button
        disabled={isTaskDone && true}
        onClick={makeTaskEditable}
        style={{
          height: "20px",
          border: "none",
          background: "none",
          cursor: "pointer"
        }}
      >
        <EditIcon isTaskDone={isTaskDone} />
      </button>
      <DeleteX
        isTaskDone={isTaskDone}
        onClick={e => {
          if (window.confirm("Are u sure?")) {
            e.currentTarget.parentElement.parentElement.style.transform =
              "scale(0)";
            setTimeout(() => {
              removeTask(keyName);
            }, 500);
          }
        }}
      >
        &times;
      </DeleteX>
      <span cursor="pointer" style={{ height: "20px", cursor: "pointer" }}>
        <InfoIcon isTaskDone={isTaskDone} />
      </span>
    </ControlsContainer>
  );
};

export default TaskControls;
