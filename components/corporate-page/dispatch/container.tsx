import React from "react";
import styled from "styled-components";
import Booking from "./book";
import { CustomButton } from "../../tab-forms/tab-titles";
import { useSelector } from "react-redux";
import { Loader } from "../../loading/loading";

const ContainerWrapper = styled("div")`
  position: absolute;
  background: #ffffff;
  top: 0px;
  margin: 20px;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainContainer = styled("div")`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  max-width: 490px;
`;

const Container = () => {
  const isValid = useSelector((state) => state["corporate_employees"]["isValid"]);
  const loading = useSelector((state) => state["corporate_employees"]["loading"]);
  return (
    <>
      <ContainerWrapper>
        <MainContainer>
          <Booking />
        </MainContainer>
        {loading ? (
          <CustomButton disabled={true}>
            <Loader />
          </CustomButton>
        ) : (
          <CustomButton disabled={!isValid}>Book Ride</CustomButton>
        )}
      </ContainerWrapper>
    </>
  );
};

export default Container;
