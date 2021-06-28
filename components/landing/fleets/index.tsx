import React from "react";
import {
  DefaultSection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../../section";
import FleetSlider from "./slider";
import styled from "styled-components";

const Container = styled("div")`
  width: 1300px;
`;

const FleetSection = ({ title, subTitle, fleets }) => {
  return (
    <DefaultSection>
      <SectionHeaderContainer>
        <SectionTitle>{title}</SectionTitle>
        <CenteredText>{subTitle}</CenteredText>
      </SectionHeaderContainer>
      <Container>
        <FleetSlider fleets={fleets} />
      </Container>
    </DefaultSection>
  );
};

export default FleetSection;
