import React from "react";
import styled from "styled-components";
import Image from "../../image";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../elements";
import colors from "../../../../theme/main/colors";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Link from "next/link";
import NeedHelp from "../../terms";

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



const Credential = () => {
  return (
    <>
      <ContentWrapper>
        <Image />
        <FormContainer>
          <LeftAlignedForm>
            <HeaderContainer>
              <Title>Almost Done!</Title>
                <CustomSubTitle>Please provide the following details to get started.</CustomSubTitle>
            
            </HeaderContainer>
            <ContentContainer>

              <CustomFlexContainer>
                <InputContainer>
                  <DefaultInput
                    label="Your Full Name *"
                    placeholder="John doe"
                    id="fullname" />
                </InputContainer>

                <InputContainer>
                  <DefaultInput
                    type="email"
                    label="Your Email Address *"
                    placeholder="johndoe@gmail.com"
                    id="youremail" />
                </InputContainer>
              </CustomFlexContainer>

              <CustomFlexContainer>
                <InputContainer>
                  <DefaultInput
                    type="password"
                    label="Password *"
                    placeholder="********"
                    id="phonenumber" />
                </InputContainer>

                <InputContainer>
                  <DefaultInput
                    type="password"
                    label="Confirm Password *"
                    placeholder="********"
                    id="employeenumber" />
                </InputContainer>
              </CustomFlexContainer>

              <Link href="/signup/corporate/finish">
                <CustomButton>Get Started</CustomButton>
              </Link>
              <NeedHelp/>
            </ContentContainer>
          </LeftAlignedForm>
        </FormContainer>
      </ContentWrapper>
    </>
  );
};

export default Credential;
