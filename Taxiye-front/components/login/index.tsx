import React from "react";
import { DefaultInput, Form, InlineForm, InputSeparator, Button } from "../form/inputs";
import Image from "./image";
import styled from "styled-components";


const ContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
`;


const Login = () => {
  return (
    <>
    <ContentWrapper>
    <Image/>
      <Form>
        <DefaultInput
          placeholder="Enter pickup location"
          id="location"
        />
        <DefaultInput
          placeholder="Enter drop off for estimate"
          id="dropoff"
        />
        <InlineForm>
          <DefaultInput
            placeholder="Today"
            id="date"
          />
          <InputSeparator>
            <DefaultInput placeholder="06:45 AM" id="time" />
          </InputSeparator>
        </InlineForm>
        <Button>Request Now</Button>
      </Form>
      </ContentWrapper>
    </>
  );
};

export default Login;
