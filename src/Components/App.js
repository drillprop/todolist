import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900');
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: content-box;
}
a {
  text-decoration: none;
  color:inherit;
}
body {
  background: #ececec;
}
li {
  list-style:none;
}

`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Link to="/login">
          <button>Click Here to login</button>
        </Link>
      </div>
    );
  }
}

export default App;
