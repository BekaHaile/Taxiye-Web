import React, { useState } from "react";
import theme from "../../../../theme/main";
import {
  CustomButton,
  CenteredForm,
  FormContainer,
  NavLink,
} from "../../elements";
import styled from "styled-components";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import Modal from "../../../modal";
import {
  goToStep,
  changeOtp,
  changeOtpStatus,
  resendOtp,
  submitOtp,
} from "../../../../redux/actions/corporate";
import Verification from "./verification";
import { Loading } from "../../../loading/loading";

const Container = styled("div")`
  padding-bottom: 30px;
`;

const CodeSentContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

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

const FixedCustomButton = styled(CustomButton)`
  margin-bottom: 0px;
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
  padding-top: 10px;
  padding-bottom: 20px;
`;
const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;

const PhoneVerification = () => {
  const [show, setShow] = useState(false);
  const loading = useSelector((state) => state["corporate"]["loading"]);

  const phone_no = useSelector((state) => state["corporate"]["phone_no"]);
  const otpSent = useSelector((state) => state["corporate"]["otpSent"]);
  const country_code = useSelector(
    (state) => state["corporate"]["country_code"]
  );

  const userData = useSelector((state) => state["corporate"]["userData"]);

  const phone_number = `${country_code}${phone_no}`;
  const handleClick = () => {
    setShow(true);
    store.dispatch(changeOtpStatus({ loading: false, otpSent: false }));
  };
  const goBack = () => {
    store.dispatch(goToStep(1));
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <FormContainer>
        <LeftAlignedForm>
          <Verification
            changeOtp={(val) => store.dispatch(changeOtp(val))}
            phone_number={phone_number}
            setShow={handleClick}
            goBack={goBack}
            action={() => store.dispatch(submitOtp())}
          />
        </LeftAlignedForm>
      </FormContainer>

      <Modal onClose={() => setShow(false)} show={!otpSent && show && !loading}>
        <Container>
          <ModalTitle>We will resend code to {phone_number}</ModalTitle>
        </Container>
        <FixedCustomButton
          onClick={() => {
            store.dispatch(resendOtp());
          }}
        >
          Text me
        </FixedCustomButton>
      </Modal>

      <Modal onClose={() => setShow(false)} show={otpSent && show && !loading}>
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
      </Modal>
    </>
  );
};

export default PhoneVerification;
