import React from "react";
import Image from "../../image";
import { ContentWrapper, FlexContainer, CustomButton, CheckBoxContainer, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../elements";
import Stepper from "../stepper";
import styled from "styled-components";

import Modal from "../../../modal";

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
const Signup = () => {

  const [show, setShow] = React.useState(false);
  const [sendSms, setSendTextShow] = React.useState(false);
  return (
    <>
      <ContentWrapper>
        <Image type="driver" />
        <FormContainer>
          <Stepper setShow={setShow}/>
        </FormContainer>

        <Modal onClose={() => setShow(false)} show={show}>
          <Container>
            <ModalTitle>We will resend code to +251 911 39 96 31</ModalTitle>
          </Container>
          <FixedCustomButton onClick={() => { setShow(false); setSendTextShow(true); }}>Text me</FixedCustomButton>
        </Modal>

        <Modal onClose={() => setSendTextShow(false)} show={sendSms}>
          <Container>
            <ModalTitle>We have sent 6 digit code to +251 911 39 96 31</ModalTitle>
            <InfoText>please check your inbox</InfoText>
            <CodeSentContainer>
              <img src={require("../../../../assets/icons/checked.svg")}></img>
              <CodeSentText> Code sent</CodeSentText>
            </CodeSentContainer>
          </Container>
          <FixedCustomButton onClick={() => setSendTextShow(false)}>Done</FixedCustomButton>
        </Modal>
      </ContentWrapper>
    </>
  );
};

export default Signup;
