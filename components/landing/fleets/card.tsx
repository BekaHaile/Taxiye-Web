import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Card = styled("div")`
  padding: 50px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  margin:10px;
`;

const CardTitle = styled("h3")`
  font-size: 24px;
  color: #444444;
  padding: 0;
`;

const CardText = styled("p")`
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #444444;
  width: 280px;
  padding:0;
`;

const Price = styled("p")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #444444;
  padding: 0;
`;

const CardImage = styled('img')`
  height: auto;
  width:auto;
`;

const TextWrapper = styled('div')`
padding: 20px 10px;
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
