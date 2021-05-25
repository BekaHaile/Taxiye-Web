import React from "react";
import { Checkbox } from "../../form/inputs";
import Image from "../image";
import { PhoneInput } from "../../form/input-fields/phone-input";
import { ContentWrapper, FlexContainer, CustomButton, CheckBoxContainer, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../elements";
import Link from "next/link";
const Login = ({hero}) => {
  return (
    <>
      <ContentWrapper>
        <Image hero={hero}/>
        <FormContainer>
          <CenteredForm>
            <HeaderContainer>
              <Title>Welcome to Taxiye!</Title>
              <SubTitle>Please enter your mobile phone number. We’ll send you a text to verify your phone.</SubTitle>
            </HeaderContainer>
            <ContentContainer>
              <InputContainer>
                <PhoneInput
                  label="Phone Number *"
                  placeholder="your phone number"
                  id="phone" />
              </InputContainer>
              <CheckBoxContainer>
                <Checkbox id="1" placeholder="Keep me signed in" />
              </CheckBoxContainer>
              <Link href="/login/verification">
                <CustomButton>Next</CustomButton>
              </Link>
              <FlexContainer>
                <SubTitle>Problem with your account?</SubTitle>
                <FlexContainer>
                  <Avatar src={require("../../../assets/icons/main-search.svg")} />
                  <NavLink href="/">Support Center</NavLink>
                </FlexContainer>
              </FlexContainer>
            </ContentContainer>
          </CenteredForm>
        </FormContainer>
      </ContentWrapper>
    </>
  );
};

export default Login;
