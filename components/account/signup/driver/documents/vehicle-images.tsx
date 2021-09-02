import React, { useState } from "react";
import FileSelector from "./file-selector";
import styled from "styled-components";
import { Progress } from "antd";
import Modal from "../../../../modal/secondary";
import store from "../../../../../redux/store";
import {
  addVehicleFrontPicture,
  deleteVehicleFrontPicture,
  addVehicleBackPicture,
  deleteVehicleBackPicture,
} from "../../../../../redux/actions/driver";
import Preview from "./preview";
import {
  BackButton,
  Container,
  CustomHeaderContainer,
  FixedCustomButton,
  FixedCustomButtonWithSpace,
  InfoText,
  ModalContentContainer,
  ModalTitle,
} from "./modal-content";
import { useSelector } from "react-redux";

const MainContainer = styled("div")`
  margin-top: 20px;
  margin-bottom: 60px;
`;

const FlexContainer = styled("div")`
  display: flex;
  gap: 40px;
`;

const Document = () => {
  const progress = useSelector((state) => state["driver"]["progress"]);
  const uploading = useSelector((state) => state["driver"]["uploading"]);
  const driverLicensePicture = useSelector(
    (state) => state["driver"]["driverLicensePicture"]
  );
  const vehicleFrontViewPicture = useSelector(
    (state) => state["driver"]["vehicleFrontViewPicture"]
  );
  const vehicleBackViewPicture = useSelector(
    (state) => state["driver"]["vehicleBackViewPicture"]
  );

  return (
    <>
      <FlexContainer>
        <MainContainer>
          {vehicleFrontViewPicture != null ? (
            <Preview
              image={vehicleFrontViewPicture}
              deleteAction={() => store.dispatch(deleteVehicleFrontPicture())}
            />
          ) : (
            <FileSelector
              action={(image) => {
                store.dispatch(addVehicleFrontPicture(image));
              }}
            />
          )}
        </MainContainer>
        <MainContainer>
          {vehicleBackViewPicture != null ? (
            <Preview
              image={vehicleBackViewPicture}
              deleteAction={() => store.dispatch(deleteVehicleBackPicture())}
            />
          ) : (
            <FileSelector
              action={(image) => {
                store.dispatch(addVehicleBackPicture(image));
              }}
            />
          )}
        </MainContainer>
      </FlexContainer>
      <Modal onClose={() => console.log("cancel")} show={uploading}>
        <Progress type="circle" percent={progress} />
      </Modal>
    </>
  );
};

export default Document;
