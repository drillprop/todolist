import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, StyledInput, Label, StyledTextarea } from "./Elements/Forms";
import { SubmitButton } from "./Elements/Button";
import styled from "styled-components";

const EditModal = Form.extend`
  box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.8);
`;

const EditTask = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;

class EditTaskForm extends Component {
  taskTitleRef = React.createRef();
  taskDescRef = React.createRef();
  taskEstTime = React.createRef();
  static propTypes = {
    keyName: PropTypes.string,
    taskTitle: PropTypes.string.isRequired,
    taskDesc: PropTypes.string,
    taskEstTime: PropTypes.string,
    editTask: PropTypes.func,
    makeTaskEditable: PropTypes.func
  };

  updateTask = ev => {
    ev.preventDefault();
    const { keyName, editTask, makeTaskEditable } = this.props;

    const taskTitle = this.taskTitleRef.current.value;
    const taskDesc = this.taskDescRef.current.value;
    const taskEstTime = this.taskEstTime.current.value;

    const task = {
      taskTitle,
      taskDesc,
      taskEstTime
    };

    editTask(keyName, task);
    makeTaskEditable();
  };

  hideModal = e => {
    if (e.target === e.currentTarget) {
      const { makeTaskEditable } = this.props;
      console.log("hiding");
      makeTaskEditable();
    }
  };

  render() {
    const { taskTitle, taskDesc, taskEstTime } = this.props;
    return (
      <EditTask onClick={this.hideModal}>
        <EditModal onSubmit={this.updateTask}>
          <Label htmlFor="task-title"> Task title </Label>
          <StyledInput
            innerRef={this.taskTitleRef}
            type="text"
            placeholder="Task"
            defaultValue={taskTitle}
            required
          />
          <br />
          <Label htmlFor="task-description">Task description(optional)</Label>
          <StyledTextarea
            innerRef={this.taskDescRef}
            type="text"
            placeholder="Description"
            defaultValue={taskDesc}
            rows="5"
            cols="20"
          />
          <br />
          <Label htmlFor="est-time">Estimated Time(optional)</Label>
          <StyledInput
            innerRef={this.taskEstTime}
            type="number"
            placeholder="Estimated Time"
            defaultValue={taskEstTime}
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
        </EditModal>
      </EditTask>
    );
  }
}

export default EditTaskForm;
