import React from 'react';
import styled from "styled-components";
import { SecondarySection, SectionTitle, CenteredText,SectionHeaderContainer  } from "../../section";
import { Button } from "../../form/buttons/primary-button";
import MapViewer from "./map";
import Infos from "./info";

const mapinfo = {
    id: "2",
    header: "Taxiye Addis Ababa",
    content: [{
        title: "Open Hours",
        details: [
            "Monday - Friday",
            "8 am - 5 pm",
            "Saturday",
            "8 am - 12 pm"
        ],
    },
    {
        title: "Contact Support",
        details: [
            "info@elnetech.com",
            "6055 - Free call 24/7"
        ],
    }
    ]

};
const MapInfoContainer = styled("div")`
    text-align: center;
    justify-content:center;
    position:absolute;
    right:0px;
    top:0px;
    margin:auto;
    background-color:#fff;
    width:400px;
    height: -webkit-fill-available;
`;

const SectionTitleOnStart = styled(SectionTitle)`
    text-align: start;
    width: 100%;
`;

const CenteredTextOnStart = styled(CenteredText)`
    text-align: start;
    width: 100%;
    max-width: inherit;
`;

const FullSectionHeaderContainer = styled(SectionHeaderContainer)`
width: 100%;
    
`;
const MapContainer = styled("div")`
position:relative;
    
`;

const CustomButton = styled(Button)`
margin-top:20px;
    
`;

const MapView = ({offices, title, subTitle, socialMedias}) => {
    return (
        <>
            <SecondarySection>
                <FullSectionHeaderContainer>
                    <SectionTitleOnStart> {title} </SectionTitleOnStart>
                    <CenteredTextOnStart> {subTitle} </CenteredTextOnStart>
                </FullSectionHeaderContainer>
            </SecondarySection>
            <MapContainer>
            <MapViewer />
            <MapInfoContainer>
                <Infos socialMedias={socialMedias} info={offices[0]} />

                <CustomButton>Get directions</CustomButton>

            </MapInfoContainer>
            </MapContainer>

        </>
    );
}

export default MapView;