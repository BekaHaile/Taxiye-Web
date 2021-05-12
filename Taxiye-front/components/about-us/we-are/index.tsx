import React from "react";
import styled from "styled-components";
import {
    DefaultSection,
    SectionTitle,
    SectionContentContainer
} from "../../section";

const ServiceTitle = styled(SectionTitle)`
  padding-bottom: 20px;
`;

const LeftServiceTitle = styled(ServiceTitle)`
text-align: Left;
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: left;
  width: 100%;
  min-height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled("div")`
    align-items: center;
    padding-right:60px;
`;



const Description = styled("p")`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #363636;
    max-width: 500px;
    flex: 1;

`;

const LeftDescription = styled(Description)`
  text-align: Left;
  
`;

const TopImage = styled('img')`

height:400px;
width:400px;
margin-top: -250px;
padding-left: 201px;

`;

const Image = styled('img')`
height:400px;
width:400px;
`;

const ImageContainer = styled('div')`
width: 601px;
height: 557px;
`;

const CustomSectionContentContainer = styled(SectionContentContainer)`
padding:0px;
`;



const WeAreContent = () => {
    return (
        <>
            <DefaultSection>
            <CustomSectionContentContainer>
                <FlexRow>

                    <Container>
                        <div>
                            <LeftServiceTitle>Who we are</LeftServiceTitle>
                            <LeftDescription>
                            El-Taxi Trading has entered the taxi hailing app business market on May 2019. The company has developed an on-demand ride-hailing mobile application under the brand name of "TAXIYE” provide local taxi drivers with the platform to work in the modem environment and stay competitive in today's market. As such we strive to make our company the leading house in ride hailing business and to be the number one choice for customers as a means of transportation.
                            </LeftDescription>
                            <LeftDescription>
                                
                            Taxiye is majorly owned by Elnet Technology Pvt. Ltd. and various taxi associations, the public, and the management of the company. The fact that it has included taxi owners' associations and the public in its ownership structure enables it to consider the interest of both the drivers and passengers andultimately provide fair service for the public. We would like both the public andour drivers to feel that Taxiye is their company. Our commitment is to get local Ethiopian drivers to join the 21st century byusing the latest technologies in ride hailing applications.
                            </LeftDescription>
                        </div>
                    </Container>
                 
                    <ImageContainer>
                    <Image src={require("../../../assets/images/about-us/car-image2.svg")} />
                    <TopImage src={require("../../../assets/images/about-us/car-image1.svg")} />
                    </ImageContainer>
               
                </FlexRow>
            </CustomSectionContentContainer>
            </DefaultSection>
        </>
    );
};

export default WeAreContent;
