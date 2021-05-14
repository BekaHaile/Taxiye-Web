import React, { useState } from "react";
import Image from "../../login/image";
import { DefaultInput } from "../../form/input-fields/primary-input";
import Router from 'next/router'
import Link from 'next/link';
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../login/elements";
import styled from "styled-components";

import Modal from "../../modal";
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
const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;

const PhoneVerification = () => {
    const [show, setShow] = useState(false);
    const [sendSms, setSendTextShow] = useState(false);
    return (
        <>
            <ContentWrapper>
                <Image type="corporate"/>
                <FormContainer>
                    <LeftAlignedForm>
                        <HeaderContainer>
                            <Title>Verify your Phone Number</Title>
                            <SubTitle>Verify your number by typing the 6 digit code we sent via text.</SubTitle>
                        </HeaderContainer>
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
                            <Link href="/signup/corporate/credential">
                            <CustomButton>Continue</CustomButton>
                            </Link>
                            <FlexContainer>
                                <SubTitle>Need help?</SubTitle>
                                <FlexContainer>
                                    <NavLink href="/">Click here</NavLink>
                                </FlexContainer>
                            </FlexContainer>
                        </ContentContainer>
                    </LeftAlignedForm>
                </FormContainer>
                <Modal onClose={() => setShow(false)} show={show}>
                    <Container>
                    <ModalTitle>We will resend code to +251 911 39 96 31</ModalTitle>
                    </Container>
                    <FixedCustomButton onClick={()=> {setShow(false); setSendTextShow(true);}}>Text me</FixedCustomButton>
                </Modal>

                <Modal onClose={() => setSendTextShow(false)} show={sendSms}>
                    <Container>
                    <ModalTitle>We have sent 6 digit code to +251 911 39 96 31</ModalTitle>
                    <InfoText>please check your inbox</InfoText>
                    <CodeSentContainer>
                        <img src={require("../../../assets/icons/checked.svg")}></img>
                        <CodeSentText> Code sent</CodeSentText>
                    </CodeSentContainer>
                    </Container>
                    <FixedCustomButton onClick={() => setSendTextShow(false)}>Done</FixedCustomButton>
                </Modal>
            </ContentWrapper>
        </>
    );
};

export default PhoneVerification;
