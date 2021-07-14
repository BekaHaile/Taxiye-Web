import React, { useState } from "react";
import { DefaultOtpInput } from "../../../form/input-fields/otp-field";
import Router from "next/router";
import {
  ContentWrapper,
  FlexContainer,
  CustomButton,
  ContentContainer,
  HeaderContainer,
  Avatar,
  NavLink,
  Title,
  SubTitle,
  InputContainer,
} from "../../elements";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  changeOtpStatus,
  resendOtp,
  changeOtp,
  submitOtp
} from "../../../../redux/actions/driver";

import Modal from "../../../modal/secondary";

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
  color: ${theme.colors.primaryTextColor};
  padding-top: 10px;
  padding-bottom: 20px;
`;

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

const CodeSentText = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #20aa46;
  padding-left: 15px;
`;

const Container = styled("div")`
  padding-bottom: 30px;
`;

const ModalContentContainer = styled("div")`
  width: 100%;
  text-align: center;
`;

const CodeSentContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
const FixedCustomButton = styled(CustomButton)`
  margin-bottom: 0px;
  margin: auto;
`;

const PhoneVerification = ({ handleNext, handleBack }) => {
  const otp = useSelector((state) => state["driver"]["otp"]);
  const isOtpValid = useSelector((state) => state["driver"]["isOtpValid"]);

  const [show, setShow] = useState(false);
  const phone_no = useSelector((state) => state["driver"]["phone_no"]);
  const otpSent = useSelector((state) => state["driver"]["otpSent"]);
  const loading = useSelector((state) => state["driver"]["loading"]);

  const country_code = useSelector((state) => state["driver"]["country_code"]);
  const phone_number = `${country_code}${phone_no}`;

  const handleClick = () => {
    setShow(true);
    store.dispatch(changeOtpStatus({ loading: false, otpSent: false }));
  };
  return (
    <>
      <ContentWrapper>
        <LeftAlignedForm>
          <CustomHeaderContainer>
            <Title>Verify your Phone Number</Title>
            <CustomSubTitle>
              Verify your number you submitted on the previous step by typing
              the 6 digit code we sent via text.
            </CustomSubTitle>
          </CustomHeaderContainer>
          <ContentContainer>
            <InputContainer>
              <DefaultOtpInput
                label="Verification code *"
                placeholder=""
                id="phone"
                value={otp}
                onChange={(val) => store.dispatch(changeOtp(val))}
              />
            </InputContainer>

            <FlexContainer>
              <SubTitle>We sent a code to the following number</SubTitle>
              <BolderNavLink>{phone_number}</BolderNavLink>
              <BolderNavLink onClick={() => setShow(true)}>
                Resend code
              </BolderNavLink>
            </FlexContainer>
            <CustomButton disabled={!isOtpValid} onClick={()=>{
              store.dispatch(submitOtp());
            }}>
              Continue
            </CustomButton>
            <FlexContainer>
              <SubTitle>Problem receiving the code?</SubTitle>
              <FlexContainer>
                <Avatar
                  src={require("../../../../assets/icons/main-search.svg")}
                />
                <NavLink href="/">Support Center</NavLink>
                <NavLink onClick={handleBack}>Change Phone Number</NavLink>
              </FlexContainer>
            </FlexContainer>
          </ContentContainer>
        </LeftAlignedForm>
      </ContentWrapper>

      <Modal
        showCloseIcon={true}
        onClose={() => setShow(false)}
        show={!loading && !otpSent && show}
      >
        <Container>
          <ModalTitle>We will resend code to {phone_number}</ModalTitle>
        </Container>
        <ModalContentContainer>
          <FixedCustomButton
            onClick={() => {
              store.dispatch(resendOtp());
            }}
          >
            Text me
          </FixedCustomButton>
        </ModalContentContainer>
      </Modal>

      <Modal
        showCloseIcon={true}
        onClose={() => setShow(false)}
        show={otpSent && show}
      >
        <ModalContentContainer>
          <div>
            <ModalTitle>We have sent 6 digit code to {phone_number}</ModalTitle>
            <InfoText>please check your inbox</InfoText>
            <CodeSentContainer>
              <img src={require("../../../../assets/icons/checked.svg")}></img>
              <CodeSentText> Code sent</CodeSentText>
            </CodeSentContainer>
          </div>
          <FixedCustomButton onClick={() => setShow(false)}>
            Done
          </FixedCustomButton>
        </ModalContentContainer>
      </Modal>
    </>
  );
};

export default PhoneVerification;
