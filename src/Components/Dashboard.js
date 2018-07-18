import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import AddTaskForm from "./AddTaskForm";
import ShowTasks from "./ShowTasks";
import base, { auth } from "../base";

class Dashboard extends Component {
  state = {
    tasks: {}
  };
  componentDidMount() {
    this.ref = base.syncState("dashboard/tasks", {
      context: this,
      state: "tasks"
    });
  }

  logOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ logged: false }))
      .catch(err => console.log(err));
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
  removeTask = task => {
    const tasks = { ...this.state.tasks };
    tasks[task] = null;
    this.setState({ tasks });
  };
  checkifLogged = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ logged: true });
      } else {
        this.setState({ logged: false });
      }
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Witaj nieznajomy...</h1>
        {auth.currentUser ? (
          <div>
            <button onClick={this.logOut}>Log Out</button>
            <AddTaskForm addTask={this.addTask} />
            <ShowTasks
              tasks={this.state.tasks}
              editTask={this.editTask}
              removeTask={this.removeTask}
            />
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <button>Please Login</button>
            </Link>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Dashboard;
