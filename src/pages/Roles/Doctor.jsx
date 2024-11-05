import React from "react";
import priestImage from "../../assets/characters/doctor.jpg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Priest() {
  return (
    <Card
      frontImage={priestImage}
      backImage={cardBack}
      objectiveText="Use your power to bless one villager so he will be protected by one werewolf attack at night. Not protected during the day."
      roleName="Priest"
      appStoreLink="https://example.com"
    />
  );
}
