import React, { Fragment, Component } from "react";
import AddTaskForm from "./AddTaskForm";
import ShowTasks from "./ShowTasks";
import base, { fireBaseApp } from "../base";
import { SubmitButton } from "./Elements/Button";
import Login from "./Login";

class Dashboard extends Component {
  state = {
    tasks: {}
  };
  componentDidMount() {
    if (fireBaseApp.auth().currentUser) {
      const userId = fireBaseApp.auth().currentUser.uid;
      this.ref = base.syncState(`users/${userId}/tasks`, {
        context: this,
        state: "tasks"
      });
    }
  }

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
  removeTask = task => {
    const tasks = { ...this.state.tasks };
    tasks[task] = null;
    this.setState({ tasks });
  };
  doneTask = task => {
    const tasks = { ...this.state.tasks };
    tasks[task].isTaskDone = !tasks[task].isTaskDone;
    this.setState({ tasks });
  };

  render() {
    return (
      <Fragment>
        {fireBaseApp.auth().currentUser ? (
          <div>
            <AddTaskForm addTask={this.addTask} />
            <ShowTasks
              tasks={this.state.tasks}
              editTask={this.editTask}
              removeTask={this.removeTask}
              doneTask={this.doneTask}
            />
          </div>
        ) : (
          <Login>
            <h1>You are not logged in!</h1>
          </Login>
        )}
      </Fragment>
    );
  }
}

export default Dashboard;
