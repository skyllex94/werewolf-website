import React from "react";
import hunterImage from "../../assets/characters/hunter.jpg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Hunter() {
  return (
    <Card
      frontImage={hunterImage}
      backImage={cardBack}
      objectiveText="You work with the Village to eliminate the Werewolves. If you are eliminated, you can take down another player with you by your choice."
      roleName="Hunter"
      appStoreLink="https://example.com"
    />
  );
}
