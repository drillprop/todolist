import React, { Fragment, Component } from "react";
import TaskForm from "./TaskForm";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Witaj nieznajomy...</h1>
        <TaskForm />
      </Fragment>
    );
  }
}

export default Home;
