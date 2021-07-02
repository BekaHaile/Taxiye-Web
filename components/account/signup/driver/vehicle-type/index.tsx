import React from "react";
import styled from "styled-components";
import { Button } from "../../../../form/buttons/primary-button";
import {
  ContentContainer,
  HeaderContainer,
  Title,
  SubTitle,
} from "../../../elements";

import SliderContainer from "./slider-container";

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;

const Signup = ({ handleNext, handleBack }) => {
  return (
    <>
      <CustomHeaderContainer>
        <Title>Select your vehicle type</Title>
        <SubTitle>
          Please select the type of vehicle you want to register with.
        </SubTitle>
      </CustomHeaderContainer>
      <ContentContainer>
        <SliderContainer />
        <Button onClick={handleNext}>Continue</Button>
      </ContentContainer>
    </>
  );
};

export default Signup;
