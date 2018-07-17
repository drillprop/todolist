import React, { Fragment, Component } from "react";
import AddTaskForm from "./AddTaskForm";
import PropTypes from "prop-types";

class Dashboard extends Component {
  state = {
    tasks: {}
  };
  static propTypes = {
    addTask: PropTypes.func
  };
  addTask = task => {
    //copy tasks
    const tasks = { ...this.state.tasks };
    tasks[`task${Date.now()}`] = task;
    this.setState({
      tasks
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Witaj nieznajomy...</h1>
        <AddTaskForm addTask={this.addTask} />
      </Fragment>
    );
  }
}

export default Dashboard;
