import React from "react";
import { GraySection, SectionTitle, CenteredText,SectionHeaderContainer,SectionContentContainer  } from "../../section";
import styled from "styled-components";
import { Card, CardWrapper, CardContent, CardTitle, Image } from "./card";

const Container = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-between;
max-width:1160px;

`;
const CardContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;

`;


const PartnersContent = ({title, subTitle, description, contents}) => {
    return (
        <>
            <GraySection>
                <SectionHeaderContainer>
                <SectionTitle>
                    {title}
                </SectionTitle>
                <CenteredText>
                    {subTitle}
                </CenteredText>
                </SectionHeaderContainer>
                <SectionContentContainer>
                <Container>
                    <CardWrapper>

                        <CardTitle>{description}</CardTitle>


                    </CardWrapper>
                    <CardContainer>
                        {contents.map((content, index) => (
                            <CardWrapper key={index}>
                                <Card>
                                    <Image src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`} />
                                    <CardContent>{content.description}</CardContent>
                                </Card>

                            </CardWrapper>
                        ))}
                    </CardContainer>
                </Container>
                </SectionContentContainer>
            </GraySection>
        </>
    );
}

export default PartnersContent;