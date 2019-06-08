// @flow

import * as React from "react";
import menu from "data/mothersDay";
import BaseMenu from "../Menu";

const Menu = () => {
  return (
    <React.Fragment>
      <a href="../pdf/mothersDay.pdf" target="_blank">
        {"Download"}
      </a>
      <BaseMenu menu={menu} sectionType="full" />
      <div className="clear">
        <a href="../pdf/mothersDay.pdf" target="_blank">
          {"Download"}
        </a>
      </div>
    </React.Fragment>
  );
};

export default Menu;
