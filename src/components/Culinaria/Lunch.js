// @flow

import * as React from "react";
import lunchMenu from "data/culinariaLunch";
import Menu from "../Menu";

const Lunch = () => {
  console.log("lunch");
  return (
    <React.Fragment>
      <a href="scripts/pdf/culinariaLunch.pdf" target="_blank">
        {"Download"}
      </a>
      <Menu menu={lunchMenu} sectionType="half" />
      <div className="clear">
        <a href="scripts/pdf/culinariaLunch.pdf" target="_blank">
          {"Download"}
        </a>
      </div>
    </React.Fragment>
  );
};

export default Lunch;
