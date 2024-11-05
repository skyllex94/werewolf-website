import React from "react";
import seerImage from "../../assets/characters/seer.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Seer() {
  return (
    <Card
      frontImage={seerImage}
      backImage={cardBack}
      objectiveText="Use your powers to uncover the roles of others and guide and help the villagers."
      roleName="Seer"
      appStoreLink="https://example.com/seer"
    />
  );
}
