import React from "react";
import NavItem from "../NavItem";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <React.Fragment>
      <p>
        {
          "Year after year, Azucá has the great pleasure of receiving many families to our Mother's Day Brunch."
        }
      </p>
      <p>
        {
          "Chef Fernandez has created a lavish display of carefully designed dishes for your enjoyment"
        }
      </p>
      <p>
        {
          "We take special pride in creating an unforgettable experience for the entire family, because you deserve it!!!"
        }
      </p>
      <p>
        {"The price is $29.00 ++"}
        <br />
        {"Children between the ages of 3 and 12 pay $17.00."}
        <br />
        {"Children under the age of 3 are free."}
        <br />
        {"Senior citizens (65+) pay $25.00."}
        <br />
        {"All prices are subject to Sales Tax and 20% Gratuity."}
        <br />
        {"Azucá will be offering a rose for all mothers"}
      </p>
      <p>
        <strong>{"Reserve Now !!!"}</strong>
        <br />
        {"Reservations are accepted "}
        <Link to="/reservations">{"online"}</Link>
        {" or by calling us at (210) 225-5550."}
        <br />
        {"Reservations are accepted from 11:00 AM until 3:30 PM."}
      </p>
      <NavItem
        exactSelected={true}
        to="/mothersDay/menu"
        label="CLICK HERE FOR MENU"
      />
    </React.Fragment>
  );
};

export default Landing;
