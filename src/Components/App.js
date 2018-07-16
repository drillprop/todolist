import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Link to="/home">
          <button>Click Here to Continue</button>
        </Link>
      </div>
    );
  }
}

export default App;
