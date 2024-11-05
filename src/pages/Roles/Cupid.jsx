import React from "react";
import cupidImage from "../../assets/characters/cupid.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Cupid() {
  return (
    <Card
      frontImage={cupidImage}
      backImage={cardBack}
      objectiveText="Choose two players to be in love. If one dies, the other dies as well."
      roleName="Cupid"
      appStoreLink="https://example.com"
    />
  );
}
