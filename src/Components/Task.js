import React, { Component } from "react";
import PropTypes from "prop-types";
import EditTaskForm from "./EditTaskForm";
import styled, { injectGlobal } from "styled-components";
import TaskControls from "./TaskControls";
import { CSSTransition } from "react-transition-group";

injectGlobal`
  .fadein-appear {
    transform:translate(-1000px);
  }
  .fadein-appear.fadein-appear-active {
    transform:translate(0);
    transition: transform 900ms;
  }
`;

const TaskContainer = styled.div`
  background: var(--main-color);
  opacity: ${props => (props.isTaskDone ? 0.5 : 1)};
  width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
`;
const TaskData = styled.section`
  margin-left: 15px;
`;

const TaskTitle = styled.h3`
  color: ${props =>
    props.isTaskDone
      ? "var(--main-bg-color); opacity:0.7"
      : "var(--accent-color)"};
  text-decoration-line: ${props => (props.isTaskDone ? "line-through" : null)};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
`;

const TaskDescription = styled.p`
  color: var(--main-bg-color);
  font-size: 10px;
`;

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
    const { doneTask, removeTask, keyName, editTask, delay } = this.props;
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={900 + delay}
        classNames="fadein"
      >
        <TaskContainer
          isTaskDone={isTaskDone}
          style={{ transitionDelay: delay + "ms" }}
        >
          <TaskData>
            <TaskTitle isTaskDone={isTaskDone}>{taskTitle}</TaskTitle>
            <TaskDescription>{taskDesc}</TaskDescription>
            <TaskDescription>{taskEstTime}</TaskDescription>
            {this.state.editable && (
              <EditTaskForm
                editTask={editTask}
                keyName={keyName}
                makeTaskEditable={this.makeTaskEditable}
                taskTitle={taskTitle}
                taskDesc={taskDesc}
                taskEstTime={taskEstTime}
              />
            )}
          </TaskData>
          <TaskControls
            isTaskDone={isTaskDone}
            removeTask={removeTask}
            editTask={editTask}
            doneTask={doneTask}
            keyName={keyName}
            makeTaskEditable={this.makeTaskEditable}
          />
        </TaskContainer>
      </CSSTransition>
    );
  }
}

export default Task;
