import React from "react";
import { DefaultSection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer } from "../../section";
import styled from "styled-components";
import DeviceImage from "./image";
import { ContentWrapper, Numbering, Text, Block, RightText, BlockTitle, RightBlockTitle, Container } from './content';


const ServiceContent = ({ title, subTitle, mainImage, contents }) => {
    let counter = contents.length / 2 + 1;
    let leftSide = contents.slice(0, contents.length / 2);
    let rightSide = contents.slice(contents.length / 2);

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
                    <ContentWrapper>
                        <div>
                            {leftSide.map((content, index) => (
                                <Block>
                                    <Container>
                                        <RightBlockTitle>{content.title}</RightBlockTitle>
                                        <RightText>
                                            {content.description}
                                        </RightText>
                                    </Container>
                                    <Numbering>{("0" + (index + 1)).slice(-2)}</Numbering>

                                </Block>
                            ))}
                        </div>
                        <DeviceImage url={mainImage.url} />
                        <div>

                            {rightSide.map((content, index) => (
                                <Block>
                                    <Numbering>{("0" + (index + counter)).slice(-2)}</Numbering>
                                    <Container>
                                        <BlockTitle>{content.title}</BlockTitle>
                                        <Text>
                                            {content.description}
                                        </Text>
                                    </Container>
                                </Block>
                            ))}


                        </div>
                    </ContentWrapper>
                </SectionContentContainer>


            </DefaultSection>
        </>
    );
}

export default ServiceContent;