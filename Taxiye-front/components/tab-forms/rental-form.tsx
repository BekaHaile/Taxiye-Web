import React from "react";
import { Inputs, Form, InlineForm, InputSeparator, Button } from "../hero/inputs";
import { Title, SubTitle, HomeTitles, FormContainer, CustomButton, Link } from "./tab-titles";

const RentalForm = ({ contentView }) => {
  return (
    <>
      {contentView ? null :
        <HomeTitles>
          <Title>Take Taxiye with you.</Title>
          <SubTitle>For local city trips</SubTitle>
        </HomeTitles>
      }
      <Form>
        <FormContainer>
          <Inputs
            label="Pickup?"
            placeholder="Enter pickup location"
            id="location"
            icon={require("../../assets/icons/location.svg")}
          />
          <Inputs
            label="Package?"
            placeholder="Enter drop off for estimate"
            id="package"
            icon={require("../../assets/icons/package.svg")}
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

export default RentalForm;
