import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../../theme/global/vehicle-selection";
import { useSelector } from "react-redux";
import { PrimaryLoading } from "../../loading/loading";
import { selectVehicle } from "../../../redux/actions/booking";

import store from "../../../redux/store";
const Container = styled("div")`
  padding: 15px;
`;

const NormalContainer = styled("div")`
  text-align: center;
`;

const FlexContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const CarWraperContainer = styled(FlexContainer)`
  flex-direction: column;
`;

const CarFlexContainer = styled(FlexContainer)`
  gap: 20px;
`;

const CardView = styled("div")`
  gap: 10px;
  display:flex;
  flex-direction:column;
`;



const CardContainer = styled("div")`
  background: #ffffff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;
  display: flex;
  cursor: pointer;
  padding: 20px 20px;
`;

const Text = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #444444;
  text-overflow: ellipsis;
`;

const PriceText = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
  padding-top: 5px;
`;

const Title = styled(Text)`
  font-weight: bold;
  padding-bottom: 20px;
`;

const Image = styled("img")``;

const Message = styled(Text)`
  font-weight: bold;
  padding: 20px 0px;
  text-align: center;
`;

const VehicleList = () => {
  const loading = useSelector(
    (state) => state["booking"]["fetchVehiclesLoading"]
  );
  const vehicleList = useSelector((state) => state["booking"]["vehicles"]);
  const isValid = useSelector((state) => state["booking"]["isValid"]);
  const [isSelected, setSelected] = useState(0);

  return (
    <>
      {loading ? (
        <PrimaryLoading />
      ) : vehicleList.length <= 0 ? (
        <Message>No Vehicles</Message>
      ) : (
        <Container>
          <Title>Select delivery type</Title>
          <CardView>
            {vehicleList.map((vehicle, index) => (
              <CardContainer
                onClick={() => {
                  store.dispatch(selectVehicle(vehicle));
                }}
                className={isValid ? "" : "disabled"}
                onMouseOver={() => {
                  setSelected(index);
                }}
                id={isSelected == index ? "vehicleSelected" : null}
                key={vehicle.name}
              >
                <style jsx global>
                  {styles}
                </style>
                <CarFlexContainer>
                  <Image
                    src={require("../../../assets/images/cars/vehicles/economy.svg")}
                  />

                  <Text>{vehicle.region_name}</Text>
                </CarFlexContainer>

                <FlexContainer>
                  <PriceText>122 Birr</PriceText>
                </FlexContainer>
                <FlexContainer>
                  <Image
                    src={require("../../../assets/icons/right-arrow.svg")}
                  />
                </FlexContainer>
              </CardContainer>
            ))}
          </CardView>
        </Container>
      )}
    </>
  );
};

export default VehicleList;
