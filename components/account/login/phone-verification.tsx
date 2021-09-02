import React, { useState } from "react";
import Image from "../image";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../elements";
import styled from "styled-components";
import VerificationForm from "./forms/verification";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import { resendOtp, changeOtpStatus, changeOtp } from "../../../redux/actions/user";
import theme from "../../../theme/main";

import Modal from "../../modal/secondary";

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
margin: auto;
justify-self: center;
display: block;
margin-top: 20px;

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
color:${theme.colors.primaryTextColor};;
padding-top:10px;
padding-bottom:20px;
`;


const PhoneVerification = ({ hero, action, goBack }:any) => {
    const [show, setShow] = useState(false);
    const phone_no = useSelector((state) => state["user"]["phone_no"]);
    const otpSent = useSelector((state) => state["user"]["otpSent"]);
    
    const country_code = useSelector((state) => state["user"]["country_code"]);
    const phone_number=`${country_code}${phone_no}`;

    const  handleClick = ()=>{
        setShow(true);
        store.dispatch(changeOtpStatus({loading:false, otpSent:false}));
    }
    return (
        <>
            <ContentWrapper>
                {
                    hero &&
                    <Image hero={hero} />
                }
                <FormContainer>
                    <CenteredForm>
                        <VerificationForm changeOtp={(val)=>store.dispatch(changeOtp(val))} phone_number={phone_number} setShow={handleClick} goBack={() => goBack()} action={() => action()} />
                    </CenteredForm>
                </FormContainer>
                <Modal onClose={() => setShow(false)} show={!otpSent && show}>
                    <Container>
                        <ModalTitle>We will resend code to {phone_number}</ModalTitle>
                    </Container>
                    <FixedCustomButton onClick={() => { store.dispatch(resendOtp()); }}>Text me</FixedCustomButton>
                </Modal>

                <Modal onClose={() =>setShow(false)} show={otpSent && show}>
                    <div>
                        <ModalTitle>We have sent 6 digit code to {phone_number}</ModalTitle>
                        <InfoText>please check your inbox</InfoText>
                        <CodeSentContainer>
                            <img src={require("../../../assets/icons/checked.svg")}></img>
                            <CodeSentText> Code sent</CodeSentText>
                        </CodeSentContainer>
                    </div>
                    <FixedCustomButton onClick={() => setShow(false)}>Done</FixedCustomButton>
                </Modal>
            </ContentWrapper>
        </>
    );
};

export default PhoneVerification;
