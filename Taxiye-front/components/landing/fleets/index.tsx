import React from 'react';
import {DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer, SectionContentContainer } from '../../section';
import FleetSlider from './slide';

const FleetSection = ({title, subTitle, fleets}) => {
    return(
        <DefaultSection>
            <SectionHeaderContainer>
            <SectionTitle>{title}</SectionTitle>
            <CenteredText>{subTitle}</CenteredText>
            </SectionHeaderContainer>
            <FleetSlider fleets={fleets}/>
        </DefaultSection>
    )
}

export default FleetSection;