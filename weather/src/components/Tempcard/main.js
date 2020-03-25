import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Situation from "./situation";
import Logo from "./icon";

const TempCard = props => {
  const red = 500;
  const TCard = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(${red}, 120, 200), lightblue);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
  `;
  return (
    //emmet
    //div with class name
    // emmet >>> h1+h3+img+h1+h3

    <TCard>
      <Location />
      <Logo />
      <Situation />
    </TCard>
  );
};

export default TempCard;
