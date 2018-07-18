import React, { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

class ShowTasks extends Component {
  static propTypes = {
    tasks: PropTypes.shape({
      taskTitle: PropTypes.string,
      taskDesc: PropTypes.string,
      taskEstTime: PropTypes.string
    }),
    editTask: PropTypes.func
  };
  render() {
    const { tasks, editTask } = this.props;
    const tasksKeys = Object.keys(this.props.tasks);
    return (
      <div>
        {tasksKeys.map(task => {
          return <Task key={task} details={tasks[task]} editTask={editTask} />;
        })}
      </div>
    );
  }
}

export default ShowTasks;
