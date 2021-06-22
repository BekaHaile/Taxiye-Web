import React from 'react';
import styled from "styled-components";
import { Inputs, FormGroup, Icon, InputWrapper, LabelText, InlineForm, InputSeparator, Button } from "../../tab-forms/inputs";
import DropDown from "../../form/dropdown";
import store from "../../../redux/store";
import { changeJourneyType, changeJourneyDate, changeJourneyTime } from "../../../redux/actions/booking";
import { useSelector } from "react-redux";
import {TimePicker, DatePicker} from "../../form/date-picker/index";

const ChildrenContainer = styled("div")`
border-bottom: 5px solid #EFF2F5;
padding:5px 20px;
`;

const Journey = () => {

  const journeyType = useSelector((state) => state["booking"]["journey"].type);
  const date = useSelector((state) => state["booking"]["journey"].returndate);
  const time = useSelector((state) => state["booking"]["journey"].returnTime);
  return (
    <>
      <ChildrenContainer>

        <FormGroup>
          <Icon src={require("../../../assets/icons/journey.svg")} />
          <InputWrapper>
            <LabelText htmlFor="datepicker"> Journey? </LabelText>
            <DropDown
              value={journeyType}
              action={(val) => {
                store.dispatch(changeJourneyType(val));
              }}
              items={["Round Trip", "One Way"]}
            />
          </InputWrapper>
        </FormGroup>
        {
          journeyType === "Round Trip" && <InlineForm>
            <FormGroup>
              <Icon src={require("../../../assets/icons/user/clock.svg")} />
              <InputWrapper>
                <LabelText htmlFor="datepicker"> When? </LabelText>
                <DatePicker
                  selectedDate={date}
                  action={(value) => {
                    store.dispatch(changeJourneyDate(value));
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
                    store.dispatch(changeJourneyTime(value));
                  }}
                  id="datepicker"
                  placeholder="06:54" />
              </InputWrapper>
            </FormGroup>
          </InlineForm>
        }

      </ChildrenContainer>

    </>
  );
}

export default Journey;