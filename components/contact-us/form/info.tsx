import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";
import Socials from "./socials";

const HeaderTitle = styled("h3")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: ${theme.colors.primary};
`;

const HeaderSubTitle = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.colors.primaryTextColor}; ;
`;
const ContentTitle = styled("h5")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
`;

const ContentDetailText = styled("p")`
  font-size: 16px;
  line-height: 22px;
  padding-top: 8px;
  color: ${theme.colors.primaryTextColor}; ;
`;
const ContentContainer = styled("div")`
  padding-top: 40px;
`;
const HeaderContainer = styled("div")``;

const Info = ({ info, title, subTitle, socialMedias }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubTitle>{subTitle}</HeaderSubTitle>
      </HeaderContainer>

      <ContentContainer>
        <ContentTitle>{info.openHours.header}</ContentTitle>
        {info.openHours.content.map((detail, index) => (
          <div key={index}>
            <ContentDetailText>{detail.title}</ContentDetailText>
            <ContentDetailText>{detail.description}</ContentDetailText>
          </div>
        ))}
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>{info.contactCenter.header}</ContentTitle>
        {info.contactCenter.content.map((detail, index) => (
          <ContentDetailText key={index}>{detail.title}</ContentDetailText>
        ))}
      </ContentContainer>

      <ContentContainer>
        <Socials socialMedias={socialMedias} />
      </ContentContainer>
    </>
  );
};

export default Info;
