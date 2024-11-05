import React from "react";
import villagerImage from "../../assets/characters/villager.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Villager() {
  return (
    <Card
      frontImage={villagerImage}
      backImage={cardBack}
      objectiveText="Work together with other villagers to identify and eliminate the werewolves among you."
      roleName="Villager"
      appStoreLink="https://example.com"
    />
  );
}
