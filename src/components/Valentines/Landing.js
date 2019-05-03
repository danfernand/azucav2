import React from "react";
import NavItem from "../NavItem";

const Landing = () => {
  return (
    <React.Fragment>
      <p>
        {
          "l’amour est dans l’air!.....Love is in the air!…..El Amor está en el Aíre!…. Chef Rene has created our #14 Aphrodisiac inspired Menu for this very romantic occasion."
        }
      </p>
      <p>
        {
          "We welcome you and your special someone to join us this Valentine’s Day for an intimate, authentic and delicious dining experience….. Where to go after this passion enhanced dinner… Let Cupid finish his work by midnight!!!"
        }
      </p>
      <NavItem
        exactSelected={true}
        to="/valentines/offering"
        label="CLICK HERE FOR MENU"
      />
    </React.Fragment>
  );
};

export default Landing;
