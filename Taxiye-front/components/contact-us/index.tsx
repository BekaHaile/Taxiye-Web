import React from 'react';
import styled from "styled-components";
import ContactUsForm from "./form";
import Infos from "./info";
import { SecondarySection, DefaultSection, SectionTitle, CenteredText } from "../section";
import { Button } from "../form/inputs";
import MapViewer from "./map";
import Socials from "./socials";

const FormContainer = styled("div")`
    display: grid;
    grid-template-columns: 40% 60%;
    width:100%;
`;
const MapContainer = styled("div")`
    display: grid;
    grid-template-columns: 60% 40%;
    width:100%;
    margin: 30px 0px;
`;
const MapInfoContainer = styled("div")`
    text-align: center;
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

const info = {
    id: "1",
    header: "Let's talk...",
    headersubTitle: "Ask us anything or just say hi...",
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

const mapinfo = {
    id: "2",
    secondaryheader: "Taxiye Addis Ababa",
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


const ContactUSContent = () => {
    return (
        <>
            <SecondarySection>
                <FormContainer>
                    <div>
                        <Infos key={info.id} info={info} />
                        <Socials />
                    </div>
                    <ContactUsForm></ContactUsForm>
                </FormContainer>
            </SecondarySection>
            <SecondarySection>

                <SectionTitleOnStart> Our Offices </SectionTitleOnStart>
                <CenteredTextOnStart> Our doors are open to all. Come and visit us! </CenteredTextOnStart>
                </SecondarySection>
                <MapContainer>
                    <MapViewer />
                    <MapInfoContainer>
                        <Infos key={mapinfo.id} info={mapinfo} />
                        <Button>Get directions</Button>
                    </MapInfoContainer>

                </MapContainer>
        </>
    );
}

export default ContactUSContent;