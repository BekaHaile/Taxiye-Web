import React from "react";
import { GraySection,SectionContentContainer } from "../../section";
import Cards from "./card";
import styled from "styled-components";


const CardContainer =  styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
`;

const CustomSectionContentContainer =  styled(SectionContentContainer)`
padding:0px;
`;

const VisionContent = ({contents}) => {
    return (
        <>
            <GraySection>
            <CustomSectionContentContainer>
                <CardContainer>

                    <Cards contents={contents}/>

               
                </CardContainer>
                </CustomSectionContentContainer>

            </GraySection>
        </>
    );
}

export default VisionContent;