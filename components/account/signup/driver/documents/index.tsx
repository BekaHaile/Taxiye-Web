import React from "react";
import styled from "styled-components";
import { Button } from "../../../../form/buttons/primary-button";
import { Title, SubTitle } from "../../../elements";
import DriverLicense from "./drivers-license";
import OwnershipCertificate from "./ownership-certificate";
import VehicleImage from "./vehicle-images";
import PortraitPicture from "./portrait-picture";
import Modal from "../../../../modal/secondary";
import { useState } from "react";
import store from "../../../../../redux/store";
import {
  submitDriverForm,
  uploadPortraitPicture,
  uploadDriverLicensePicture,
  uploadOwnershipCertificatePicture,
  uploadVehiclePictures
} from "../../../../../redux/actions/driver";
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

const titles = [
  {
    title: "Upload Portrait Picture",
    subtitle:
      "Please upload a portrait picture of yourself. Make sure it is clear and visible.",
    page: <PortraitPicture />,
  },
  {
    title: "Upload Driver’s License",
    subtitle:
      "Please upload your renewed driver’s license. Make sure it is clear and visible.",
    page: <DriverLicense />,
  },
  {
    title: "Upload Vehicle Images",
    subtitle:
      "Please upload your vehicle image taken from the front and the side. Make sure the license plate is clear and visible on the front view.",
    page: <VehicleImage />,
  },
  {
    title: "Upload Logbook (Certificate of Ownership)",
    subtitle:
      "Please upload an image of the page with your name and picture from the logbook. Make sure it is clear and visible.",
    page: <OwnershipCertificate />,
  },
];

const Documents = ({ handleNext, activeSubStep }) => {
  const [showConsent, setshowConsent] = useState(false);
  const portraitPicture = useSelector(
    (state) => state["driver"]["portraitPicture"]
  );
  const driverLicensePicture = useSelector(
    (state) => state["driver"]["driverLicensePicture"]
  );
  const vehicleFrontViewPicture = useSelector(
    (state) => state["driver"]["vehicleFrontViewPicture"]
  );
  const vehicleBackViewPicture = useSelector(
    (state) => state["driver"]["vehicleBackViewPicture"]
  );
  const ownershipCertificatePicture = useSelector(
    (state) => state["driver"]["ownershipCertificatePicture"]
  );

  return (
    <>
      <CustomHeaderContainer>
        <SubTitle>{activeSubStep + 1} / 4</SubTitle>
        <Title>{titles[activeSubStep].title}</Title>
        <SubTitle>{titles[activeSubStep].subtitle}</SubTitle>
      </CustomHeaderContainer>
      {titles[activeSubStep].page}

      {(() => {
        if (activeSubStep + 1 == 4)
          return (
            <Button
              disabled={ownershipCertificatePicture == null}
              onClick={() =>
                store.dispatch(uploadOwnershipCertificatePicture())
              }
            >
              Finish
            </Button>
          );
        else if (activeSubStep == 0)
          return (
            <Button
              disabled={portraitPicture == null}
              onClick={() => store.dispatch(uploadPortraitPicture())}
            >
              Continue
            </Button>
          );
        else if (activeSubStep == 1)
          return (
            <Button
              disabled={driverLicensePicture == null}
              onClick={() => store.dispatch(uploadDriverLicensePicture())}
            >
              Continue
            </Button>
          );
        else if (activeSubStep == 2)
          return (
            <Button
              disabled={
                vehicleFrontViewPicture == null ||
                vehicleBackViewPicture == null
              }
              onClick={() => store.dispatch(uploadVehiclePictures())}
            >
              Continue
            </Button>
          );
      })()}

      <Modal
        showCloseIcon={true}
        onClose={() => setshowConsent(false)}
        show={showConsent}
      >
        <Container>
          <ModalTitle>
            I accept that documents uploaded by me are true and correct. I
            understand that any attempt of providing incorrect, misleading
            information or fake documents will lead to my immediate black
            listing from the Taxiye platform. Taxiye platform reserves the right
            to take the matter to the law enforcement authorities in case of
            forged documents.
          </ModalTitle>
        </Container>
        <ModalContentContainer>
          <FixedCustomButtonWithSpace onClick={() => setshowConsent(false)}>
            Cancel
          </FixedCustomButtonWithSpace>
          <FixedCustomButton
            onClick={() => {
              setshowConsent(false);
              store.dispatch(submitDriverForm());
            }}
          >
            I agree
          </FixedCustomButton>
        </ModalContentContainer>
      </Modal>
    </>
  );
};

export default Documents;
