import React from "react";
import { Inputs, Form, InlineForm, InputSeparator, Button } from "./inputs";
import { Title, SubTitle, HomeTitles, FormContainer, CustomButton, Link } from "./tab-titles";

const DeliveryForm = ({ contentView }) => {
  return (
    <>
      {contentView ? null :
        <HomeTitles>
          <Title>Right on your door step</Title>
          <SubTitle>When you need something delivered</SubTitle>
        </HomeTitles>
      }
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
            
              <Inputs label="Time?" placeholder="06:45 AM" id="time" />
            
          </InlineForm>
        </FormContainer>
        {
          contentView ? contentView :
            <Link href="/booking">
              <CustomButton>Request Now</CustomButton>
            </Link>
        }

      </Form>
    </>
  );
};

export default DeliveryForm;
