import React from "react";
import wolfCubImage from "../../assets/characters/wolf-cub.jpeg";
import cardBack from "../../assets/cards/werewolf-card-back.png";
import Card from "../Card";

export default function WolfCub() {
  return (
    <Card
      frontImage={wolfCubImage}
      backImage={cardBack}
      objectiveText="You wake up with the other werewolves at night. 
      If you are eliminated, the werewolves have an extra kill the next night. 
      This will be indicated to the other werewolves by the narrator."
      roleName="Wolf Cub"
      appStoreLink="https://example.com"
    />
  );
}
