import React from "react";
import styled from "styled-components";
import {
  DefaultSection,
  GraySection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../section";

const ServiceTitle = styled(SectionTitle)`
  margin: 0px 0px;
  text-align: left;
  @media (max-width: 1269px) {
    text-align: center;
  }
`;

const RightServiceTitle = styled(ServiceTitle)`
  text-align: right;
  width: 100%;
  @media (max-width: 1269px) {
    text-align: center;
  }
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Description = styled("div")`
  max-width: 500px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  margin: 0px 0px;
  flex: 1;
  text-align: left;
  @media (max-width: 1269px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const RightDescription = styled(Description)`
  text-align: right;
  @media (max-width: 1269px) {
    text-align: center;
  }
`;
const RightContainer = styled("div")`
  margin-left: 100px;
  @media (max-width: 1269px) {
    margin-left: 0;
  }
`;

const LeftContainer = styled("div")`
  margin-right: 100px;
  @media (max-width: 1269px) {
    margin-right: 0;
  }
`;

const Image = styled("img")`
  flex: 1;
  width: 50%;
  @media (max-width: 1269px) {
    order: -1;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 30px 0px;
  }
`;

const Services = ({ data }) => {
  const services = data.services;
  return (
    <>
      {services.map((service, index) => (
        <div id={service.id} key={index}>
          {index % 2 == 0 ? (
            <DefaultSection>
              {index == 0 ? (
                <SectionHeaderContainer>
                  <SectionTitle>
                    {data.servicePage.serviceSectionTitle}
                  </SectionTitle>
                  <CenteredText>
                    {data.servicePage.serviceSectionSubTitle}
                  </CenteredText>
                </SectionHeaderContainer>
              ) : null}
              <SectionContentContainer>
                <FlexRow>
                  <Image
                    src={require("../../assets/images/services/taxi.svg")}
                  />
                  <RightContainer>
                    <RightServiceTitle>{service.name}</RightServiceTitle>

                    {service.longDescription.map((description, index) => (
                      <RightDescription
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: description.content,
                        }}
                      />
                    ))}
                  </RightContainer>
                </FlexRow>
              </SectionContentContainer>
            </DefaultSection>
          ) : (
            <GraySection>
              <FlexRow>
                <LeftContainer>
                  <ServiceTitle>{service.name}</ServiceTitle>

                  {service.longDescription.map((description, index) => (
                    <Description
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: description.content,
                      }}
                    />
                  ))}
                </LeftContainer>
                <Image
                  src={require("../../assets/images/services/delivery.svg")}
                />
              </FlexRow>
            </GraySection>
          )}
        </div>
      ))}
    </>
  );
};

export default Services;
