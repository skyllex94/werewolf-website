import React from "react";
import witchImage from "../../assets/characters/witch.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Witch() {
  return (
    <Card
      frontImage={witchImage}
      backImage={cardBack}
      objectiveText="You have two potions: one to save a player and one to eliminate a player. One each for the game, and you can use them at nighttime. You are on the side of the Village."
      roleName="Witch"
      appStoreLink="https://example.com"
    />
  );
}
