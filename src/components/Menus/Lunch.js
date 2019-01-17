// @flow

import * as React from "react";
import lunchMenu from "data/lunch";
import Menu from "../Menu";

const Lunch = () => {
  return (
    <React.Fragment>
      <a href="../pdf/Lunch.pdf" target="_blank">
        {"Download"}
      </a>
      <Menu menu={lunchMenu} sectionType="full" />
      <div className="clear">
        <a href="../pdf/Lunch.pdf" target="_blank">
          {"Download"}
        </a>
      </div>
    </React.Fragment>
  );
};

export default Lunch;
