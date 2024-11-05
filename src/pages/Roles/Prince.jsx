import React from "react";
import princeImage from "../../assets/characters/prince.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Prince() {
  return (
    <Card
      frontImage={princeImage}
      backImage={cardBack}
      objectiveText="If you are targeted for being voted out during the game, you survive those attempts."
      roleName="Prince"
      appStoreLink="https://example.com"
    />
  );
}
