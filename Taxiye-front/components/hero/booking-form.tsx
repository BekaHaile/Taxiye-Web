import React from "react";
import { Inputs, Form, InlineForm, InputSeparator, Button } from "./inputs";
import { Title, SubTitle,HomeTitles,FormContainer,CustomButton } from "./tab-titles";


const BookForm = () => {
  return (
    <>
      <HomeTitles>
      <Title>Make every mile count by taxiye.</Title>
      <SubTitle>For in-city point to point travel</SubTitle>
      </HomeTitles>
      <Form>
      <FormContainer>
        <Inputs
          label="From?"
          placeholder="Enter pickup location"
          id="location"
          icon={require("../../assets/icons/location.png")}
        />
        <Inputs
          label="Where to?"
          placeholder="Enter drop off for estimate"
          id="dropoff"
          icon={require("../../assets/icons/flag_fill.png")}
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

export default BookForm;
