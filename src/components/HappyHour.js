// @flow

import * as React from "react";

const HappyHour = () => {
  return (
    <div className="content-happenings-hh">
      <p>
        {
          "A wide variety of Latin cocktail concoctions, your favorite drink and Latin wines are served by our knowledgeable bartenders and staff."
        }
      </p>
      <p>
        {
          "Every Friday and Saturday night, our Entertainment Program strives to reflect breadth of the Latin Countries and Cultures we represent."
        }
      </p>
      <h2>{"Happy Hour"}</h2>
      <div>{"Monday thru Sunday 4pm to 7pm"}</div>
      <div>{"Domestic Beer at $3.00"}</div>
      <div>{"All well drinks at $3.50"}</div>
      <div>
        {"Azuca Cocktails (Pisco Sour, Caipirinha and Mojitos) at $3.50"}
      </div>
    </div>
  );
};

export default HappyHour;
