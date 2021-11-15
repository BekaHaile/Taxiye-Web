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
  selectDestination,
  changeDate,
  changeTime,
} from "../../redux/actions/booking";
import { useSelector } from "react-redux";
import { DatePicker, TimePicker } from "../form/date-picker";
import { useRouter } from "next/router";
import { Loader } from "../loading/loading";

const BookForm = ({ contentView, formData }) => {
  const origin = useSelector((state) => state["booking"]["origin"]);
  const destination = useSelector((state) => state["booking"]["destination"]);
  const date = useSelector((state) => state["booking"]["date"]);
  const time = useSelector((state) => state["booking"]["time"]);
  const router = useRouter();
  const loading = useSelector(
    (state) => state["booking"]["fetchVehiclesLoading"]
  );
  const isValid = useSelector((state) => state["booking"]["isValid"]);

  return (
    <>
      {contentView ? null : (
        <HomeTitles>
          <Title>{formData?.title}</Title>
          <SubTitle>{formData?.subTitle}</SubTitle>
        </HomeTitles>
      )}
      <Form>
        <FormContainer>
          <LocationInput
            label={formData?.originLocationTextField?.label}
            icon={formData?.originLocationTextField?.icon?.url ?? require("../../assets/icons/location.svg")}
            placeholder={formData?.originLocationTextField?.placeHolder}
            id={formData?.key}
            action={(location, address) => {
              store.dispatch(selectOrigin({ origin: { location, address } }));
            }}
            address={origin.address}
          />

          <LocationInput
            label={formData?.destinationLocationTextField?.label}
            icon={formData?.destinationLocationTextField?.icon?.url ?? require("../../assets/icons/flag.svg")}
            placeholder={formData?.destinationLocationTextField?.placeHolder}
            id={formData?.key}
            action={(location, address) => {
              store.dispatch(
                selectDestination({ destination: { location, address } })
              );
            }}
            address={destination.address}
          />

          <InlineForm>
            <FormGroup>
              <Icon src={formData?.departureDateTextField?.icon?.url ?? require("../../assets/icons/user/clock.svg")} />
              <InputWrapper>
                <LabelText htmlFor={formData?.key}> {formData?.departureDateTextField?.label} </LabelText>
                <DatePicker
                  selectedDate={date}
                  action={(value) => {
                    store.dispatch(changeDate(value));
                  }}
                  id={formData?.key}
                  placeholder={formData?.departureDateTextField?.placeHolder}
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <Icon
                className="mobile-view"
                src={formData?.departureTimeTextField?.icon?.url ?? require("../../assets/icons/user/clock.svg")}
              />
              <InputWrapper>
                <LabelText htmlFor={formData?.key}> {formData?.departureTimeTextField?.label} </LabelText>
                <TimePicker
                  selectedTime={time}
                  action={(value) => {
                    store.dispatch(changeTime(value));
                  }}
                  id={formData?.key}
                  placeholder={formData?.departureTimeTextField?.placeHolder}
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
              <CustomButton disabled={!isValid}>{formData?.requestButton?.text}</CustomButton>
            )}
          </Link>
        )}
      </Form>
    </>
  );
};

export default BookForm;
