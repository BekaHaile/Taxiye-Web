import React, { useState } from "react";
import Image from "../../image";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Router from 'next/router'
import Link from 'next/link';
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../elements";
import styled from "styled-components";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import Modal from "../../../modal";
import {resendOtp} from "../../../../redux/actions/user";
const BolderNavLink = styled(NavLink)`
font-weight: 600;
`;

const SmallerNavLink = styled(NavLink)`
font-size:12px;
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
    const step = useSelector((state) => state["user"]["step"]);
    const loading = useSelector((state) => state["user"]["loading"]);

    const phone_no = useSelector((state) => state["user"]["phone_no"]);
    const otpSent = useSelector((state) => state["user"]["otpSent"]);
    const country_code = useSelector((state) => state["user"]["country_code"]);

    const userData = useSelector((state) => state["user"]["userData"]);

    const phone_number = `${country_code}${phone_no}`;
    return (
        <>
          
                <FormContainer>
                    <LeftAlignedForm>
                    
                    </LeftAlignedForm>
                </FormContainer>
                
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
            
        </>
    );
};

export default PhoneVerification;
