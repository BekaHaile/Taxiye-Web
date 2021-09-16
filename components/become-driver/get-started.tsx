import React from "react";
import {
  GraySection,
  SectionTitle,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../section";
import styled from "styled-components";
import theme from "../../theme/main";
import Link from "next/link";
const SloganButton = styled("button")`
  min-width: 120px;
  height: 34px;
  background: ${theme.colors.primary};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 30px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${theme.colors.white};
  border-color: transparent;
  vertical-align: middle;
`;
const CustomSectionTitle = styled(SectionTitle)`
  width: 600px;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const SignUp = ({ title }) => {
  return (
    <>
      <GraySection>
        <SectionHeaderContainer>
          <CustomSectionTitle>{title}</CustomSectionTitle>
        </SectionHeaderContainer>
        <SectionContentContainer>
          {/* <Link href="/signup/driver"> */}
          <SloganButton>Get Started</SloganButton>
          {/* </Link> */}
        </SectionContentContainer>
      </GraySection>
    </>
  );
};

export default SignUp;
