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
    doneTask: PropTypes.func,
    editTask: PropTypes.func,
    removeTask: PropTypes.func
  };

  render() {
    const { tasks, editTask, removeTask, doneTask } = this.props;
    const tasksKeys = Object.keys(tasks);
    return (
      <div>
        {tasksKeys.map(task => {
          return (
            <Task
              key={task}
              keyName={task}
              details={tasks[task]}
              editTask={editTask}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          );
        })}
      </div>
    );
  }
}

export default ShowTasks;
