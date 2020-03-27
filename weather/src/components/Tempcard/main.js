import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Situation from "./situation";
import Logo from "./icon";

const TempCard = ({ _temp, _situation, __city, __country }) => {
  let temphigh = 0;
  let templow = 0;
  let bgdiv = null;

  if (_temp > 12) {
    temphigh = (1 - (_temp - 12) / 28) * 255;
    templow = temphigh - 150;
    bgdiv = `linear-gradient(
      to top,
      rgb(255, ${temphigh}, 0),
      rgb(255, ${templow}, 0)
    );`;
  } else if (_temp < 12) {
    temphigh = (1 - (_temp + 20) / 32) * 255;
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
    align-items: center;
    color: white;
    text-shadow: 0 0 0.5rem black;
    border: 0.2rem solid black;
    border-radius: 0.5rem;
  `;
  return (
    //emmet
    //div with class name
    // emmet >>> h1+h3+img+h1+h3

    <TCard>
      <Location __Place={__city} __Country={__country} />
      <Logo situations={_situation} />
      <Situation __temp={_temp} __stage={_situation} />
    </TCard>
  );
};

export default TempCard;
