import React from "react";
import styled from "styled-components";
import {
  DefaultSection,
  GraySection,
  SectionTitle,
  CenteredText,
} from "../section";

const ServiceTitle = styled(SectionTitle)`
  margin: 30px 0px;
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
  margin: 60px 0px;
  width: 100%;
`;

const Description = styled("p")`
  ont-weight: normal;
  font-size: 16px;
  line-height: 22px;
  margin: 30px 0px;
  max-width: 500px;
  flex: 1;
  text-align:left;
`;

const RightDescription = styled(Description)`
  text-align: right;
`;

const Image = styled('img')`
max-width: 550px;
flex: 1;
`;

const Services = () => {
  return (
    <>
      <DefaultSection>
        <SectionTitle>Our Services</SectionTitle>
        <CenteredText>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis,
          mollis viverra conubia ligula inceptos laoreet.
        </CenteredText>
        <FlexRow>
          <Image src={require("../../assets/images/services/taxi.svg")} />
          <div>
            <RightServiceTitle>Taxi on Demand</RightServiceTitle>
            <RightDescription>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
              primis, mollis viverra conubia ligula inceptos laoreet libero
              tortor, nascetur non habitasse iaculis tempor nec egestas fames
              augue, platea porta integer nostra curae sed arcu. Nec ut diam
              vulputate ante scelerisque ridiculus lobortis orci mi curae
              himenaeos quis, senectus curabitur ullamcorper a porttitor nibh
              fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui
              gravida in potenti interdum, class rhoncus neque. Ullamcorper
              porttitor non pharetra cursus nisl mollis pellentesque primis
              penatibus platea, dictum himenaeos eget mi bibendum ad molestie
              aliquet curae quis quisque.
            </RightDescription>
          </div>
        </FlexRow>
      </DefaultSection>
      <GraySection>
        <FlexRow>
          <div>
            <ServiceTitle>City to City Travel</ServiceTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
              primis, mollis viverra conubia ligula inceptos laoreet libero
              tortor, nascetur non habitasse iaculis tempor nec egestas fames
              augue, platea porta integer nostra curae sed arcu. Nec ut diam
              vulputate ante scelerisque ridiculus lobortis orci mi curae
              himenaeos quis, senectus curabitur ullamcorper a porttitor nibh
              fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui
              gravida in potenti interdum, class rhoncus neque. Ullamcorper
              porttitor non pharetra cursus nisl mollis pellentesque primis
              penatibus platea, dictum himenaeos eget mi bibendum ad molestie
              aliquet curae quis quisque.
            </Description>
          </div>
          <Image src={require("../../assets/images/services/city-travel.svg")} />
        </FlexRow>
      </GraySection>
      <DefaultSection>
        <FlexRow>
          <Image src={require("../../assets/images/services/rentals.svg")} />
          <div>
            <RightServiceTitle>Hourly Rentals</RightServiceTitle>
            <RightDescription>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
              primis, mollis viverra conubia ligula inceptos laoreet libero
              tortor, nascetur non habitasse iaculis tempor nec egestas fames
              augue, platea porta integer nostra curae sed arcu. Nec ut diam
              vulputate ante scelerisque ridiculus lobortis orci mi curae
              himenaeos quis, senectus curabitur ullamcorper a porttitor nibh
              fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui
              gravida in potenti interdum, class rhoncus neque. Ullamcorper
              porttitor non pharetra cursus nisl mollis pellentesque primis
              penatibus platea, dictum himenaeos eget mi bibendum ad molestie
              aliquet curae quis quisque.
            </RightDescription>
          </div>
        </FlexRow>
      </DefaultSection>
      <GraySection>
        <FlexRow>
          <div>
            <ServiceTitle>Messenger Delivery</ServiceTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
              primis, mollis viverra conubia ligula inceptos laoreet libero
              tortor, nascetur non habitasse iaculis tempor nec egestas fames
              augue, platea porta integer nostra curae sed arcu. Nec ut diam
              vulputate ante scelerisque ridiculus lobortis orci mi curae
              himenaeos quis, senectus curabitur ullamcorper a porttitor nibh
              fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui
              gravida in potenti interdum, class rhoncus neque. Ullamcorper
              porttitor non pharetra cursus nisl mollis pellentesque primis
              penatibus platea, dictum himenaeos eget mi bibendum ad molestie
              aliquet curae quis quisque.
            </Description>
          </div>
          <Image src={require("../../assets/images/services/delivery.svg")} />
        </FlexRow>
      </GraySection>
    </>
  );
};

export default Services;
