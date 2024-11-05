import React from "react";
import cursedVillagerImage from "../../assets/characters/cursed-villager.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function CursedVillager() {
  return (
    <Card
      frontImage={cursedVillagerImage}
      backImage={cardBack}
      objectiveText="You are a regular villager, but if attacked by werewolves, you transform into a werewolf."
      roleName="Cursed Villager"
      appStoreLink="https://example.com"
    />
  );
}
