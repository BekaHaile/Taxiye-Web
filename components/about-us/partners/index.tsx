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
  
  @media (max-width: 400px) {
    width: 100%;
    text-align:center;
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
          </Container>
        </SectionContentContainer>
      </GraySection>
    </>
  );
};

export default PartnersContent;
