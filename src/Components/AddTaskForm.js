import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, StyledInput, StyledTextarea, Label } from "./Elements/Forms";
import { SubmitButton } from "./Elements/Button";
import styled from "styled-components";

const FormTask = styled.form`
  h3 {
    color: var(--main-color);
    font-size: 50px;
    text-transform: lowercase;
    font-weight: 900;
    align-self: flex-start;
    margin-top: 50px;
    margin-left: 50px;
  }
  h3 span {
    color: var(--accent-color);
    display: inline;
  }
`;

const AddTaskInput = StyledInput.extend`
  display: inline-block;
  width: 70%;
  margin-left: 70px;
  color: var(--main-color);
  border-bottom: 1px solid var(--main-color);
`;

const AddTaskButton = SubmitButton.extend`
  display: inline;
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
    // const taskDesc = this.taskDescRef.current.value;
    // const taskEstTime = this.taskEstTime.current.value;
    const task = {
      taskTitle,
      // taskDesc,
      // taskEstTime,
      isTaskDone: false
    };

    this.props.addTask(task);
    ev.currentTarget.reset();
  };
  render() {
    return (
      <FormTask onSubmit={this.createTask}>
        <h3>
          Add a <span>Task</span>
        </h3>
        {/* <Label htmlFor="task-title">Task title</Label> */}
        <AddTaskInput
          innerRef={this.taskTitleRef}
          id="task-title"
          type="text"
          placeholder="Task"
          required
        />
        {/* <br />
        <Label htmlFor="task-description">Task description(optional)</Label>
        <StyledTextarea
          innerRef={this.taskDescRef}
          id="task-description"
          type="text"
          placeholder="Description"
          rows="5"
          cols="20"
        />
        <br />
        <Label htmlFor="est-time">Estimated Time(optional)</Label>
        <StyledInput
          innerRef={this.taskEstTime}
          id="est-time"
          type="number"
          placeholder="Estimated Time"
        />
        <br /> */}
        <AddTaskButton type="submit">Submit</AddTaskButton>
      </FormTask>
    );
  }
}

export default AddTaskForm;
