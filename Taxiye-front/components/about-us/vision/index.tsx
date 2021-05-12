import React from "react";
import { GraySection,SectionContentContainer } from "../../section";
import VisionCard from "./card";
import styled from "styled-components";


const CardContainer =  styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
`;

const CustomSectionContentContainer =  styled(SectionContentContainer)`
padding:0px;
`;

const VisionContent = () => {
    return (
        <>
            <GraySection>
            <CustomSectionContentContainer>
                <CardContainer>

                    <VisionCard />

               
                </CardContainer>
                </CustomSectionContentContainer>

            </GraySection>
        </>
    );
}

export default VisionContent;