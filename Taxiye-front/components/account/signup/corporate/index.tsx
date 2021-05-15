import React from "react";
import styled from "styled-components";
import Image from "../../image";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../elements";
import colors from "../../../../theme/main/colors";
import { PhoneInput } from "../../../form/input-fields/phone-input";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Link from "next/link";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;

}
`;

const CustomSubTitle = styled(SubTitle)`
padding-right:0px;
}
`;
const InputContainerWithSpace = styled(InputContainer)`
padding-right:60px;
}
`;
const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
}
`;

const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;



const Signup = () => {
  return (
    <>
      <ContentWrapper>
        <Image type="corporate" />
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
                <InputContainerWithSpace>
                  <DefaultInput
                    label="Company Name *"
                    placeholder="your company name"
                    id="companyname" />
                </InputContainerWithSpace>

                <InputContainer>
                  <DefaultInput
                    type="email"
                    label="Official Email Address *"
                    placeholder="your@company.com"
                    id="officialemail" />
                </InputContainer>
              </CustomFlexContainer>

              <CustomFlexContainer>
                <InputContainerWithSpace>
                  <PhoneInput
                    label="Phone Number *"
                    placeholder="your phone number"
                    id="phonenumber" />
                </InputContainerWithSpace>

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
              <FlexContainer>
                <CustomSubTitle>Need help?</CustomSubTitle>
                <LinkWithLine href="/">Click here</LinkWithLine>

              </FlexContainer>
            </ContentContainer>
          </LeftAlignedForm>
        </FormContainer>
      </ContentWrapper>
    </>
  );
};

export default Signup;
