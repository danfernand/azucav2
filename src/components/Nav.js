// @flow

import * as React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <aside id="main-nav">
      <ul>
        <li>
          <NavItem exactSelected={true} to="/" label="Home" />
        </li>
        {/* <li>
          <NavItem to="/brunch" label="Brunch" />
      	</li> */}
        <li>
          <a
            href="https://www.ezcater.com/catering/pvt/azuca-nuevo-latino-san-antonio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Lunch Catering"}
          </a>
        </li>
        <li>
          <NavItem to="/menu" label="Food & Bar" />
        </li>
        <li>
          <NavItem to="/reservations" label="Reserve Now" />
        </li>
        <li>
          <NavItem to="/happyhour" label="Happy Hour" />
        </li>
        <li>
          <NavItem to="/comments" label="Get in Touch" />
        </li>
        <li>
          <NavItem to="/awards" label="Awards" />
        </li>
        <li>
          <NavItem to="/findus" label="Find Us" />
        </li>
        <li>
          <NavItem to="/vids" label="Clips" />
        </li>
      </ul>
    </aside>
  );
};

export default Nav;
