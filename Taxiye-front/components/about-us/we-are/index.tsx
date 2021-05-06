import React from "react";
import styled from "styled-components";
import {
    DefaultSection,
    SectionTitle,
} from "../../section";

const ServiceTitle = styled(SectionTitle)`
  margin: 30px 0px;
`;

const LeftServiceTitle = styled(ServiceTitle)`
text-align: Left;
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: left;
  margin: 60px 0px 0px 0px;
  width: 100%;
  min-height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled("div")`
    align-items: center;
    margin:0px 30px;
`;



const Description = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;

color: #363636;
  margin: 30px 0px;
  max-width: 500px;
  flex: 1;

`;

const LeftDescription = styled(Description)`
  text-align: Left;
  
`;

const Image = styled('img')`

flex: 1;
`;

const WeAreContent = () => {
    return (
        <>
            <DefaultSection>

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
                    <Image src={require("../../../assets/images/group-image.png")} />
                </FlexRow>
            </DefaultSection>
        </>
    );
};

export default WeAreContent;
