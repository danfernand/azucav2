import React from "react";
import Menu from "./Menu";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";

const NewYears = () => {
  return (
    <Switch>
      <Route exact path="/mothersDay/menu" component={Menu} />
      <Route exact path="/mothersDay" component={Landing} />
    </Switch>
  );
};

export default NewYears;
