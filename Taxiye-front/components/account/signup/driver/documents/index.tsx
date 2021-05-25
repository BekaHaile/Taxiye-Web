import React from "react";
import styled from "styled-components";
import { Button } from "../../../../form/buttons/primary-button";
import { HeaderContainer, Title, SubTitle } from "../../../elements";
import DriverLicense from "./drivers-license";
import OwnershipCertificate from "./ownership-certificate";
import VehicleImage from "./vehicle-images";
import PortraitPicture from "./portrait-picture";
const BackButton = styled("img")`
padding-bottom:10px;
`;

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;

const titles = [{
    title: "Upload Portrait Picture",
    subtitle: "Please upload a portrait picture of yourself. Make sure it is clear and visible.",
    page: <PortraitPicture />
},
{
    title: "Upload Driver’s License",
    subtitle: "Please upload your renewed driver’s license. Make sure it is clear and visible.",
    page: <DriverLicense />
},
{
    title: "Upload Vehicle Images",
    subtitle: "Please upload your vehicle image taken from the front and the side. Make sure the license plate is clear and visible on the front view.",
    page: <VehicleImage />
},
{
    title: "Upload Logbook (Certificate of Ownership)",
    subtitle: "Please upload an image of the page with your name and picture from the logbook. Make sure it is clear and visible.",
    page: <OwnershipCertificate />
}


];

const Documents = ({ handleNext, activeSubStep }) => {
    return (
        <>

            <CustomHeaderContainer>
                <SubTitle>{activeSubStep + 1} / 4</SubTitle>
                <Title>{titles[activeSubStep].title}</Title>
                <SubTitle>{titles[activeSubStep].subtitle}</SubTitle>

            </CustomHeaderContainer>
            {titles[activeSubStep].page}
            <Button onClick={handleNext}>
                {activeSubStep + 1 == 4 ? "Finish" : "Continue"}
            </Button>
        </>
    );
}



export default Documents;
