import React from 'react';
import styled from 'styled-components';
import {GraySection, CenteredText, SectionTitle, SectionHeaderContainer, SectionContentContainer} from '../section';
import Cards from './card';

const CustomSectionTitle = styled(SectionTitle)`
width:400px;
text-align:center;
margin:auto;
`;

const ExpenseTracker = ({title, subTitle, contents}) => {
    return(
        <GraySection>
            <SectionHeaderContainer>
            <CustomSectionTitle>{title}</CustomSectionTitle>
            <CenteredText>{subTitle}</CenteredText>
            </SectionHeaderContainer>
            <SectionContentContainer>
            <Cards contents={contents}/>
            </SectionContentContainer>
        </GraySection>
    );
}

export default ExpenseTracker;