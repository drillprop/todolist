import React, { Component } from "react";

class AddTaskForm extends Component {
  taskTitleRef = React.createRef();
  taskDescRef = React.createRef();
  taskEstTime = React.createRef();

  createTask = ev => {
    ev.preventDefault();
    const taskTitle = this.taskTitleRef.current.value;
    const taskDesc = this.taskDescRef.current.value;
    const taskEstTime = this.taskEstTime.current.value;
    console.log(taskTitle, taskDesc, taskEstTime);
    const task = {
      taskTitle,
      taskDesc,
      taskEstTime
    };

    this.props.addTask(task);
    ev.currentTarget.reset();
  };
  render() {
    return (
      <form id="task-form" onSubmit={this.createTask}>
        <label htmlFor="task-title"> Task title </label>
        <input
          ref={this.taskTitleRef}
          id="task-title"
          type="text"
          placeholder="Task"
          required
        />
        <br />
        <label htmlFor="task-description">Task description(optional)</label>
        <textarea
          ref={this.taskDescRef}
          id="task-description"
          type="text"
          placeholder="Description"
          rows="5"
          cols="20"
        />
        <br />
        <label htmlFor="est-time">Estimated Time(optional)</label>
        <input
          ref={this.taskEstTime}
          id="est-time"
          type="number"
          placeholder="Estimated Time"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddTaskForm;
