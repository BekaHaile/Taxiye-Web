import React from 'react';
import styled from 'styled-components';
import {GraySection, CenteredText, SectionTitle} from '../section';
import Cards from './card';

const ExpenseTracker = () => {
    return(
        <GraySection>
            <SectionTitle>Cut down your employee travel expenses</SectionTitle>
            <CenteredText>Taxiye can help your company save a few bucks in managing employee travel.</CenteredText>
            <Cards />
        </GraySection>
    );
}

export default ExpenseTracker;