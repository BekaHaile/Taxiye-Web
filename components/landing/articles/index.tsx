import React from "react";
import {
  SectionTitle,
  GraySection,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../../section";
import ArticleSlider from "./slider";
import styled from "styled-components";

const Container = styled("div")`
  width: 1300px;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const LastestArticles = ({ title, subTitle, articles }) => {
  return (
    <GraySection>
      <SectionHeaderContainer>
        <SectionTitle>{title}</SectionTitle>
        <CenteredText>{subTitle}</CenteredText>
      </SectionHeaderContainer>
      <Container>
        <ArticleSlider articles={articles} />
      </Container>
    </GraySection>
  );
};

export default LastestArticles;
