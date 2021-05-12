import React from "react";
import styled from "styled-components";

import {DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer, SectionContentContainer } from '../../section';

const ServiceTitle = styled("h3")`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #444444;
  padding-bottom:10px;
`;

const ServiceText = styled("p")`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #444444;
  width: 290px;
  padding-bottom:10px;
`;

const ServicesWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Image = styled("img")`
height:78px;
width:65px;
padding-bottom:30px;
`;

const ServiceWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled("button")`
  height: 34px;
  border: 1px solid #A02167;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #A02167;
  background: #fff;
  padding: 5px 20px
`;

const Services = () => {
  return (
    <DefaultSection>
      <SectionHeaderContainer>
      <SectionTitle>Choose the trip that suits you.</SectionTitle>
      <CenteredText>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis,
        mollis viverra conubia ligula inceptos laoreet.
      </CenteredText>
      </SectionHeaderContainer>
      <SectionContentContainer>
      <ServicesWrapper>
        <ServiceWrapper>
          <Image
            
            src={require("../../../assets/icons/service.png")}
          />
          <ServiceTitle>Taxi on Demand</ServiceTitle>
          <ServiceText>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
            primis, mollis viverra.
          </ServiceText>
          <Button>Load More</Button>
        </ServiceWrapper>
        <ServiceWrapper>
          <Image
            
            src={require("../../../assets/icons/destination.png")}
          />
          <ServiceTitle>City to City Travel</ServiceTitle>
          <ServiceText>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
            primis, mollis viverra.
          </ServiceText>
          <Button>Load More</Button>
        </ServiceWrapper>
        <ServiceWrapper>
          <Image
           
            src={require("../../../assets/icons/rate.png")}
          />
          <ServiceTitle>Hourly Rental</ServiceTitle>
          <ServiceText>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
            primis, mollis viverra.
          </ServiceText>
          <Button>Load More</Button>
        </ServiceWrapper>
        <ServiceWrapper>
          <Image
            height="78px"
            width="65px"
            src={require("../../../assets/icons/delivery.png")}
          />
          <ServiceTitle>Messenger Delivery</ServiceTitle>
          <ServiceText>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
            primis, mollis viverra.
          </ServiceText>
          <Button>Load More</Button>
        </ServiceWrapper>
      </ServicesWrapper>
    </SectionContentContainer>
    </DefaultSection>
  );
};

export default Services;
