import React from "react";
import styled from "styled-components";
import Image from "next/image";
import theme from "../../../theme/main";

const Card = styled("div")`
  padding: 50px 20px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  margin: 10px;
  @media (max-width: 768px) {
    padding: 20px 0px;
    box-shadow: none;
    margin: 0px;
    width:100%;
  }
`;

const CardTitle = styled("h3")`
  font-size: 24px;
  color: ${theme.colors.primaryTextColor};
  padding: 0;
`;

const CardText = styled("p")`
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  width: 280px;
  padding: 0;
  @media (max-width: 280px) {
    width: 100%;
    margin:auto;
  }
  @media (max-width: 768px) {
    margin:auto;
  }
`;

const Price = styled("p")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.colors.primaryTextColor};
  padding: 0;
`;

const CardImage = styled("img")`
  height: auto;
  width: auto;

  @media (max-width: 200px) {
    width: 100%;
  }
`;

const TextWrapper = styled("div")`
  padding: 20px 10px;
  @media (max-width: 400px) {
    padding: 0px;
  }
`;

const FleetCard = ({ fleet }) => {
  return (
    <Card>
      <CardImage src={`${process.env.NEXT_PUBLIC_HOST}${fleet.image.url}`} />
      <TextWrapper>
        <CardTitle>{fleet.name}</CardTitle>
        <CardText>{fleet.description}</CardText>
        <Price>{fleet.speed}</Price>
      </TextWrapper>
    </Card>
  );
};

export default FleetCard;
