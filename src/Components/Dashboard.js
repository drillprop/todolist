import React, { Fragment, Component } from "react";
import AddTaskForm from "./AddTaskForm";
import ShowTasks from "./ShowTasks";
import base, { fireBaseApp } from "../base";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
  }
`;

// fireBaseApp.auth().onAuthStateChanged(user => {
//   if (user) {
//           const userId = fireBaseApp.auth().currentUser.uid;
// this.ref = base.syncState(`users/${userId}/tasks`, {
//   context: this,
//   state: "tasks"
// });
//   } else {
//     return null;
//   }
// });

class Dashboard extends Component {
  state = {
    tasks: {}
  };
  componentDidMount() {
    fireBaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        const userId = fireBaseApp.auth().currentUser.uid;
        this.ref = base.syncState(`users/${userId}/tasks`, {
          context: this,
          state: "tasks"
        });
      } else {
        return null;
      }
    });
    // WITHOUT ERROR IN CONSOLE BUT DIDNT WORK
    // if (fireBaseApp.auth().currentUser) {
    //   const userId = fireBaseApp.auth().currentUser.uid;
    //   this.ref = base.syncState(`users/${userId}/tasks`, {
    //     context: this,
    //     state: "tasks"
    //   });
    // }
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
          <DashboardContainer>
            <AddTaskForm addTask={this.addTask} />
            <ShowTasks
              tasks={this.state.tasks}
              editTask={this.editTask}
              removeTask={this.removeTask}
              doneTask={this.doneTask}
            />
          </DashboardContainer>
        ) : (
          <Redirect to="/login" />
        )}
      </Fragment>
    );
  }
}

export default Dashboard;
