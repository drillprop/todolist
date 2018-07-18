import React, { Component } from "react";
import PropTypes from "prop-types";

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
  render() {
    const { taskTitle, taskDesc, taskEstTime } = this.props;
    return (
      <div className="task">
        <form onSubmit={this.updateTask}>
          <label htmlFor="task-title"> Task title </label>
          <input
            ref={this.taskTitleRef}
            type="text"
            placeholder="Task"
            defaultValue={taskTitle}
            required
          />
          <br />
          <label htmlFor="task-description">Task description(optional)</label>
          <textarea
            ref={this.taskDescRef}
            type="text"
            placeholder="Description"
            defaultValue={taskDesc}
            rows="5"
            cols="20"
          />
          <br />
          <label htmlFor="est-time">Estimated Time(optional)</label>
          <input
            ref={this.taskEstTime}
            type="number"
            placeholder="Estimated Time"
            defaultValue={taskEstTime}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditTaskForm;
