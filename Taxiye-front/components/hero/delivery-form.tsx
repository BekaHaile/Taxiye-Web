import React from "react";
import { Inputs, Form, InlineForm, InputSeparator } from "./inputs";
import { Title, SubTitle,HomeTitles,FormContainer, CustomButton } from "./tab-titles";

const DeliveryForm = () => {
  return (
    <>
    <HomeTitles>
      <Title>Right on your door step</Title>
      <SubTitle>When you need something delivered</SubTitle>
      </HomeTitles>
      <Form>
      <FormContainer>
        <Inputs
          label="From?"
          placeholder="Enter pickup location"
          id="location"
          icon={require("../../assets/icons/location.svg")}
        />
        <Inputs
          label="Where to?"
          placeholder="Enter drop off for estimate"
          id="dropoff"
          icon={require("../../assets/icons/flag.svg")}
        />
        <InlineForm>
          <Inputs
            label="When?"
            placeholder="Today"
            id="date"
            icon={require("../../assets/icons/user/clock.svg")}
          />
          <InputSeparator>
            <Inputs label="Time?" placeholder="06:45 AM" id="time" />
          </InputSeparator>
        </InlineForm>
        </FormContainer>
        <CustomButton>Request Now</CustomButton>
      </Form>
    </>
  );
};

export default DeliveryForm;
