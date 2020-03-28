import React from "react";
import styled from "@emotion/styled";

const Fsituation = ({ __temp, __stage }) => {
  const Temp = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6em;
  `;

  const Stage = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.3em;
  `;

  return (
    <>
      <Temp> {__temp} c</Temp>
      <Stage> {__stage} </Stage>
    </>
  );
};
export default Fsituation;
