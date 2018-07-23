import React, { Component } from "react";
import PropTypes from "prop-types";
import EditTaskForm from "./EditTaskForm";
class Task extends Component {
  taskCheckBox = React.createRef();
  state = {
    editable: false,
    isMounted: false
  };
  static propTypes = {
    details: PropTypes.shape({
      taskTitle: PropTypes.string,
      taskDesc: PropTypes.string,
      taskEstTime: PropTypes.string,
      isTaskDone: PropTypes.bool
    }),
    editTask: PropTypes.func,
    removeTask: PropTypes.func,
    keyName: PropTypes.string
  };

  componentDidMount = () => {
    if (this.props.details) {
      if (this.props.details.isTaskDone) {
        this.taskCheckBox.current.checked = true;
      }
    }
  };

  makeTaskEditable = () => {
    this.setState({
      editable: !this.state.editable
    });
  };

  makeTaskDone = () => {
    this.props.doneTask(this.props.keyName);
  };

  render() {
    const { taskTitle, taskDesc, taskEstTime } = this.props.details;
    if (!this.state.editable) {
      return (
        <div draggable className="task">
          <h4>{taskTitle}</h4>
          <h4>{taskDesc}</h4>
          <h4>{taskEstTime}</h4>
          <button onClick={this.makeTaskEditable}>Edit Task</button>
          <button onClick={() => this.props.removeTask(this.props.keyName)}>
            Remove item
          </button>
          <input
            ref={this.taskCheckBox}
            type="checkbox"
            onChange={this.makeTaskDone}
          />
        </div>
      );
    }
    return (
      <EditTaskForm
        editTask={this.props.editTask}
        keyName={this.props.keyName}
        makeTaskEditable={this.makeTaskEditable}
        taskTitle={taskTitle}
        taskDesc={taskDesc}
        taskEstTime={taskEstTime}
      />
    );
  }
}

export default Task;
