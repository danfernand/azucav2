// @flow

import * as React from "react";
import Awards from "./Awards";
// import Brunch from "./Brunch";
import Comments from "./Comments";
import Findus from "./Findus";
import NewYears from "./NewYears";
import Menus from "./Menus";
import Home from "./Home";
import Reservations from "./Reservations";
import HappyHour from "./HappyHour";
import Culinaria from "./Culinaria";
import Valentines from "./Valentines";
import Vids from "./Vids";

import { Route } from "react-router-dom";

const Router = () => {
  return (
    <div id="main-content">
      <Route exact path="/" component={Home} />
      <Route path="/culinaria" component={Culinaria} />
      <Route path="/menu" component={Menus} />
      <Route path="/newYears" component={NewYears} />
      <Route exact path="/reservations" component={Reservations} />
      <Route exact path="/happyhour" component={HappyHour} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/findus" component={Findus} />
      <Route exact path="/awards" component={Awards} />
      <Route path="/valentines" component={Valentines} />
      <Route exact path="/vids" component={Vids} />
    </div>
  );
};

export default Router;
