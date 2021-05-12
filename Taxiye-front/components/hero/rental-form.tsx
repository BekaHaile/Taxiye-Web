import React from "react";
import { Inputs, Form, InlineForm, InputSeparator } from "./inputs";
import { Title, SubTitle,HomeTitles,FormContainer,CustomButton } from "./tab-titles";

const RentalForm = () => {
  return (
    <>
    <HomeTitles>
      <Title>Take Taxiye with you.</Title>
      <SubTitle>For local city trips</SubTitle>
      </HomeTitles>
      <Form>
      <FormContainer>
        <Inputs
          label="Pickup?"
          placeholder="Enter pickup location"
          id="location"
          icon={require("../../assets/icons/location.png")}
        />
        <Inputs
          label="Package?"
          placeholder="Enter drop off for estimate"
          id="package"
          icon={require("../../assets/icons/user/vector.svg")}
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

export default RentalForm;
