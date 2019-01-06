import React from "react";
import NavItem from "../NavItem";

const Landing = () => {
  return (
    <React.Fragment>
      <p>
        {
          "Let&#39;s celebrate the New Year and welcome 2019 with some serious heat!..... Allow Azúca to take you away to a journey into the Latino World and presents our 2019 New Years Eve party."
        }
      </p>
      <p>
        {
          "A night of hot rhythms, succulent food, fun atmosphere and bubbly midnight celebrations…. Step into a richly decorated Azúca and allow us to welcome you with a Puerto Rican “Coquito”."
        }
      </p>
      <p>
        {
          "…..Continue the night with a tempting four-course menu created by Chef Rene. At midnight, grab your bubbly and join us on the street to welcome the New Year, while enjoying the fireworks, illuminating the sky over the nearby Hemisphere Park. There will be one seating… starts at 5:30 p.m., with the last reservation accepted at 10:00 p.m. The price per is $75.00 plus applicable sales tax and 20% Gratuity. This package includes the welcome “Coquito”, the four-course menu, a glass of midnight champagne, party favors, and the perfect view to the City’s Fireworks Spectacle."
        }
      </p>
      <p>
        {"For individual, or group reservations please call us at "}
        <a href="tel:1-210-225-5550">{"210-225-5550"}</a>
        {" or email us at "}
        <a href="mailto:chef@azuca.net">{"chef@azuca.net"}</a>
        {
          " We don’t require a deposit, but a credit card number is necessary to guarantee the reservation."
        }
      </p>
      <NavItem
        exactSelected={true}
        to="/newYears/menu"
        label="CLICK HERE FOR MENU"
      />
    </React.Fragment>
  );
};

export default Landing;
