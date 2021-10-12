import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../theme/global/vehicle-selection";
import { useSelector } from "react-redux";
import { PrimaryLoading } from "../loading/loading";
import { selectVehicle } from "../../redux/actions/booking";
import { showMessage } from "../../redux/actions/navigation";
import theme from "../../theme/main";
import { getBrowserNotificationMessage } from "../../utils/checker";

import store from "../../redux/store";

const Container = styled("div")`
  padding: 15px;
`;

const NormalContainer = styled("div")`
  padding-left: 20px;
`;

const FlexContainer = styled("div")`
  display: flex;
  padding: 10px 20px;
`;

const CarFlexContainer = styled(FlexContainer)`
  width: 50%;
`;

const CustomFlexContainer = styled(FlexContainer)`
  padding: 0px 0px;
  padding: 5px 0px;
`;

const CardContainer = styled("a")`
  margin-bottom: 10px;
  background: ${theme.colors.white};
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;

const Text = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${theme.colors.primaryTextColor}; ;
`;

const PriceText = styled(Text)`
  margin: auto;
`;

const Title = styled(Text)`
  font-weight: bold;
  padding-bottom: 20px;
`;
const Message = styled(Text)`
  font-weight: bold;
  padding: 20px 0px;
  text-align: center;
`;

const Image = styled("img")`
  width: 60px;
  height: 50px;
`;
const ImageIcon = styled("img")``;

const VehicleList = () => {
  const loading = useSelector(
    (state) => state["booking"]["fetchVehiclesLoading"]
  );
  const availableVehiclesLoading = useSelector(
    (state) => state["booking"]["availableVehiclesLoading"]
  );
  const vehicleList = useSelector((state) => state["booking"]["vehicles"]);
  const isValid = useSelector((state) => state["booking"]["isValid"]);
  const currency = useSelector((state) => state["booking"]["currency"]);
  const [isSelected, setSelected] = useState(0);

  function selectVehicleOption(vehicle) {
    if (Notification.permission === "granted") {
      store.dispatch(selectVehicle(vehicle));
    } else {
      let browseNotificationMessage = getBrowserNotificationMessage();
      store.dispatch(showMessage(true, browseNotificationMessage, "warning"));
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          store.dispatch(selectVehicle(vehicle));
        } else {
          showMessage(true, "Unable to get permission to notify.", "error");
          console.log("Unable to get permission to notify.");
        }
      });
    }
  }

  return (
    <>
      {availableVehiclesLoading ? <PrimaryLoading /> : null}
      {loading ? (
        <PrimaryLoading />
      ) : vehicleList.length <= 0 ? (
        <Message>No Vehicles</Message>
      ) : (
        <Container>
          <Title>Select Vehicle</Title>

          {vehicleList.map((vehicle, index) => (
            <CardContainer
              onClick={() => {
                selectVehicleOption(vehicle);
              }}
              className={isValid ? "" : "disabled"}
              onMouseOver={() => {
                setSelected(index);
              }}
              id={isSelected == index ? "vehicleSelected" : null}
              key={vehicle?.name}
            >
              <style jsx global>
                {styles}
              </style>
              <CarFlexContainer>
                <Image src={vehicle?.images.ride_now_normal} />
                <NormalContainer>
                  <Text>{vehicle?.region_name}</Text>
                  <CustomFlexContainer>
                    <ImageIcon src={require("../../assets/icons/avatar.svg")} />
                    <Text>{vehicle?.max_people}</Text>
                  </CustomFlexContainer>
                </NormalContainer>
              </CarFlexContainer>

              <FlexContainer>
                <PriceText>{vehicle?.display_base_fare}</PriceText>
              </FlexContainer>
              <FlexContainer>
                <ImageIcon
                  src={require("../../assets/icons/right-arrow.svg")}
                />
              </FlexContainer>
            </CardContainer>
          ))}
        </Container>
      )}
    </>
  );
};

export default VehicleList;
