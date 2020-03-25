import React from "react";
import styled from "@emotion/styled";

const CImage = props => {
  const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin: 15px;
  `;

  return <Logo src="./img/cloud.png" />;
};

export default CImage;
