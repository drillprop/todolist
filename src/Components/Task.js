import React, { Component } from "react";
import PropTypes from "prop-types";
import EditTaskForm from "./EditTaskForm";
import styled from "styled-components";
import Switch from "./Switch";
import EditIcon from "./Svg/EditIcon";

const TaskContainer = styled.div`
  background: var(--main-color);
  opacity: ${props => (props.isTaskDone ? 0.5 : 1)};
  width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
`;
const TaskData = styled.section`
  margin-left: 15px;
`;

const TaskTitle = styled.h3`
  color: ${props =>
    props.isTaskDone
      ? "var(--main-bg-color); opacity:0.7"
      : "var(--accent-color)"};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
`;

const TaskDescription = styled.p`
  color: var(--main-bg-color);
  font-size: 10px;
`;

const TaskControls = styled.section`
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

class Task extends Component {
  state = {
    editable: false
  };
  static propTypes = {
    details: PropTypes.shape({
      taskTitle: PropTypes.string,
      taskDesc: PropTypes.string,
      taskEstTime: PropTypes.string,
      isTaskDone: PropTypes.bool
    }),
    editTask: PropTypes.func,
    doneTask: PropTypes.func,
    removeTask: PropTypes.func,
    keyName: PropTypes.string
  };

  makeTaskEditable = () => {
    this.setState({
      editable: !this.state.editable
    });
  };

  render() {
    const { taskTitle, taskDesc, taskEstTime, isTaskDone } = this.props.details;
    const { doneTask, removeTask, keyName, editTask } = this.props;
    if (!this.state.editable) {
      return (
        <TaskContainer isTaskDone={isTaskDone}>
          <TaskData>
            <TaskTitle isTaskDone={isTaskDone}>{taskTitle}</TaskTitle>
            <TaskDescription>{taskDesc}</TaskDescription>
            <TaskDescription>{taskEstTime}</TaskDescription>
          </TaskData>
          <TaskControls>
            <Switch
              type="checkbox"
              isTaskDone={isTaskDone}
              doneTask={doneTask}
              keyName={keyName}
            />
            <span onClick={this.makeTaskEditable} cursor="pointer">
              <EditIcon isTaskDone={isTaskDone} />
            </span>
            <DeleteX
              isTaskDone={isTaskDone}
              onClick={() => removeTask(keyName)}
            >
              &times;
            </DeleteX>
          </TaskControls>
        </TaskContainer>
      );
    }
    return (
      <EditTaskForm
        editTask={editTask}
        keyName={keyName}
        makeTaskEditable={this.makeTaskEditable}
        taskTitle={taskTitle}
        taskDesc={taskDesc}
        taskEstTime={taskEstTime}
      />
    );
  }
}

export default Task;
