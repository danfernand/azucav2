import React from "react";
import Menu from "./Menu";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";

const Valentines = () => {
  return (
    <Switch>
      <Route exact path="/valentines/offering" component={Menu} />
      <Route exact path="/valentines" component={Landing} />
    </Switch>
  );
};

export default Valentines;
