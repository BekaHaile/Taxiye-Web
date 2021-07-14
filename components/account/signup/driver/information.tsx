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
import { useSelector } from "react-redux";
import {
  addFullName,
  genderSelected,
  countrySelected,
  addPhone,
  changeTerm,
  submitPhone
} from "../../../../redux/actions/driver";
import store from "../../../../redux/store";

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
  const country_code = useSelector((state) => state["driver"]["country_code"]);
  const phone_no = useSelector((state) => state["driver"]["phone_no"]);
  const isFirstFormValid = useSelector(
    (state) => state["driver"]["isFirstFormValid"]
  );
  const full_name = useSelector((state) => state["driver"]["full_name"]);
  const gender = useSelector((state) => state["driver"]["gender"]);
  const country = useSelector((state) => state["driver"]["country"]);
  const agreeToTerms = useSelector((state) => state["driver"]["agreeToTerms"]);

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
              label="Full name *"
              placeholder="your full name"
              id="fullname"
              value={full_name}
              onChange={(e) => store.dispatch(addFullName(e.target.value))}
            />
          </InputContainer>

          <InputContainer>
            <GenderDropDown
              label="Gender *"
              placeholder="Select Gender"
              id="gender"
              value={gender}
              onChange={(e) => store.dispatch(genderSelected(e.target.value))}
            />
          </InputContainer>
        </CustomFlexContainer>

        <CustomFlexContainer>
          <InputContainer>
            <CountryDropDown
              label="Country *"
              placeholder="Ethiopia"
              id="country"
              value={country}
              onChange={(e) => {
                store.dispatch(countrySelected(e.target.value));
              }}
            />
          </InputContainer>

          <InputContainer>
            <PhoneInput
              label="Phone Number *"
              placeholder="your phone number"
              id="phonenumber"
              country_code={country_code}
              phone_no={phone_no}
              action={(isValid, data, phone_no) => {
                store.dispatch(
                  addPhone({
                    country: `${data.name}`,
                    phone_no: phone_no,
                    country_code: `+${data.dialCode}`,
                    isValid: isValid,
                  })
                );
              }}
            />
            <SubTitleWithSpace>
              We’ll send you a text to verify your phone.
            </SubTitleWithSpace>
          </InputContainer>
        </CustomFlexContainer>
        <TermsConsent
          action={(status) => store.dispatch(changeTerm(status))}
          checked={agreeToTerms}
        />
        <FlexContainer>
          <Button
            disabled={!isFirstFormValid}
            onClick={() => {
              // handleNext();
              store.dispatch(submitPhone());
            }}
          >
            Continue
          </Button>
        </FlexContainer>
        <NeedHelp />
      </ContentContainer>
    </>
  );
};

export default Signup;
