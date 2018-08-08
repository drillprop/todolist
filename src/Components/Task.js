import React, { Component } from "react";
import PropTypes from "prop-types";
import EditTaskForm from "./EditTaskForm";
import styled from "styled-components";
import { SubmitButton } from "./Elements/Button";

const TaskContainer = styled.div`
  background: var(--main-color);
  color: black;
  width: 400px;
  height: 66px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
`;
const TaskData = styled.section`
  margin-left: 15px;
`;

const TaskTitle = styled.h3`
  color: var(--accent-color);
  text-transform: uppercase;
  font-size: 12px;
`;

const TaskDescription = styled.p`
  color: var(--main-bg-color);
  font-size: 10px;
`;

const TaskControls = styled.section`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
`;

const DeleteX = styled.span`
  font-family: arial;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  color: var(--accent-color);
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
        <TaskContainer>
          <TaskData>
            <TaskTitle>{taskTitle}</TaskTitle>
            <TaskDescription>{taskDesc}</TaskDescription>
            <TaskDescription>{taskEstTime}</TaskDescription>
          </TaskData>
          <TaskControls>
            <DeleteX onClick={() => removeTask(keyName)}>&times;</DeleteX>
            <SubmitButton onClick={this.makeTaskEditable}>
              Edit Task
            </SubmitButton>
            <input
              type="checkbox"
              checked={isTaskDone}
              onChange={() => doneTask(keyName)}
            />
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
