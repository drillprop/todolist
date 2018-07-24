import React, { Component } from "react";
import PropTypes from "prop-types";
import EditTaskForm from "./EditTaskForm";
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
        <div draggable className="task">
          <h4>{taskTitle}</h4>
          <h4>{taskDesc}</h4>
          <h4>{taskEstTime}</h4>
          <button onClick={this.makeTaskEditable}>Edit Task</button>
          <button onClick={() => removeTask(keyName)}>Remove item</button>
          <input
            type="checkbox"
            checked={isTaskDone}
            onChange={() => doneTask(keyName)}
          />
        </div>
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
