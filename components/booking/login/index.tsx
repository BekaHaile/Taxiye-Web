import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import InputForm from "../../account/login/forms/phone-input";
import VerificationForm from "../../account/login/forms/verification";
import SignupForm from "../../account/login/forms/sign-up";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import { changeOtp, changeStep, submitPhoneNumber, resendOtp, changeOtpStatus, submitOtp } from "../../../redux/actions/user";
import { goTo } from "../../../redux/actions/navigation";
import { Loading } from "../../loading/loading";
import Link from "next/link";
import { useRouter } from "next/router";
import { CustomButton } from "../../account/elements";
import theme from '../../../theme/main';

import Modal from "../../modal/secondary";

const MainContainer = styled("div")`
background: #ffffff;
border-radius: 5px;
display:flex;
flex-direction:column;
height: -webkit-fill-available;
max-width:490px;

`;

const Container = styled("div")`
    padding: 0px 20px;
    position:relative;
    overflow-y:auto;
    
`;
const FlexContainer = styled("div")`
    padding:20px;
    text-align:end;
`;
const BackButton = styled("img")`
    margin-bottom:10px;
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
const CodeSentContainer = styled('div')`
display:flex;
justify-content:center;
`;
const Login = () => {
    const [show, setShow] = useState(false);
    const step = useSelector((state) => state["user"]["step"]);
    const loading = useSelector((state) => state["user"]["loading"]);

    const phone_no = useSelector((state) => state["user"]["phone_no"]);
    const otpSent = useSelector((state) => state["user"]["otpSent"]);
    const country_code = useSelector((state) => state["user"]["country_code"]);

    const userData = useSelector((state) => state["user"]["userData"]);

    const phone_number = `${country_code}${phone_no}`;

    const handleClick = () => {
        setShow(true);
        store.dispatch(changeOtpStatus({ loading: false, otpSent: false }));
    }
    return (
        <>
            {
                loading ?
                    <Loading /> : null}

            <MainContainer>
                <FlexContainer>

                    <img onClick={() => goTo("")} src={require("../../../assets/images/logo/logo.svg")} />

                </FlexContainer>
                <Container>
                    <BackButton onClick={() => step > 1 ? store.dispatch(changeStep(step - 1)) : store.dispatch(goTo(""))} src={require("../../../assets/icons/back-arrow.svg")} />
                    {
                        step == 3 ? <SignupForm action={() => store.dispatch(goTo("confirm"))} /> :
                            step == 2 ? <VerificationForm changeOtp={(val) => store.dispatch(changeOtp(val))} phone_number={phone_number} setShow={handleClick} goBack={() => store.dispatch(changeStep(step - 1))} action={() => store.dispatch(submitOtp())} /> :
                                <InputForm title="Enter your phone number"
                                    action={() => {
                                        store.dispatch(submitPhoneNumber());
                                    }
                                    } />
                    }
                </Container>

                <Modal onClose={() => setShow(false)} show={!otpSent && show && !loading}>
                    <Container>
                        <ModalTitle>We will resend code to {phone_number}</ModalTitle>
                    </Container>
                    <FixedCustomButton onClick={() => { store.dispatch(resendOtp()); }}>Text me</FixedCustomButton>
                </Modal>

                <Modal onClose={() => setShow(false)} show={otpSent && show && !loading}>
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
            </MainContainer>
        </>
    );
}

export default Login;