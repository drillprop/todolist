import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, StyledInput, StyledTextarea, Label } from "./Elements/Forms";
import { SubmitButton } from "./Elements/Button";
import styled from "styled-components";

const FormTask = Form.extend`
  position: static;
  transform: translate(0, 0);
`;

class AddTaskForm extends Component {
  taskTitleRef = React.createRef();
  taskDescRef = React.createRef();
  taskEstTime = React.createRef();
  static propTypes = {
    addTask: PropTypes.func
  };

  createTask = ev => {
    ev.preventDefault();
    const taskTitle = this.taskTitleRef.current.value;
    const taskDesc = this.taskDescRef.current.value;
    const taskEstTime = this.taskEstTime.current.value;
    const task = {
      taskTitle,
      taskDesc,
      taskEstTime,
      isTaskDone: false
    };

    this.props.addTask(task);
    ev.currentTarget.reset();
  };
  render() {
    return (
      <FormTask onSubmit={this.createTask}>
        <Label htmlFor="task-title"> Task title </Label>
        <StyledInput
          ref={this.taskTitleRef}
          id="task-title"
          type="text"
          placeholder="Task"
          required
        />
        <br />
        <Label htmlFor="task-description">Task description(optional)</Label>
        <StyledTextarea
          ref={this.taskDescRef}
          id="task-description"
          type="text"
          placeholder="Description"
          rows="5"
          cols="20"
        />
        <br />
        <Label htmlFor="est-time">Estimated Time(optional)</Label>
        <StyledInput
          ref={this.taskEstTime}
          id="est-time"
          type="number"
          placeholder="Estimated Time"
        />
        <br />
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormTask>
    );
  }
}

export default AddTaskForm;
