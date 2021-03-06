import React from "react";
import styled from "styled-components";

import { DefaultTextArea } from "../../form/input-fields/primary-textarea";
import { DefaultInput } from "../../form/input-fields/primary-input";
import { Button } from "../../form/buttons/primary-button";
import { InlineForm } from "../../form/inline-form";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import {
  addFullName,
  addEmail,
  addSubject,
  addMessage,
  submitForm,
} from "../../../redux/actions/contact-us";
const CustomDefaultTextArea = styled(DefaultTextArea)`
  height: 200px;
  @media (max-width: 768px) {
    width: auto;
  }
`;
const Container = styled("div")`
  width: 100%;
  gap: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ButtonContainer = styled("div")`
  margin-top: 40px;
`;
const DefaultInputContainer = styled("div")`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 330px) {
    width: 100%;
  }
`;

const InlineFormView = styled(InlineForm)`
  gap: 30px !important;
  @media (max-width: 768px) {
    gap: 0px !important;
  }
`;

const ContactUsForm = ({ contactUsContent }) => {
  const full_name = useSelector((state) => state["contact_us"]["full_name"]);
  const email = useSelector((state) => state["contact_us"]["email"]);
  const subject = useSelector((state) => state["contact_us"]["subject"]);
  const message = useSelector((state) => state["contact_us"]["message"]);
  const isValid = useSelector((state) => state["contact_us"]["isValid"]);

  const contactUsForm = contactUsContent?.contactUsForm;
  const continueButton = contactUsContent?.continueButton;

  return (
    <>
      <Container>
        <InlineFormView>
          <DefaultInputContainer>
            <DefaultInput
              placeholder={contactUsForm?.find((a) => a.label === "full-name")?.placeHolder}
              id={contactUsForm?.find((a) => a.label === "full-name")?.label}
              value={full_name}
              onChange={(e) => {
                store.dispatch(addFullName(e.target.value));
              }}
            />
          </DefaultInputContainer>
          <DefaultInputContainer>
            <DefaultInput
              placeholder={contactUsForm?.find((a) => a.label === "email")?.placeHolder}
              id={contactUsForm?.find((a) => a.label === "email")?.label}
              value={email}
              onChange={(e) => {
                store.dispatch(addEmail(e.target.value));
              }}
            />
          </DefaultInputContainer>
        </InlineFormView>
        <DefaultInput
          placeholder={contactUsForm?.find((a) => a.label === "subject")?.placeHolder}
          id={contactUsForm?.find((a) => a.label === "subject")?.label}
          value={subject}
          onChange={(e) => {
            store.dispatch(addSubject(e.target.value));
          }}
        />

        <CustomDefaultTextArea
          placeholder={contactUsForm?.find((a) => a.label === "message")?.placeHolder}
          id={contactUsForm?.find((a) => a.label === "message")?.label}
          value={message}
          action={(e) => {
            store.dispatch(addMessage(e.target.value));
          }}
        />
        <ButtonContainer>
          <Button
            onClick={() => store.dispatch(submitForm())}
            disabled={!isValid}
          >
            {continueButton?.text}
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ContactUsForm;
