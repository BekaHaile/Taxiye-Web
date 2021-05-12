import React from "react";
import { DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer,SectionContentContainer  } from "../../section";
import styled from "styled-components";
import DeviceImage from "./image";
import { ContentWrapper, Numbering, Text, Block, RightText, BlockTitle, RightBlockTitle, Container } from './content';


const ServiceContent = () => {
    return (
        <>
            <DefaultSection>
            <SectionHeaderContainer>
                <SectionTitle>
                    Why ride with Taxiye
                </SectionTitle>
                <CenteredText>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor.
                </CenteredText>
                </SectionHeaderContainer>
                <SectionContentContainer>
                <ContentWrapper>
                    <div>
                        <Block>
                            <Container>
                                <RightBlockTitle>Safer Rides</RightBlockTitle>
                                <RightText>
                                Verified drivers, live tracking and an in-app emergency button accessible to suit your safety needs.
                                </RightText>
                            </Container>
                            <Numbering>01 </Numbering>

                        </Block>
                        <Block>
                           
                            <Container>
                                <RightBlockTitle>Reliable Services</RightBlockTitle>
                                <RightText>
                                Taxiye strives to provide reliable taxi services to all its passengers to fulfill all their travel needs
                                </RightText>
                            </Container>
                            <Numbering>02 </Numbering>
                        </Block>
                    </div>
                    <DeviceImage />
                    <div>
                        <Block>
                            <Numbering>03 </Numbering>
                            <Container>
                                <BlockTitle>Pocket-friendly Fare</BlockTitle>
                                <Text>
                                Delivering comfy rides at an affordable price is our sole motto as a way to serve our community
                                </Text>
                            </Container>
                        </Block>
                        <Block>
                            <Numbering>04 </Numbering>
                            <Container>
                                <BlockTitle>Instant Booking</BlockTitle>
                                <Text>
                                With the Taxiye app you can immediately book Taxis and get ride easily and in a timely manner.
                                </Text>
                            </Container>
                        </Block>
                    </div>
                </ContentWrapper>
                </SectionContentContainer>


            </DefaultSection>
        </>
    );
}

export default ServiceContent;