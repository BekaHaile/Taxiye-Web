import React from "react";
import {
  GraySection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../../section";
import styled from "styled-components";
import { Card, CardWrapper, CardContent, CardTitle, Image } from "./card";

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1160px;
  flex-wrap: wrap;
`;
const CardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainCardTitle = styled(CardTitle)`
  width: 400px;
  
  padding-bottom: 20px;
  @media (max-width: 1239px) {
    text-align:center;
  }
  @media (max-width: 768px) {
    padding:0px 20px;
    margin-bottom:20px;
    font-size:75
  }
  @media (max-width: 500px) {
    padding:0px 20px;
    margin-bottom:20px;
    font-size:7vw;
  }  
  @media (max-width: 400px) {
    width: 100%;
    text-align:center;
    font-size:7vw;
    
  }
`;

const PartnersContent = ({ title, subTitle, description, contents }) => {
  return (
    <>
      <GraySection>
        <SectionHeaderContainer>
          <SectionTitle>{title}</SectionTitle>
          <CenteredText>{subTitle}</CenteredText>
        </SectionHeaderContainer>
        <SectionContentContainer>
          <Container>
            <CardContainer>
              <CardWrapper>
                <MainCardTitle>{description}</MainCardTitle>
              </CardWrapper>
              <CardContainer>
              {contents.map((content, index) => (
                <CardWrapper key={index}>
                  <Card>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`}
                    />
                    <CardContent>{content.description}</CardContent>
                  </Card>
                </CardWrapper>
              ))}
              </CardContainer>
            </CardContainer>
          </Container>
        </SectionContentContainer>
      </GraySection>
    </>
  );
};

export default PartnersContent;
