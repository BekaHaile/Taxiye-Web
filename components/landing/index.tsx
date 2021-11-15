import React from "react";
import ServiceSection from "./services";
import TestimonySection from "./testimony";
import FleetSection from "./fleets";
import ArticlesSection from "./articles";

const LandingContent = ({data}) => {
  return (
    <>
      <ServiceSection bookingForm={data?.bookingContent?.bookingForm} title={data?.homePage.serviceSectionTitle} subTitle={data?.homePage.serviceSectionSubTitle} services={data.services} />
      <TestimonySection title={data?.homePage.testimonySectionTitle} subTitle={data?.homePage.testimonySectionSubTitle} testimonies={data.testimonies} />
      <FleetSection title={data?.homePage.fleetSectionTitle} subTitle={data?.homePage.fleetSectionSubTitle} fleets={data.fleets} />
      <ArticlesSection title={data?.homePage.articleSectionTitle} subTitle={data?.homePage.articleSectionSubTitle} articles={data.articles} />
    </>
  );
};

export default LandingContent;
