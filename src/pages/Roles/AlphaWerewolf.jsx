import React from "react";
import alphaWerewolfImage from "../../assets/characters/alpha-werewolf.jpg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function AlphaWerewolf() {
  return (
    <Card
      frontImage={alphaWerewolfImage}
      backImage={cardBack}
      objectiveText="You are a stronger werewolf that can turn one player into a Werewolf. You can use your ability for one player through the night. You wake up individually and not with the other werewolves at night, but you play with them."
      roleName="Alpha Werewolf"
      appStoreLink="https://example.com"
    />
  );
}
