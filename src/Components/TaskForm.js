import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <form id="task-form">
        <label htmlFor="task-title"> Task title </label>
        <input id="task-title" type="text" placeholder="Task" />
        <br />
        <label htmlFor="task-description">Task description</label>
        <textarea
          id="task-description"
          type="text"
          placeholder="Description"
          rows="5"
          cols="20"
        />
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
