import React from "react";
import {
  LabelText,
  Form,
  InlineForm,
  InputWrapper,
  FormGroup,
  Icon,
} from "./inputs";
import {
  Title,
  SubTitle,
  HomeTitles,
  FormContainer,
  CustomButton,
  Link,
} from "./tab-titles";
import LocationInput from "./input-location";
import store from "../../redux/store";
import {
  selectOrigin,
  changePackage,
  changeDate,
  changeTime,
} from "../../redux/actions/booking";
import { useSelector } from "react-redux";
import { DatePicker, TimePicker } from "../form/date-picker";
import DropDown from "../form/dropdown";
import { Loader } from "../loading/loading";

const RentalForm = ({ contentView }) => {
  const origin = useSelector((state) => state["booking"]["origin"]);
  const packageData = useSelector((state) => state["booking"]["package"]);
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
          <Title>Take Taxiye with you.</Title>
          <SubTitle>For local city trips</SubTitle>
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

          <FormGroup>
            <Icon src={require("../../assets/icons/user/clock.svg")} />
            <InputWrapper>
              <LabelText htmlFor="datepicker"> Package? </LabelText>
              <DropDown
                value={packageData}
                action={(val) => {
                  store.dispatch(changePackage(val));
                }}
                items={["Round Trip", "One Way"]}
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

export default RentalForm;
