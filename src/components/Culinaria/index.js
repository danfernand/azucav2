// @flow

import * as React from "react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Landing from "./Landing";
import { Route } from "react-router-dom";
import NavItem from "../NavItem";

const Culinaria = () => {
  return (
    <div className="content-menu">
      <ul className="sub-navigation">
        <li>
          <NavItem exactSelected={true} to="/culinaria/lunch" label="Lunch" />
        </li>
        <li>
          <NavItem exactSelected={true} to="/culinaria/dinner" label="Dinner" />
        </li>
      </ul>
      <Route exact path="/culinaria/lunch" component={Lunch} />
      <Route exact path="/culinaria/dinner" component={Dinner} />
      <Route exact path="/culinaria" component={Landing} />
    </div>
  );
};

export default Culinaria;
