import React from "react";
import lycanImage from "../../assets/characters/lycan.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Lycan() {
  return (
    <Card
      frontImage={lycanImage}
      backImage={cardBack}
      objectiveText="You are a villager who appears to be a werewolf when investigated by the Seer, but you are still on the villager's side."
      roleName="Lycan"
      appStoreLink="https://example.com"
    />
  );
}
