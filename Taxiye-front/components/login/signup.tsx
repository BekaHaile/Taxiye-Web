import React from "react";
import Image from "./image";
import { DefaultInput } from "../form/input-fields/primary-input";
import { ContentWrapper, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Title, SubTitle, InputContainer } from "./elements";
import styled from "styled-components";
import colors from ".././../theme/main/colors";
import Link from "next/link";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;

}
`;

const AgreementContainer = styled("div")`
margin-top:-20px;
margin-bottom:20px;
display:flex;
justify-content:start;
text-align:start;
}
`;

const CheckBoxLabel = styled("label")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;

color: #444444;
}
`;


const Signup = () => {

    return (
        <>
            <ContentWrapper>
                <Image type=""/>
                <FormContainer>
                    <CenteredForm>
                        <HeaderContainer>
                            <Title>Signup with Taxiye</Title>
                            <SubTitle>Tell us who you are. Please enter your correct detail below</SubTitle>
                        </HeaderContainer>
                        <ContentContainer>
                            <InputContainer>
                                <DefaultInput
                                    label="First Name *"
                                    placeholder="John"
                                    id="firstname" />
                            </InputContainer>
                            <InputContainer>
                                <DefaultInput
                                    label="Last Name *"
                                    placeholder="Doe"
                                    id="lastname" />
                            </InputContainer>
                            <InputContainer>
                                <DefaultInput
                                    label="Email Address *"
                                    placeholder="Johndoe@gmail.com"
                                    id="emailaddress" />
                            </InputContainer>
                            <AgreementContainer>
                                <div>
                                    <input type="checkbox" id="terms" name="interest" value="coding" />
                                    <CheckBoxLabel>I agree to Taxiye's</CheckBoxLabel>
                                </div>
                                <LinkWithLine href="/">Terms of service</LinkWithLine>
                            </AgreementContainer>
                            <Link href="/login/finish">
                                <CustomButton>Create account</CustomButton>
                            </Link>
                        </ContentContainer>
                    </CenteredForm>
                </FormContainer>


            </ContentWrapper>
        </>
    );
};

export default Signup;
