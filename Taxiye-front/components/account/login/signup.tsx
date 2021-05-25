import React from "react";
import Image from "../image";
import { DefaultInput } from "../../form/input-fields/primary-input";
import { ContentWrapper, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Title, SubTitle, InputContainer } from "../elements";
import styled from "styled-components";
import Link from "next/link";
import TermsConsent from "../terms";

const TermsConsentContainer = styled("div")`
margin-top:-20px;

`;

const Signup = () => {

    return (
        <>
            <ContentWrapper>
                <Image/>
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
                            <TermsConsentContainer>
                            <TermsConsent/>
                            </TermsConsentContainer>
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
