import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Router from "./Components/Router";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
