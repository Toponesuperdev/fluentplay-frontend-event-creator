import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

export default class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <Switch>
          {routes.map((route, index) => {
            return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          )})};
        </Switch>
      </Router>
  )}
}