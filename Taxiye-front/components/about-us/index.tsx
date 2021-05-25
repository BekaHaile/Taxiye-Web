import React from 'react';
import VisionContent from "./vision";
import TeamContent from "./team";
import Partners from "./partners";
import Services from "./services";
import WeAre from "./we-are";


const AboutUsContent = ({data}) => {
    return(
        <>
        <WeAre
        title={data.aboutUsPage.aboutUsSectionTitle}
        description={data.aboutUsPage.aboutUsSectionDescription}
        primaryImage={data.aboutUsPage.aboutUsSectionPrimaryImage}
        secondaryImage={data.aboutUsPage.aboutUsSectionSecondaryImage}
        />
        <VisionContent contents={data.ourValueStatements}/>
        <Services
            title={data.aboutUsPage.whyUsSectionTitle}
            subTitle={data.aboutUsPage.whyUsSectionSubTitle}
            contents={data.whyTaxiyes}
            mainImage={data.aboutUsPage.whyAsMainImage}
        />
        <Partners 
        title={data.aboutUsPage.ourPartnersSectionTitle}
        subTitle={data.aboutUsPage.ourPartnersSectionSubTitle}
        description={data.aboutUsPage.ourPartnersSectionDescription}
        contents={data.ourPartners}
        />
        <TeamContent
        title={data.aboutUsPage.ourTeamSectionTitle}
        subTitle={data.aboutUsPage.ourTeamSectionSubTitle}
        teamContents={data.ourTeams}
        groupContents={data.ourTeamGroups}
        />
        </>
    );
}

export default AboutUsContent;