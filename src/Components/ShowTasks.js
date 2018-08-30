import React, { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import styled from "styled-components";

const TasksContainer = styled.div`
  overflow-x: hidden;
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

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
    let i = 0;
    return (
      <TasksContainer>
        {tasksKeys.map(task => {
          i = i + 50;
          return (
            <Task
              delay={i}
              key={task}
              keyName={task}
              details={tasks[task]}
              editTask={editTask}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          );
        })}
      </TasksContainer>
    );
  }
}

export default ShowTasks;
