import React from "react";
import styled from "styled-components";
import Image from "../../image";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../elements";
import colors from "../../../../theme/main/colors";
import { PhoneInput } from "../../../form/input-fields/phone-input";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Link from "next/link";
import NeedHelp from "../../need-help";

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
gap:60px;
}
`;

const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;



const Signup = ({hero}) => {
  return (
    <>
      <ContentWrapper>
        <Image hero={hero} />
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
                    label="Company Name *"
                    placeholder="your company name"
                    id="companyname" />
                </InputContainer>

                <InputContainer>
                  <DefaultInput
                    type="email"
                    label="Official Email Address *"
                    placeholder="your@company.com"
                    id="officialemail" />
                </InputContainer>
              </CustomFlexContainer>

              <CustomFlexContainer>
                <InputContainer>
                  <PhoneInput
                    label="Phone Number *"
                    placeholder="your phone number"
                    id="phonenumber" />
                </InputContainer>

                <InputContainer>
                  <DefaultInput
                    label="Number of Employees *"
                    placeholder=""
                    id="employeenumber" />
                </InputContainer>
              </CustomFlexContainer>

              <Link href="/signup/corporate/verification">
                <CustomButton>Continue</CustomButton>
              </Link>
              <NeedHelp/>
            </ContentContainer>
          </LeftAlignedForm>
        </FormContainer>
      </ContentWrapper>
    </>
  );
};

export default Signup;
