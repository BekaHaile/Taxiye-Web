import React from "react";
import {
  Title,
  SubTitle,
  HomeTitles,
  FormContainer,
  CustomButton,
  Link,
} from "./tab-titles";
import {
  LabelText,
  Form,
  InlineForm,
  InputWrapper,
  FormGroup,
  Icon,
} from "./inputs";
import LocationInput from "./input-location";
import store from "../../redux/store";
import {
  selectOrigin,
  selectDestination,
  changeDate,
  changeTime,
} from "../../redux/actions/booking";
import { useSelector } from "react-redux";
import { DatePicker, TimePicker } from "../form/date-picker";
import { Loader } from "../loading/loading";

const DeliveryForm = ({ contentView }) => {
  const origin = useSelector((state) => state["booking"]["origin"]);
  const destination = useSelector((state) => state["booking"]["destination"]);
  const date = useSelector((state) => state["booking"]["date"]);
  const time = useSelector((state) => state["booking"]["time"]);
  const loading = useSelector(
    (state) => state["booking"]["fetchVehiclesLoading"]
  );
  const isValid = useSelector((state) => state["booking"]["isValid"]);

  return (
    <>
      {contentView ? null : (
        <HomeTitles>
          <Title>Right on your door step</Title>
          <SubTitle>When you need something delivered</SubTitle>
        </HomeTitles>
      )}
      <Form>
        <FormContainer>
          <LocationInput
            label="From?"
            icon={require("../../assets/icons/location.svg")}
            placeholder="Enter pickup location"
            id="location"
            action={(location, address) => {
              store.dispatch(selectOrigin({ origin: { location, address } }));
            }}
            address={origin.address}
          />

          <LocationInput
            label="Where to?"
            icon={require("../../assets/icons/flag.svg")}
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
              <Icon src={require("../../assets/icons/user/clock.svg")} />
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

        {contentView ? (
          contentView
        ) : (
          <Link href="/booking">
            {loading ? (
              <CustomButton disabled={true}>
                <Loader />
              </CustomButton>
            ) : (
              <CustomButton disabled={!isValid}>Request Now</CustomButton>
            )}
          </Link>
        )}
      </Form>
    </>
  );
};

export default DeliveryForm;
