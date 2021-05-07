import React from "react";
import { DefaultSection, SectionTitle, CenteredText } from "../section";
import VisionCard from "./card";
import styled from "styled-components";

const CardContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
`;

const contents = [{
    id: "1",
    img: require("../../assets/icons/schedule.svg"),
    title: "Greater Contro",
    content: 'Set your own trip terms, create cost centers, and control budget allocation.'
},
{
    id: "2",
    img: require("../../assets/icons/rate.svg"),
    title: "Greater Contro",
    content: 'Set your own trip terms, create cost centers, and control budget allocation.'
},
{
    id: "3",
    img: require("../../assets/icons/down-time.svg"),
    title: "Greater Contro",
    content: 'Set your own trip terms, create cost centers, and control budget allocation.'
}
];

const VisionContent = () => {
    return (
        <>
            <DefaultSection>
                <SectionTitle>
                    Our Team
                </SectionTitle>
                <CenteredText>
                    Our company is ran by the best and brightest team in the industy.
                </CenteredText>
                <CardContainer>
                    {contents.map((content) => (

                        <VisionCard key={content.id} content={content} />

                    ))}
                </CardContainer>

            </DefaultSection>
        </>
    );
}

export default VisionContent;