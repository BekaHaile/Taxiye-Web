import React from "react";
import {GraySection,SectionTitle,SectionHeaderContainer, SectionContentContainer  } from "../section";
import styled from "styled-components";
const SloganButton = styled("button")`
  min-width: 120px;
  height: 34px;
  background: #A02167;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 30px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border-color: transparent;
  vertical-align: middle;
`;
const CustomSectionTitle = styled(SectionTitle)`

width:600px;
`;

const SignUp = () => {
  return (
    <>
    <GraySection>
    <SectionHeaderContainer>
      <CustomSectionTitle>What are you waiting for? Start today.</CustomSectionTitle>
      </SectionHeaderContainer>
      <SectionContentContainer>
      <SloganButton>Get Started</SloganButton>
      </SectionContentContainer>

      </GraySection>
    </>
  );
};

export default SignUp;
