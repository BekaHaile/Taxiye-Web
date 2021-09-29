import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import styles from "../../../../../theme/global/slider";
import Slider from "../../../../slider/";
import theme from "../../../../../theme/main";
import store from "../../../../../redux/store";
import { changeVehicle } from "../../../../../redux/actions/driver";
import { useSelector } from "react-redux";

const Card = styled("div")`
  width: 152px;
  height: 160px;
  border: 1px solid ${theme.colors.primaryTextColor};
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: center;
  position: relative;
  text-align: center;
  cursor: pointer;
`;

const CenteredElement = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled("img")``;

const Title = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.colors.primaryTextColor}; ;
`;

const settings = {
  itemsToShow: 3,
  itemPadding: [25, 0],
  transitionMs: 700,
};

const SliderContainer = () => {
  const selectedCar = useSelector((state) => state["driver"]["vehicleType"]);
  const vehicles = useSelector((state) => state["driver"]["vehicles"]);
  return (
    <>
      <Slider
        settings={settings}
        content={vehicles.map((vehicle, index) => (
          <Card
            key={index}
            onClick={() => store.dispatch(changeVehicle(vehicle))}
            className={vehicle == selectedCar ? "activecard" : ""}
          >
            <style jsx global>
              {styles}
            </style>
            <CenteredElement>
              <Image src={require("../../../../../assets/images/cars/sedan.svg")} />
              <Title>{vehicle.vehicle_name}</Title>
            </CenteredElement>
          </Card>
        ))}
      />
    </>
  );
};

export default SliderContainer;
