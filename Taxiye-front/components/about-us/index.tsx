import React from 'react';
import VisionContent from "./vision";
import TeamContent from "./team";
import Partners from "./partners";
import Services from "./services";
import WeAre from "./we-are";


const AboutUsContent = () => {
    return(
        <>
        <WeAre/>
        <VisionContent/>
        <Services/>
        <Partners/>
        <TeamContent/>
        </>
    );
}

export default AboutUsContent;