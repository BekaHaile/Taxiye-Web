import React from "react";
import { DefaultSection, SectionTitle, CenteredText } from "../../section";
import styled from "styled-components";
import DeviceImage from "./image";
import { ContentWrapper, Numbering, Text, Block, BlockContent, BlockTitle } from './content';


const ServiceContent = () => {
    return (
        <>
            <DefaultSection>
                <SectionTitle>
                    Why ride with Taxiye
                </SectionTitle>
                <CenteredText>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor.
                </CenteredText>
                <ContentWrapper>
                    <div>
                        <Block>
                            <Numbering>1 </Numbering>
                            <div>
                                <BlockTitle>Track your trip</BlockTitle>
                                <Text>
                                    Real time trip details can be shared with family and friends.
                                </Text>
                            </div>
                        </Block>
                        <Block>
                            <Numbering>2 </Numbering>
                            <div>
                                <BlockTitle>Phone Number Privacy</BlockTitle>
                                <Text>
                                    Customer’s mobile number is masked at the driver’s end to ensure
                                    privacy.
                                </Text>
                            </div>
                        </Block>
                    </div>
                    <DeviceImage />
                    <div>
                        <Block>
                            <Numbering>3 </Numbering>
                            <div>
                                <BlockTitle>Verified Professional Drivers</BlockTitle>
                                <Text>
                                    Thorough background checks are conducted on Taxiye drivers.
                                </Text>
                            </div>
                        </Block>
                        <Block>
                            <Numbering>4 </Numbering>
                            <div>
                                <BlockTitle>Emergency alert button</BlockTitle>
                                <Text>
                                    Button can be used to alert the emergency contacts or nearest
                                    PCR.
                                </Text>
                            </div>
                        </Block>
                    </div>
                </ContentWrapper>



            </DefaultSection>
        </>
    );
}

export default ServiceContent;