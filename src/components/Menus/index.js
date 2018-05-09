// @flow

import * as React from 'react'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Bar from './Bar'
import Wine from './Wine'
import Landing from './Landing'
import { Route } from "react-router-dom";
import NavItem from '../NavItem'

const Menus = () => {
  return (
    <div className="content-menu">
      <ul className="sub-navigation">
        <li>
          <NavItem exactSelected={true} to="/menu/lunch" label="Lunch" />
        </li>
        <li>
          <NavItem exactSelected={true} to="/menu/dinner" label="Dinner" />
        </li>
        <li>
          <NavItem exactSelected={true} to="/menu/bar" label="Bar" />
        </li>
        <li>
          <NavItem exactSelected={true} to="/menu/wine" label="Wine" />
        </li>
      </ul>
      <Route exact path="/menu/lunch" component={Lunch} />
      <Route exact path="/menu/dinner" component={Dinner} />
      <Route exact path="/menu/bar" component={Bar} />
      <Route exact path="/menu/wine" component={Wine} />
      <Route exact path="/menu" component={Landing} />
    </div>
  )
}

export default Menus
