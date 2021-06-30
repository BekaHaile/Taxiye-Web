import React from "react";
import styled from "styled-components";
import { Button } from "../../../form/buttons/primary-button";
import {
  FlexContainer,
  ContentContainer,
  HeaderContainer,
  InputContainer,
  Title,
  SubTitle,
} from "../../elements";
import { PhoneInput } from "../../../form/input-fields/phone-input";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import {
  GenderDropDown,
  CountryDropDown,
} from "../../../form/dropdown/drop-down";
import TermsConsent from "../../terms";
import NeedHelp from "../../need-help";

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}
`;

const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
justify-content: center;
gap:60px;
}
`;

const SubTitleWithSpace = styled(SubTitle)`
padding-top:10px;
}
`;

const Signup = ({ handleNext, activeStep, steps }) => {
  return (
    <>
      <CustomHeaderContainer>
        <Title>Driver Information</Title>
        <SubTitle>
          Please provide the following details to get started.
        </SubTitle>
      </CustomHeaderContainer>
      <ContentContainer>
        <CustomFlexContainer>
          <InputContainer>
            <DefaultInput
              label="Full name*"
              placeholder="your full name"
              id="fullname"
            />
          </InputContainer>

          <InputContainer>
            <GenderDropDown
              label="Gender *"
              placeholder="Select Gender"
              id="gender"
            />
          </InputContainer>
        </CustomFlexContainer>

        <CustomFlexContainer>
          <InputContainer>
            <CountryDropDown
              label="Country *"
              placeholder="Ethiopia"
              id="country"
            />
          </InputContainer>

          <InputContainer>
            <PhoneInput
              label="Phone Number *"
              placeholder="your phone number"
              id="phonenumber"
              country_code="+251"
              phone_no="93453765673"
              action={()=>console.log("dfkhdf")}
            />
            <SubTitleWithSpace>
              We’ll send you a text to verify your phone.
            </SubTitleWithSpace>
          </InputContainer>
        </CustomFlexContainer>
        <TermsConsent />
        <FlexContainer>
          <Button onClick={handleNext}>Continue</Button>
        </FlexContainer>
        <NeedHelp />
      </ContentContainer>
    </>
  );
};

export default Signup;
