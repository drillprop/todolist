import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { injectGlobal } from "styled-components";
import { Button } from "./Elements/Button";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900');
:root {
  --main-bg-color: #303A44;
  --main-color: #F9FCFF;
  --accent-color:#CA3C25; 
}

* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: content-box;
  color: var(--main-color)
}
a {
  text-decoration: none;
  color:inherit;
}
body {
  background: var(--main-bg-color);
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
      </div>
    );
  }
}

export default App;
