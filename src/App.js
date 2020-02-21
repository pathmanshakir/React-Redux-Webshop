import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Containers/HomePage/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <Route>
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect exact from="/" to="home" />
          </Switch>
        </Route>
      </div>
    );
  }
}
export default App;
