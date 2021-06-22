import React from "react";
import styled from "styled-components";
import {
  DefaultSection,
  GraySection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer
} from "../section";

const ServiceTitle = styled(SectionTitle)`
  margin: 0px 0px;
  text-align:left;
`;

const RightServiceTitle = styled(ServiceTitle)`
text-align: right;
width: 100%;
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Description = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
  margin: 0px 0px;
  width:500px;
  flex: 1;
  text-align:left;
`;

const RightDescription = styled(Description)`
  text-align: right;

`;
const RightContainer = styled("div")`
  
  margin-left:100px;
  
`;

const LeftContainer = styled("div")`
  
  margin-right:100px;
  
`;

const Image = styled('img')`
max-width: 550px;
flex: 1;
`;

const Services = ({ data }) => {
  const services = data.services;
  return (
    <>
      {services.map((service, index) => (

        <div id={service.id}  key={index}>
          {index % 2 == 0 ?
            <DefaultSection>
              {index == 0 ?
                <SectionHeaderContainer>
                  <SectionTitle>{data.servicePage.serviceSectionTitle}</SectionTitle>
                  <CenteredText>
                    {data.servicePage.serviceSectionSubTitle}
                  </CenteredText>
                </SectionHeaderContainer> :
                null}
              <SectionContentContainer>
                <FlexRow>
                  <Image src={require("../../assets/images/services/taxi.svg")} />
                  <RightContainer>
                    <RightServiceTitle>{service.name}</RightServiceTitle>

                    
                      {service.longDescription.map((description, index) => (
                        <RightDescription  key={index}>{description.content}</RightDescription>
                      ))}

                    
                  </RightContainer>
                </FlexRow>
              </SectionContentContainer>
            </DefaultSection>
            :
            <GraySection>


              <FlexRow>
                <LeftContainer>
                  <ServiceTitle>{service.name}</ServiceTitle>
                  
                    {service.longDescription.map((description, index) => (
                     <Description  key={index}> {description.content} </Description>
                    ))}
                  
                </LeftContainer>
                <Image src={require("../../assets/images/services/delivery.svg")} />
              </FlexRow>

            </GraySection>
          }
        </div>
      ))}
    </>
  );
};

export default Services;
