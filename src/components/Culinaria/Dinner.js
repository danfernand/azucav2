// @flow

import * as React from "react";
import dinnerMenu from "data/culinariaDinner";
import Menu from "../Menu";

const Dinner = () => {
  return (
    <React.Fragment>
      <a href="scripts/pdf/culinariaDinner.pdf" target="_blank">
        {"Download"}
      </a>
      <Menu menu={dinnerMenu} sectionType="half" />
      <div className="clear">
        <a href="scripts/pdf/culinariaDinner.pdf" target="_blank">
          {"Download"}
        </a>
      </div>
    </React.Fragment>
  );
};

export default Dinner;
