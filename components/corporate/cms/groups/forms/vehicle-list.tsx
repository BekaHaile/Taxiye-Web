import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import styles from "../../../../../theme/global/slider";
import Slider from "../../../../slider";
import theme from "../../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import {
  selectVehicle,
  removeVehicle,
} from "../../../../../redux/actions/corporate/group";

const Card = styled("div")`
  min-width: 80px;
  height: 90px;
  border: 1px solid ${theme.colors.primaryTextColor};
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: center;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-bottom:15px;
  margin-right:15px;
`;

const CenteredElement = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled("div")`
  display: flex;
  gap: 20px;
  overflow-x:scroll;
  max-width:100%;
`;

const Image = styled("img")`
  width: 58px;
  height: 20px;
`;

const Title = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: ${theme.colors.primaryTextColor}; ;
`;

const VehicleList = () => {
  const [selectedCar, setSelectedCar] = useState(0);
  const selected_vehicle = useSelector(
    (state) => state["corporate_group"]["selected_vehicle"]
  );

  const vehicleList = useSelector(
    (state) => state["corporate"]["corporate_detail"]["supported_vehicles"]
  );

  const handleChange = (data) => {
    store.dispatch(selectVehicle(data?.vehicle_type));
  };
  const check = (data, veh) => {
    return data?.vehicle_type === parseInt(veh) ;
  };

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        return i;
      }
    }

    return -1;
  }

  return (
    <>
      <Container>
        {vehicleList.map((vehicle, index) => (
          <Card
            key={index}
            onClick={() => handleChange(vehicle)}
            className={check(vehicle, selected_vehicle) ? "activecard" : ""}
          >
            <style jsx global>
              {styles}
            </style>
            <CenteredElement>
              <Image src={require("../../../../../assets/images/cars/sedan.svg")} />
              <Title>
                {vehicle?.vehicle_name}
              </Title>
            </CenteredElement>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default VehicleList;
