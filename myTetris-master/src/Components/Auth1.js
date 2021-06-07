import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import "../css/index.css"

const Auth1 = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />

      </Switch>
    </div>
  );
};
export default Auth1;