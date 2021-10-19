import React from "react";
import styled from "styled-components";
import theme from "../../theme/main";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 60px;
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const DefaultSection = styled(Section)`
  background: ${theme.colors.defaultSectionColor};
`;
const SecondarySection = styled(DefaultSection)`
  padding: 60px 60px;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

const GraySection = styled(Section)`
  background: ${theme.colors.graySectionColor};
`;

const SectionHeaderContainer = styled("div")``;

const SectionContentContainer = styled("div")`
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-top: 15px;
  }
`;

const SectionTitle = styled("h1")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: ${theme.colors.primary};
  text-align: center;
  margin: 0;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const CenteredText = styled("p")`
  font-size: 18px;
  line-height: 25px;
  margin: 0px;
  padding: 0px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  max-width: 800px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 14px;
  }
`;

export {
  GraySection,
  DefaultSection,
  SecondarySection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
};
