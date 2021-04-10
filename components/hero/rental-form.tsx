import React from "react";
import { Inputs, Form, InlineForm, Button, InputSeparator } from "./inputs";
import { Title, SubTitle } from "./tab-titles";

const RentalForm = () => {
  return (
    <>
      <Title>Take Taxiye with you.</Title>
      <SubTitle>For local city trips</SubTitle>
      <Form>
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
          icon={require("../../assets/icons/Vector.png")}
        />
        <InlineForm>
          <Inputs
            label="When?"
            placeholder="Today"
            id="date"
            icon={require("../../assets/icons/clock.png")}
          />
          <InputSeparator>
            <Inputs label="Time?" placeholder="06:45 AM" id="time" />
          </InputSeparator>
        </InlineForm>
        <Button>Request Now</Button>
      </Form>
    </>
  );
};

export default RentalForm;
