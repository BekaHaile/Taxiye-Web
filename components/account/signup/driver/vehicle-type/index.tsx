import React from "react";
import styled from "styled-components";
import { Button } from "../../../../form/buttons/primary-button";
import {
  ContentContainer,
  HeaderContainer,
  Title,
  SubTitle,
  InputContainer,
} from "../../../elements";
import { useSelector } from "react-redux";

import { cityChanged } from "../../../../../redux/actions/driver";

import store from "../../../../../redux/store";
import { Form, Select } from "antd";

const { Option } = Select;

import SliderContainer from "./slider-container";

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;

const Signup = ({ handleNext, handleBack }) => {
  const selectedCar = useSelector((state) => state["driver"]["vehicleType"]);
  const city = useSelector((state) => state["driver"]["city"]);
  const cities = useSelector(
    (state) => state["driver"]["signup_detail"]["cities"]
  );

  return (
    <>
      <CustomHeaderContainer>
        <Title>Select your vehicle type</Title>
        <SubTitle>
          Please select the type of vehicle you want to register with.
        </SubTitle>
      </CustomHeaderContainer>
      <ContentContainer>
        
        <InputContainer style={{marginBottom:'40px'}}>
        <Form.Item
            label="Please select city *"
            hasFeedback
            validateStatus={city?.city_name ? "" : "error"}
          >
          <Select
            value={city?.city_name}
            onChange={(val) => {
              store.dispatch(cityChanged(cities.find((c)=> c.city_id===val)));
            }}
          >
            <Option disabled key={-1} value={-1}>
              Select city
            </Option>
            {cities.map((city, index) => (
              <Option key={index} value={city.city_id}>
                {city.city_name}
              </Option>
            ))}
          </Select>
          </Form.Item>
        </InputContainer>
        <SliderContainer />
        <Button disabled={selectedCar === null || city === null} onClick={handleNext}>
          Continue
        </Button>
      </ContentContainer>
    </>
  );
};

export default Signup;
