// @flow

import * as React from "react";
import menu from "data/newYears";
import BaseMenu from "../Menu";

const Menu = () => {
  return (
    <React.Fragment>
      <a href="../pdf/Valentines.pdf" target="_blank">
        {"Download"}
      </a>
      <BaseMenu menu={menu} sectionType="full" />
      <div className="clear">
        <a href="../pdf/Valentines.pdf" target="_blank">
          {"Download"}
        </a>
      </div>
    </React.Fragment>
  );
};

export default Menu;
