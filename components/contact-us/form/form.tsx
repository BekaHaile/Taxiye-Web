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
`;
const Container = styled("div")`
  width: min-content;
  gap: 40px;
`;
const ButtonContainer = styled("div")`
  margin-top: 40px;
`;
const DefaultInputContainer = styled("div")`
  width: 330px;
`;

const ContactUsForm = () => {
  const full_name = useSelector((state) => state["contact_us"]["full_name"]);
  const email = useSelector((state) => state["contact_us"]["email"]);
  const subject = useSelector((state) => state["contact_us"]["subject"]);
  const message = useSelector((state) => state["contact_us"]["message"]);
  const isValid = useSelector((state) => state["contact_us"]["isValid"]);

  return (
    <>
      <Container>
        <InlineForm>
          <DefaultInputContainer>
            <DefaultInput
              placeholder="Full Name..."
              id="full_name"
              value={full_name}
              onChange={(e) => {
                store.dispatch(addFullName(e.target.value));
              }}
            />
          </DefaultInputContainer>
          <DefaultInputContainer>
            <DefaultInput
              placeholder="Email Address"
              id="email"
              value={email}
              onChange={(e) => {
                store.dispatch(addEmail(e.target.value));
              }}
            />
          </DefaultInputContainer>
        </InlineForm>
        <DefaultInput
          placeholder="Subject"
          id="subject"
          value={subject}
          onChange={(e) => {
            store.dispatch(addSubject(e.target.value));
          }}
        />

        <CustomDefaultTextArea
          placeholder="Message"
          id="message"
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
            Send Message
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ContactUsForm;
