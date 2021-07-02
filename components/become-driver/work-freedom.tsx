import React from "react";
import { DefaultSection, SectionTitle, CenteredText ,SectionHeaderContainer, SectionContentContainer } from "../section";
import VisionCard from "./card";
import styled from "styled-components";

const CardContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap:wrap;
`;



const VisionContent = ({title, subTitle, contents}) => {
    return (
        <>
            <DefaultSection>
            <SectionHeaderContainer>
                <SectionTitle>
                    {title}
                </SectionTitle>
                <CenteredText>
                    {subTitle}
                </CenteredText>
                </SectionHeaderContainer>
                <SectionContentContainer>
                <CardContainer>
                    {contents.map((content) => (

                        <VisionCard key={content.id} content={content} />

                    ))}
                </CardContainer>
                </SectionContentContainer>
            </DefaultSection>
        </>
    );
}

export default VisionContent;