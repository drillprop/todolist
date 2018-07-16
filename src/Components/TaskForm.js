import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="task-title"> Task title </label>
        <input id="task-title" type="text" placeholder="Task" />
        <br />
        <label htmlFor="task-description">Task description</label>
        <textarea id="task-description" type="text" placeholder="description" />
        <br />
        <label htmlFor="est-time">Estimated Time</label>
        <input id="est-time" type="number" placeholder="Estimated Time" />
        <br />
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

export default TaskForm;
