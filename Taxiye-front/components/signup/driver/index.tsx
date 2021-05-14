import React from "react";
import Image from "../../login/image";
import { ContentWrapper, FlexContainer, CustomButton, CheckBoxContainer, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../login/elements";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <ContentWrapper>
        <Image type="driver"/>
        <FormContainer>
          <CenteredForm>
            <HeaderContainer>
              <Title>Welcome to Taxiye!</Title>
              <SubTitle>Please enter your mobile phone number. We’ll send you a text to verify your phone.</SubTitle>
            </HeaderContainer>
            <ContentContainer>
              <Link href="/login/verification">
                <CustomButton>Next</CustomButton>
              </Link>
              <FlexContainer>
                <SubTitle>Problem with your account?</SubTitle>
                <FlexContainer>
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

export default Signup;
