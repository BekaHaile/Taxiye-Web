import React, { useState } from "react";
import { DefaultOtpInput } from "../../../form/input-fields/otp-field";
import Router from 'next/router'
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../elements";
import styled from "styled-components";

const BolderNavLink = styled(NavLink)`
font-weight: 600;
`;

const LeftAlignedForm = styled("div")`
width: fit-content;
}
`;
const CustomSubTitle = styled(SubTitle)`
width: 500px;
}
`;

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;


const PhoneVerification = ({ handleNext, setShow, handleBack }) => {
    
    return (
        <>
            <ContentWrapper>
                <LeftAlignedForm>

                    <CustomHeaderContainer>
                        
                        <Title>Verify your Phone Number</Title>
                        <CustomSubTitle>Verify your number you submitted on the previous step by typing the 6 digit code we sent via text.</CustomSubTitle>
                    </CustomHeaderContainer>
                    <ContentContainer>
                        <InputContainer>
                            <DefaultOtpInput
                                label="Verification code *"
                                placeholder=""
                                id="phone" />
                        </InputContainer>

                        <FlexContainer>
                            <SubTitle>We sent a code to the following number</SubTitle>
                            <BolderNavLink onClick={() => Router.back()}>+251 911 39 96 31</BolderNavLink>
                            <BolderNavLink onClick={() => setShow(true)}>Resend code</BolderNavLink>
                        </FlexContainer>
                        <CustomButton onClick={handleNext}>
                            Continue
                    </CustomButton>
                        <FlexContainer>
                            <SubTitle>Problem receiving the code?</SubTitle>
                            <FlexContainer>
                                <Avatar src={require("../../../../assets/icons/main-search.svg")} />
                                <NavLink href="/">Support Center</NavLink>
                                <NavLink onClick={handleBack}>Change Phone Number</NavLink>
                            </FlexContainer>
                        </FlexContainer>
                    </ContentContainer>
                </LeftAlignedForm>

                
            </ContentWrapper>

        </>
    );
};

export default PhoneVerification;
