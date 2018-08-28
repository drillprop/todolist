import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import Navigation from "./Navigation";
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default Router;
