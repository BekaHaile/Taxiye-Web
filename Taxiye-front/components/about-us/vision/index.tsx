import React from "react";
import { DefaultSection } from "../../section";
import VisionCard from "./card";
import styled from "styled-components";
import {VisionImage, MissionImage, ValueImage} from "./images";

const CardContainer =  styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
`;

const contents = [{
    id: "1",
    img: <VisionImage/>,
    title: "Greater Contro",
    content: 'Set your own trip terms, create cost centers, and control budget allocation.'
},
{
    id: "2",
    img: <MissionImage/>,
    title: "Greater Contro",
    content: 'Set your own trip terms, create cost centers, and control budget allocation.'
},
{
    id: "3",
    img: <ValueImage/>,
    title: "Greater Contro",
    content: 'Set your own trip terms, create cost centers, and control budget allocation.'
}
];

const VisionContent = () => {
    return (
        <>
            <DefaultSection>
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