import React from "react";
import { LabelText, Form, InlineForm, InputWrapper, FormGroup, Icon } from "./inputs";
import { Title, SubTitle, HomeTitles, FormContainer, CustomButton, Link } from "./tab-titles";
import LocationInput from "./input-location";
import store from "../../redux/store";
import { originSelected, destinationSelected } from "../../redux/actions/booking";
import { useSelector } from "react-redux";
import { DatePicker, TimePicker } from "../form/date-picker";


const RentalForm = ({ contentView }) => {
  const origin = useSelector((state) => state["origin"]);
  const destination = useSelector((state) => state["destination"]);


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


          <LocationInput
            label="From?"
            icon={require("../../assets/icons/location.svg")}
            placeholder="Enter pickup location"
            id="location"
            action={(location, address) => {
              store.dispatch(originSelected({ origin: { location, address } }));
            }}
            address={origin.address}
          />

          <LocationInput
            label="Package"
            icon={require("../../assets/icons/package.svg")}
            placeholder="Select a package"
            id="dropoff"
            action={(location, address) => {
              store.dispatch(destinationSelected({ destination: { location, address } }));
            }}
            address={destination.address}
          />

          <InlineForm>
            <FormGroup>
              <Icon src={require("../../assets/icons/user/clock.svg")} />
              <InputWrapper>
                <LabelText htmlFor="datepicker"> When? </LabelText>
                <DatePicker
                  action={(value) => {
                    console.log(value);
                  }}
                  id="datepicker" placeholder="today" />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper>
                <LabelText htmlFor="datepicker"> Time? </LabelText>
                <TimePicker
                  action={(value) => {
                    console.log(value);
                  }}
                  id="datepicker" placeholder="06:54" />
              </InputWrapper>
            </FormGroup>
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
