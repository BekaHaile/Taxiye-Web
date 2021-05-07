import React from "react";
import { Inputs, Form, InlineForm, InputSeparator, Button } from "./inputs";
import { Title, SubTitle } from "./tab-titles";

const DeliveryForm = () => {
  return (
    <>
      <Title>Right on your door step</Title>
      <SubTitle>When you need something delivered</SubTitle>
      <Form>
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
        <Button>Request Now</Button>
      </Form>
    </>
  );
};

export default DeliveryForm;
