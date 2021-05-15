import React, { useState } from "react";
import Image from "../../image";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Router from 'next/router'
import Link from 'next/link';
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../elements";
import styled from "styled-components";

const BolderNavLink = styled(NavLink)`
font-weight: 600;
`;

const Container = styled('div')`
padding-bottom:30px;
`;

const CodeSentContainer = styled('div')`
display:flex;
justify-content:center;
`;

const CodeSentText = styled('p')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #20AA46;
padding-left:15px;
`;

const FixedCustomButton = styled(CustomButton)`
margin-bottom:0px;
`;
const ModalTitle = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: center;
`;
const BackButton = styled("img")`
padding-bottom:10px;
`;

const InfoText = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #444444;
padding-top:10px;
padding-bottom:20px;
`;

const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
justify-content: center;
}
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
                        <BackButton onClick={handleBack} src={require("../../../../assets/icons/back-arrow.svg")} />
                        <Title>Verify your Phone Number</Title>
                        <CustomSubTitle>Verify your number you submitted on the previous step by typing the 6 digit code we sent via text.</CustomSubTitle>
                    </CustomHeaderContainer>
                    <ContentContainer>
                        <InputContainer>
                            <DefaultInput
                                label="Verification code *"
                                placeholder="__ __ __ __ __ __"
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
