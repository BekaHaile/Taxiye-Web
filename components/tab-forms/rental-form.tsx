import React from "react";
import { LabelText, Form, InlineForm, InputWrapper, FormGroup, Icon } from "./inputs";
import { Title, SubTitle, HomeTitles, FormContainer, CustomButton, Link } from "./tab-titles";
import LocationInput from "./input-location";
import store from "../../redux/store";
import { originSelected, packageChanged, dateChanged, timeChanged } from "../../redux/actions/booking";
import { useSelector } from "react-redux";
import { DatePicker, TimePicker } from "../form/date-picker";
import DropDown from "../form/dropdown";


const RentalForm = ({ contentView }) => {
  const origin = useSelector((state) => state["origin"]);
  const packageData = useSelector((state) => state["package"]);
  const date = useSelector((state) => state["date"]);
  const time = useSelector((state) => state["time"]);


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

            <FormGroup>
              <Icon src={require("../../assets/icons/user/clock.svg")} />
              <InputWrapper>
                <LabelText htmlFor="datepicker"> Package? </LabelText>
                <DropDown
                  value={packageData}
                  action={(val) => {
                    store.dispatch(packageChanged(val));
                    console.log(val);
                  }}
                  items={["Round Trip", "Single Trip"]}
                />
              </InputWrapper>
            </FormGroup>


          <InlineForm>
            <FormGroup>
              <Icon src={require("../../assets/icons/user/clock.svg")} />
              <InputWrapper>
                <LabelText htmlFor="datepicker"> When? </LabelText>
                <DatePicker
                  selectedDate={date}
                  action={(value) => {
                    store.dispatch(dateChanged(value));
                  }}
                  id="datepicker" placeholder="today" />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper>
                <LabelText htmlFor="datepicker"> Time? </LabelText>
                <TimePicker
                  selectedTime={time}
                  action={(value) => {
                    store.dispatch(timeChanged(value));
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
