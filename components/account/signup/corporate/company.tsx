import React from "react";
import styled from "styled-components";
import Image from "../../image";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../elements";
import colors from "../../../../theme/main/colors";
import { PhoneInput } from "../../../form/input-fields/phone-input";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import { DefaultDropDown } from "../../../form/dropdown/drop-down";
import NeedHelp from "../../need-help";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { initiateSubmitCompanyData, addPhone, addCompanyEmail, addCompanyEmployeesNumber, setTermsAgreement, addCompanyName } from "../../../../redux/actions/corporate";
import { Loading } from "../../../loading/loading";
import TermsConsent from "../../terms";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;

}
`;

const CustomSubTitle = styled(SubTitle)`
padding-right:0px;
}
`;

const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
row-gap:60px;
}
`;

const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;
const TermsConsentContainer = styled("div")`


`;


const Company = () => {
  const company_name = useSelector((state) => state["corporate"]["company_name"]);
  const company_email = useSelector((state) => state["corporate"]["company_email"]);
  const no_of_employees = useSelector((state) => state["corporate"]["no_of_employees"]);
  const country_code = useSelector((state) => state["corporate"]["country_code"]);
  const phone_no = useSelector((state) => state["corporate"]["phone_no"]);
  const isValid = useSelector((state) => state["corporate"]["isValid"]);
  const agreeToTerms = useSelector((state) => state["corporate"]["agreeToTerms"]);
  const loading = useSelector((state) => state["corporate"]["loading"]);
  return (
    <>
      {
        loading ?
          <Loading /> : null}

      <FormContainer>
        <LeftAlignedForm>
          <HeaderContainer>
            <Title>Company Sign up</Title>
            <CustomFlexContainer>
              <CustomSubTitle>Already have an account?</CustomSubTitle>
              <LinkWithLine href="/">Sign in</LinkWithLine>
            </CustomFlexContainer>
          </HeaderContainer>
          <ContentContainer>

            <CustomFlexContainer>
              <InputContainer>
                <DefaultInput
                  value={company_name}
                  onChange={(event) => {
                    let value = event.target.value;
                    store.dispatch(addCompanyName(value))
                  }
                  }
                  label="Company Name *"
                  placeholder="your company name"
                  id="companyname" />
              </InputContainer>

              <InputContainer>
                <DefaultInput
                  onChange={(event) => store.dispatch(addCompanyEmail(event.target.value))}
                  value={company_email}
                  type="email"
                  label="Official Email Address *"
                  placeholder="your@company.com"
                  id="officialemail" />
              </InputContainer>
            </CustomFlexContainer>

            <CustomFlexContainer>
              <InputContainer>
                <PhoneInput
                  phone_no={phone_no}
                  country_code={country_code}
                  action={(isPhoneValid, data, phone_no) => {
                    store.dispatch(addPhone({ country: `${data.name}`, phone_no: phone_no, country_code: `+${data.dialCode}`, isPhoneValid: isPhoneValid }));
                  }}
                  label="Phone Number *"
                  placeholder="your phone number"
                  id="phonenumber" />
              </InputContainer>

              <InputContainer>
                <DefaultDropDown
                  onChange={(event) => store.dispatch(addCompanyEmployeesNumber(event.target.value))} items={[3, 2, 4, 5, 1]}
                  value={no_of_employees}
                  label="Number of Employees *"
                  placeholder="Select one"
                  id="employeenumber" />
              </InputContainer>
            </CustomFlexContainer>
            <TermsConsentContainer>
              <TermsConsent checked={agreeToTerms} action={(checked) => {
                store.dispatch(setTermsAgreement(checked));
              }} />
            </TermsConsentContainer>

            <CustomButton onClick={() => store.dispatch(initiateSubmitCompanyData())} disabled={!isValid}>Continue</CustomButton>

            <NeedHelp />
          </ContentContainer>
        </LeftAlignedForm>
      </FormContainer>

    </>
  );
};

export default Company;
