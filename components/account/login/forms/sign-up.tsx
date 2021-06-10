import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import TermsConsent from "../../terms";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import { CustomButton, ContentContainer, HeaderContainer, Title, SubTitle, InputContainer } from "../../../account/elements";


const TermsConsentContainer = styled("div")`
margin-top:-20px;

`;
const SignupForm = ({ action }) => {
    return (
        <>
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
                <TermsConsentContainer>
                    <TermsConsent />
                </TermsConsentContainer>

                <CustomButton onClick={() => action()}>Create account</CustomButton>

            </ContentContainer>
        </>
    );
}

export default SignupForm;