import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TabbedForms from "../../tab-forms/tab";
import {
  DefaultSection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../../section";
import theme from "../../../theme/main";

const ServiceTitle = styled("h3")`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.colors.primaryTextColor};
  padding-bottom: 10px;
`;

const ServiceText = styled("p")`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  width: 290px;
  padding-bottom: 10px;
  @media (max-width: 290px) {
    width: 100%;
  }
`;

const ServicesWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Image = styled("img")`
  height: 78px;
  width: 65px;
  padding-bottom: 30px;
`;

const ServiceWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled("button")`
  height: 34px;
  border: 1px solid ${theme.colors.primary};
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  padding: 5px 20px;
`;

interface ServiceProps {
  services: {
    id: any;
    name: string;
    shortDescription: any;
    thumbnail: any;
  }[];
  title: string;
  subTitle: string;
}

const Services = ({ services, title, subTitle }: ServiceProps) => {
  return (
    <DefaultSection>
      <SectionHeaderContainer>
        <SectionTitle>{title}</SectionTitle>
        <CenteredText>{subTitle}</CenteredText>
      </SectionHeaderContainer>
      <SectionContentContainer>
        <ServicesWrapper>
          <div className="mobile-view">
            <TabbedForms />
          </div>
          {services.map((service, index) => (
            <ServiceWrapper key={index}>
              <Image
                src={`${process.env.NEXT_PUBLIC_HOST}${service?.thumbnail.url}`}
              />
              <ServiceTitle>{service?.name}</ServiceTitle>
              <ServiceText>{service?.shortDescription.content}</ServiceText>
              <Link href={`/services#${service?.id}`}>
                <Button>Load More</Button>
              </Link>
            </ServiceWrapper>
          ))}
        </ServicesWrapper>
      </SectionContentContainer>
    </DefaultSection>
  );
};

export default Services;
