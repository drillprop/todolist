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
      taskEstTime: PropTypes.string
    }),
    editTask: PropTypes.func,
    keyName: PropTypes.string
  };

  taskRef = React.createRef();

  makeTaskEditable = () => {
    this.setState({
      editable: !this.state.editable
    });
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
