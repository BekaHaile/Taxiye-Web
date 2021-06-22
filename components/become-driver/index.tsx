import React from "react";
import SafetyComponent from "../corporate/safety";
import GetStarted from "./get-started";
import WorkFreedom from "./work-freedom";
import Requirements from "./requirements";

const SignUp = ({data}) => {
  return (
    <>
        <WorkFreedom 
        title={data.becomeADriverPage.workFreedomSectionTitle} 
        subTitle={data.becomeADriverPage.workFreedomSectionSubTitle}
        contents={data.driverWorkFreedoms}
        />
        <Requirements
         title={data.becomeADriverPage.requirmentSectionTitle} 
         subTitle={data.becomeADriverPage.requirmentSectionSubTitle}
         contents={data.driverRequirments}
         mainImage={data.becomeADriverPage.requirmentsMainImage}
        />
        <SafetyComponent
        title={data.becomeADriverPage.safetySectionTitle} 
        subTitle={data.becomeADriverPage.safetySectionSubTitle}
        contents={data.driverSafeties}
        />
        <GetStarted title={data.becomeADriverPage.getStartedSectionTitle}/>
    </>
  );
};

export default SignUp;
