import React, { Fragment, Component } from "react";
import AddTaskForm from "./AddTaskForm";
import ShowTasks from "./ShowTasks";

class Dashboard extends Component {
  state = {
    tasks: {}
  };
  addTask = task => {
    const tasks = { ...this.state.tasks };
    tasks[`task${Date.now()}`] = task;
    this.setState({ tasks });
  };
  editTask = (task, updatedTask) => {
    const tasks = { ...this.state.tasks };
    tasks[task] = updatedTask;
    this.setState({ tasks });
  };

  render() {
    return (
      <Fragment>
        <h1>Witaj nieznajomy...</h1>
        <AddTaskForm addTask={this.addTask} />
        <ShowTasks tasks={this.state.tasks} editTask={this.editTask} />
      </Fragment>
    );
  }
}

export default Dashboard;
