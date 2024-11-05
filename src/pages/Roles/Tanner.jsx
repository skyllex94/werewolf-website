import React from "react";
import tannerImage from "../../assets/characters/tanner.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Tanner() {
  return (
    <Card
      frontImage={tannerImage}
      backImage={cardBack}
      objectiveText="Try to get yourself eliminated. If you succeed, you win the game."
      roleName="Tanner"
      appStoreLink="https://example.com"
    />
  );
}
