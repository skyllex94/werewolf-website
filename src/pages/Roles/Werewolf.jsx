import React from "react";
import werewolfImage from "../../assets/characters/werewolf.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Werewolf() {
  return (
    <Card
      frontImage={werewolfImage}
      backImage={cardBack}
      objectiveText="Work with your fellow werewolves to eliminate the villagers and be the last ones standing."
      roleName="Werewolf"
      appStoreLink="https://example.com"
    />
  );
}
