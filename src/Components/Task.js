import React, { Component } from "react";
import PropTypes from "prop-types";
class Task extends Component {
  static propTypes = {
    details: PropTypes.shape({
      taskTitle: PropTypes.string,
      taskDesc: PropTypes.string,
      taskEstTime: PropTypes.string
    })
  };
  taskRef = React.createRef();

  render() {
    const { taskTitle, taskDesc, taskEstTime } = this.props.details;
    return (
      <div draggable className="task">
        <h4>{taskTitle}</h4>
        <h4>{taskDesc}</h4>
        <h4>{taskEstTime}</h4>
      </div>
    );
  }
}

export default Task;
