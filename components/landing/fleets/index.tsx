import React from 'react';
import {DefaultSection, SectionTitle, CenteredText} from '../../section';
import FleetSlider from './slide';

const FleetSection = () => {
    return(
        <DefaultSection>
            <SectionTitle>Meet our awesome fleet.</SectionTitle>
            <CenteredText>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.</CenteredText>
            <FleetSlider />
        </DefaultSection>
    )
}

export default FleetSection;