import React from "react";
import styled from "styled-components";
import { Button } from "../../../../form/buttons/primary-button";
import { HeaderContainer, Title, SubTitle } from "../../../elements";
import DriverLicense from "./drivers-license";
import OwnershipCertificate from "./ownership-certificate";
import VehicleImage from "./vehicle-images";
import { CustomButton } from "../../../elements";

import PortraitPicture from "./portrait-picture";
import Modal from "../../../../modal/secondary";
import theme from "../../../../../theme/main";
import { useState } from "react";
import store from "../../../../../redux/store";
import {submitDriverForm} from "../../../../../redux/actions/driver";

const Container = styled("div")`
  padding-bottom: 30px;
`;
const BackButton = styled("img")`
  padding-bottom: 10px;
`;
const ModalTitle = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  width:410px;
`;
const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;

const FixedCustomButton = styled(CustomButton)`
  margin-bottom: 0px;
`;

const ModalContentContainer = styled("div")`
text-align:center;
`;

const InfoText = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding-top: 10px;
  padding-bottom: 20px;
`;

const FixedCustomButtonWithSpace = styled(FixedCustomButton)`
color:${theme.colors.primary};
border: 1px solid ${theme.colors.primary};
margin-right:30px;
background-color:${theme.colors.transparent};
}
`;

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
  return (
    <>
      <CustomHeaderContainer>
        <SubTitle>{activeSubStep + 1} / 4</SubTitle>
        <Title>{titles[activeSubStep].title}</Title>
        <SubTitle>{titles[activeSubStep].subtitle}</SubTitle>
      </CustomHeaderContainer>
      {titles[activeSubStep].page}

      {activeSubStep + 1 == 4 ? (
        <Button onClick={() => setshowConsent(true)}>Finish</Button>
      ) : (
        <Button onClick={handleNext}>Continue</Button>
      )}

      <Modal showCloseIcon={true} onClose={() => setshowConsent(false)} show={showConsent}>
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
          <FixedCustomButton onClick={()=>{
              setshowConsent(false);
              store.dispatch(submitDriverForm());
            }}>I agree</FixedCustomButton>
        </ModalContentContainer>
      </Modal>
    </>
  );
};

export default Documents;
