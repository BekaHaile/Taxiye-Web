import React from 'react';
import {DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer, SectionContentContainer } from '../../section';
import FleetSlider from './slide';

const FleetSection = () => {
    return(
        <DefaultSection>
            <SectionHeaderContainer>
            <SectionTitle>Meet our awesome fleet.</SectionTitle>
            <CenteredText>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.</CenteredText>
            </SectionHeaderContainer>
            <FleetSlider />
        </DefaultSection>
    )
}

export default FleetSection;