import React from "react";
import styled from "@emotion/styled";

const Fsituation = props => {
  const Temp = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6em;
  `;
  const Stage = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6em;
  `;
  return (
    <>
      <Temp> 20 c</Temp>
      <Stage className="stage"> Cloudy </Stage>
    </>
  );
};
export default Fsituation;
