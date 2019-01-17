// @flow

import * as React from "react";
import dinnerMenu from "data/dinner";
import Menu from "../Menu";

const Dinner = () => {
  return (
    <React.Fragment>
      <a href="../pdf/Dinner.pdf" target="_blank">
        {"Download"}
      </a>
      <Menu menu={dinnerMenu} sectionType="full" />
      <div className="clear">
        <a href="../pdf/Dinner.pdf" target="_blank">
          {"Download"}
        </a>
      </div>
    </React.Fragment>
  );
};

export default Dinner;
