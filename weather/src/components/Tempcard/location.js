import React from "react";
import styled from "@emotion/styled";

const location = ({ __Place, __Country }) => {
  const Container = styled.div`
    text-align: center;
  `;
  const Place = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2em;
  `;
  const Country = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.1em;
  `;
  return (
    <Container>
      <Place className="place"> {__Place} </Place>
      <Country className="country"> {__Country} </Country>
    </Container>
  );
};

export default location;
