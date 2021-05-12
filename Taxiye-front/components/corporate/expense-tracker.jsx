import React from 'react';
import styled from 'styled-components';
import {GraySection, CenteredText, SectionTitle, SectionHeaderContainer, SectionContentContainer} from '../section';
import Cards from './card';

const CustomSectionTitle = styled(SectionTitle)`
width:400px;
text-align:center;
margin:auto;
`;

const ExpenseTracker = () => {
    return(
        <GraySection>
            <SectionHeaderContainer>
            <CustomSectionTitle>Cut down your employee travel expenses</CustomSectionTitle>
            <CenteredText>Taxiye can help your company save a few bucks in managing employee travel.</CenteredText>
            </SectionHeaderContainer>
            <SectionContentContainer>
            <Cards />
            </SectionContentContainer>
        </GraySection>
    );
}

export default ExpenseTracker;