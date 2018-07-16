import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Link to="/login">
          <button>Click Here to login</button>
        </Link>
      </div>
    );
  }
}

export default App;
