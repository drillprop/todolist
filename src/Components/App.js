import React, { Component } from "react";
import Header from "./Header";
import { injectGlobal } from "styled-components";

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
  color: var(--main-color);
  transition: all .5s;
}

{/* This block is fixing ugly yellowish background in chrome */}
input:-webkit-autofill {
-webkit-text-fill-color: var(--main-bg-color); 
background-color:var(--main-color);
shadow: 0 0 0px 10px black inset;
transition: background-color 5000s ease-in-out 0s;
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
        <Header />
      </div>
    );
  }
}

export default App;
