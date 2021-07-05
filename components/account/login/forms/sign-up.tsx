import React from "react";
import styled from "styled-components";
import TermsConsent from "../../terms";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import {
  CustomButton,
  ContentContainer,
  HeaderContainer,
  Title,
  SubTitle,
  InputContainer,
} from "../../../account/elements";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  addFirstName,
  addLastName,
  addEmail,
  setTermsAgreement,
  changeGender
} from "../../../../redux/actions/user";
import { GenderDropDown } from "../../../form/dropdown/drop-down";

const TermsConsentContainer = styled("div")`
  margin-top: -20px;
`;
const SignupForm = ({ action }) => {
  const firstName = useSelector((state) => state["user"]["user"]["firstName"]);
  const lastName = useSelector((state) => state["user"]["user"]["lastName"]);
  const email = useSelector((state) => state["user"]["user"]["email"]);
  const gender = useSelector((state) => state["user"]["user"]["gender"]);
  const isUserValid = useSelector((state) => state["user"]["isUserValid"]);
  const agreeToTerms = useSelector((state) => state["user"]["agreeToTerms"]);

  return (
    <>
      <HeaderContainer>
        <Title>Signup with Taxiye</Title>
        <SubTitle>
          Tell us who you are. Please enter your correct detail below
        </SubTitle>
      </HeaderContainer>
      <ContentContainer>
        <InputContainer>
          <DefaultInput
            value={firstName}
            onChange={(event) => {
              store.dispatch(addFirstName(event.target.value));
            }}
            label="First Name *"
            placeholder="John"
            id="firstname"
          />
        </InputContainer>
        <InputContainer>
          <DefaultInput
            value={lastName}
            onChange={(event) => {
              store.dispatch(addLastName(event.target.value));
            }}
            label="Last Name *"
            placeholder="Doe"
            id="lastname"
          />
        </InputContainer>
        <InputContainer>
          <GenderDropDown
            id="gender"
            label="Gender"
            placeholder="Male"
            onChange={(event) => {
                store.dispatch(changeGender(event.target.value));
              }}
            value={gender}
          />
        </InputContainer>
        <InputContainer>
          <DefaultInput
            type="email"
            value={email}
            onChange={(event) => {
              store.dispatch(addEmail(event.target.value));
            }}
            label="Email Address"
            placeholder="Johndoe@gmail.com"
            id="emailaddress"
          />
        </InputContainer>

        <TermsConsentContainer>
          <TermsConsent
            checked={agreeToTerms}
            action={(status) => {
              store.dispatch(setTermsAgreement(status));
            }}
          />
        </TermsConsentContainer>

        <CustomButton disabled={!isUserValid} onClick={() => action()}>
          Create account
        </CustomButton>
      </ContentContainer>
    </>
  );
};

export default SignupForm;
