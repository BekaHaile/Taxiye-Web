import React from "react";
import {
  LabelText,
  Form,
  InlineForm,
  InputWrapper,
  FormGroup,
  Icon,
} from "../../../../tab-forms/inputs";
import {
  Title,
  SubTitle,
  HomeTitles,
  FormContainer,
  CustomButton,
  Link,
} from "../../../../tab-forms/tab-titles";
import LocationInput from "../../../../tab-forms/input-location";
import store from "../../../../../redux/store";
import {
  selectOrigin,
  selectDestination,
  changeDate,
  changeTime,
} from "../../../../../redux/actions/corporate/employees";
import { useSelector } from "react-redux";
import { DatePicker, TimePicker } from "../../../../form/date-picker";
import { useRouter } from "next/router";
import { Loader } from "../../../../loading/loading";
import styled from "styled-components";
const BookForm = () => {
  const origin = useSelector((state) => state["corporate_employees"]["origin"]);
  const destination = useSelector((state) => state["corporate_employees"]["destination"]);
  const date = useSelector((state) => state["corporate_employees"]["date"]);
  const time = useSelector((state) => state["corporate_employees"]["time"]);
  
  return (
    <>
     
      <Form>
        <FormContainer>
          <LocationInput
            label="From?"
            icon={require("../../../../../assets/icons/location.svg")}
            placeholder="Enter pickup location"
            id="location"
            action={(location, address) => {
              store.dispatch(selectOrigin({ origin: { location, address } }));
            }}
            address={origin.address}
          />

          <LocationInput
            label="Where to?"
            icon={require("../../../../../assets/icons/flag.svg")}
            placeholder="Enter drop off for estimate"
            id="dropoff"
            action={(location, address) => {
              store.dispatch(
                selectDestination({ destination: { location, address } })
              );
            }}
            address={destination.address}
          />

          <InlineForm>
            <FormGroup>
              <Icon src={require("../../../../../assets/icons/user/clock.svg")} />
              <InputWrapper>
                <LabelText htmlFor="datepicker"> When? </LabelText>
                <DatePicker
                  selectedDate={date}
                  action={(value) => {
                    store.dispatch(changeDate(value));
                  }}
                  id="datepicker"
                  placeholder="today"
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper>
                <LabelText htmlFor="datepicker"> Time? </LabelText>
                <TimePicker
                  selectedTime={time}
                  action={(value) => {
                    store.dispatch(changeTime(value));
                  }}
                  id="datepicker"
                  placeholder="06:54"
                />
              </InputWrapper>
            </FormGroup>
          </InlineForm>
        </FormContainer>
       
      </Form>
    </>
  );
};

export default BookForm;
