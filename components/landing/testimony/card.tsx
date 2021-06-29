import React from "react";
import styled from "styled-components";
import Rating from "./rating";

const Card = styled("div")`
  width: fit-content;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 40px;
  z-index: 1;
`;

const Avatar = styled("img")`
  height: 85px;
  width: 85px;
  position: static;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;
  padding-bottom: 10px;
  display: block;
  justify-content: center;
`;

const CardTitle = styled("h3")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  padding-bottom: 10px;
`;

const CardSubTitle = styled("h5")`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #444444;
`;

const CardText = styled("p")`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #444444;
  width: 400px;
`;
const HeaderContainer = styled("div")`
  width: fit-content;
  margin: auto;
  padding-bottom: 10px;
`;

const TestimonyCard = ({ testimony }) => {
  return (
    <Card className="testimony-container">
      <HeaderContainer className="testimony-header">
        <Avatar
          className="testimony-image"
          src={`${process.env.NEXT_PUBLIC_HOST}${testimony.profileImage.url}`}
        />
        <div>
          <CardTitle className="testimony-name">{testimony.fullName}</CardTitle>
          <CardSubTitle className="testimony-position">
            {testimony.position}
          </CardSubTitle>
        </div>
      </HeaderContainer>
      <CardText className="testimony-text">{testimony.testimony}</CardText>
      <Rating key={testimony.id} rate={testimony.rating} />
    </Card>
  );
};

export default TestimonyCard;
