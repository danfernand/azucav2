import React from "react";
import Menu from "./Menu";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";

const NewYears = () => {
  return (
    <Switch>
      <Route exact path="/newYears/menu" component={Menu} />
      <Route exact path="/newYears" component={Landing} />
    </Switch>
  );
};

export default NewYears;
