import React from "react";
import styled from "styled-components";
import Rating from "../../form/rating";
import theme from "../../../theme/main";

const RatingContainer = styled("div")`
  margin: auto;
  display: block;
  text-align: center;
  width: fit-content;
  @media (max-width: 300px) {
    display: none;
  }
`;
const RatingTextContainer = styled("div")`
  display: none;
  @media (max-width: 300px) {
    display: block;
    text-align:center;
    font-size:4vh;
    color:${theme.colors.primary}
  }
`;

const Card = styled("div")`
  width: fit-content;
  align-items: center;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 40px;
  margin: 20px;
  height: 400px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    box-shadow:none;
  }
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
  @media (max-width: 150px) {
    width: 100%;
  }
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
  color: ${theme.colors.primaryTextColor}; ;
`;

const CardText = styled("p")`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
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
          src={`${process.env.NEXT_PUBLIC_HOST}${testimony?.profileImage?.url}`}
        />
        <div>
          <CardTitle className="testimony-name">
            {testimony?.fullName}
          </CardTitle>
          <CardSubTitle className="testimony-position">
            {testimony?.position}
          </CardSubTitle>
        </div>
      </HeaderContainer>
      <CardText className="testimony-text">{testimony?.testimony}</CardText>
      <RatingContainer>
        <Rating key={testimony?.id} rate={testimony?.rating} />
      </RatingContainer>
      <RatingTextContainer>{testimony?.rating}</RatingTextContainer>
    </Card>
  );
};

export default TestimonyCard;
