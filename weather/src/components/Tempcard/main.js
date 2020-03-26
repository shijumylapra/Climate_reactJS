import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Situation from "./situation";
import Logo from "./icon";

const TempCard = props => {
  let temphigh = 0;
  let templow = 0;
  let bgdiv = null;

  if (props.temp > 12) {
    temphigh = (1 - (props.temp - 12) / 28) * 255;
    templow = temphigh - 150;
    bgdiv = `linear-gradient(
      to top,
      rgb(255, ${temphigh}, 0),
      rgb(255, ${templow}, 0)
    );`;
  } else if (props.temp < 12) {
    temphigh = (1 - (props.temp + 20) / 32) * 255;
    templow = temphigh - 150;
    bgdiv = `linear-gradient(
      to top,
      rgb(0, ${temphigh}, 255),
      rgb(0, ${templow}, 255)
    );`;
  }

  const TCard = styled.div`
    margin: 0 auto;
    background: ${bgdiv};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
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
