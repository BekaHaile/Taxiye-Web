import React from 'react';
import { FlexContainer, CustomButton, ContentContainer, HeaderContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../../account/elements";
import Link from "next/link";
import { DefaultOtpInput } from "../../../form/input-fields/otp-field";
import Router from 'next/router';
import styled from "styled-components";
import { useSelector } from "react-redux";


const BolderNavLink = styled(NavLink)`
font-weight: 600;
`;


const PhoneInputForm = ({changeOtp, phone_number, action, setShow, goBack}:any) => {
    const isValid = useSelector((state) => state["user"]["isOtpValid"]);
    const otp = useSelector((state) => state["user"]["otp"]);
    return (
        <>
            <HeaderContainer>
                <Title>Verify your Phone Number</Title>
                <SubTitle>Verify your number by typing the 6 digit code we sent via text.</SubTitle>
            </HeaderContainer>
            <ContentContainer>
                <InputContainer>
                    <DefaultOtpInput
                        label="Verification code *"
                        placeholder=""
                        id="phone"
                        value={otp}
                        onChange={(val)=>changeOtp(val)}
                        />
                </InputContainer>

                <FlexContainer>
                    <SubTitle>We sent a code to the following number</SubTitle>
                    <BolderNavLink onClick={() => goBack()}>{phone_number}</BolderNavLink>
                    <BolderNavLink onClick={() => setShow(true)}>Resend code</BolderNavLink>
                </FlexContainer>
                <CustomButton disabled={!isValid} onClick={() => action()}>Next</CustomButton>
                <FlexContainer>
                    <SubTitle>Problem receiving the code?</SubTitle>
                    <FlexContainer>
                        <Avatar src={require("../../../../assets/icons/main-search.svg")} />
                        <NavLink href="/">Support Center</NavLink>
                        <NavLink onClick={() => goBack()}>Change Phone Number</NavLink>
                    </FlexContainer>
                </FlexContainer>
            </ContentContainer>
        </>
    );
}

export default PhoneInputForm;