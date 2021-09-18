import React from "react";
import styled from "styled-components";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { goTo } from "../../../redux/actions/navigation";
import theme from "../../../theme/main";
import { Loader } from "../../loading/loading";

const Title = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;
const Text = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding-top: 5px;
  line-height: 16px;
  color: ${theme.colors.secondaryTextColor};
`;
const Container = styled("div")`
  display: flex;
  padding: 10px 20px;
  gap: 40px;
  align-items: center;
`;

const HorizontalFlex = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
const VerticalFlex = styled("div")`
  display: flex;
  flex-direction: column;
`;

const BackButton = styled("img")`
  height: 30px;
`;
const Image = styled("img")`
  height: 40px;
  width: 50px;
`;
const Note = () => {
  const data = {
    type: "Family",
    car: require("../../../assets/images/cars/car_mini.svg"),
    distance: "6 Min away",
    cost: "178 Birr",
  };
  const vehicle = useSelector((state) => state["booking"]["vehicle"]);
  const estimation = useSelector((state) => state["booking"]["estimation"]);
  const loading = useSelector(
    (state) => state["booking"]["fareEstimateLoading"]
  );

  return (
    <>
      <Container>
        <BackButton
          onClick={() => store.dispatch(goTo(""))}
          src={require("../../../assets/icons/back-arrow.svg")}
        />

        <HorizontalFlex>
          <Image src={vehicle.images.ride_now_normal_3x} />
          <VerticalFlex>
            <Title>{vehicle.region_name}</Title>
            {loading ? (
              <Loader />
            ) : (
              <HorizontalFlex>
                <Text>
                  {estimation
                    ? `${estimation.ride_distance} ${estimation.ride_distance_unit}`
                    : ""}
                </Text>
                <Text>
                  {vehicle.display_base_fare}
                </Text>
                
                {/* <Text>
                  {estimation
                    ? estimation.fare?`~ ${estimation.fare} ${estimation.currency}`:"Fare Unknown"
                    : ""}{" "}
                </Text> */}
              </HorizontalFlex>
            )}
          </VerticalFlex>
        </HorizontalFlex>
      </Container>
    </>
  );
};

export default Note;
