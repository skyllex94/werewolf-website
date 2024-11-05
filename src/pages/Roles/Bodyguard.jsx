import React from "react";
import bodyguardImage from "../../assets/characters/bodyguard.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function Bodyguard() {
  return (
    <Card
      frontImage={bodyguardImage}
      backImage={cardBack}
      objectiveText="Choose a player to protect in the begining of the game to protect against a werewolf attack. If the player gets attacked a second time, you die instead of the protected player."
      roleName="Bodyguard"
      appStoreLink="https://example.com"
    />
  );
}
